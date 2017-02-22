/// <reference path="../../scripts/core/collection.ts" />
/// <reference path="interfaces/iaccessory.ts" />

namespace Kawasaki {
	export class FuseAXBuilder {

		private accessoryList: Collection<IAccessory> = new Collection<IAccessory>();
		private productId: number = 0;
		private ajaxGetImagepath: string = "";
		private hidePrices: boolean = false;
		private parentCategoryId: number = 0;
		private currentColorID: number = 0;
		private currentPackageID: number = 0;
		private runnintTotal: number = 0;

		private frontImgSelector: HTMLElement;
		private rearImgSelector: HTMLElement;
		private colorIdSelector: HTMLElement;
		private colorButtonIdSelector: HTMLElement;

		private ActiveArr: Collection<IAccessory> = new Collection<IAccessory>();
		private ClickArr: Collection<number> = new Collection<number>();
		private PendingAcessoriesAdd: Collection<IAccessory> = new Collection<IAccessory>();
		private PendingConflictsToBeRemoved: Collection<IAccessory> = new Collection<IAccessory>();
		private DependantIDs: Collection<IAccessory> = new Collection<IAccessory>();

		private AreDepenanciesToBeAdded: boolean = false;
		private ArePendingConflictsToBeRemoved: boolean = false;
		private DependanciesExist: boolean = false;


		/*Delegates*/
		private ColorConflictDelegate: Function;
		private ListItemTemplate: Function;

		constructor(accessorySourceList: Array<IAccessory>, productId: number, ajaxpath: string) {
			this.accessoryList.Clear();
			this.accessoryList.AddRange(accessorySourceList);
			this.productId = productId;
			this.ajaxGetImagepath = ajaxpath;
		}

		public AddAccessorries = (objToAdd: IAccessory | Array<IAccessory>): void => {
			if (Array.isArray(objToAdd)) {

				objToAdd.map((value: IAccessory, idex: number):void => {
					this.AddAccessoryToASelectArr(value);
				});
			}
			else {
				this.AddAccessoryToASelectArr(objToAdd);
			}
		}

		public AddAccessoryCheck = (accessoryId: number): void => {
			let newAccessory = this.GetAccessoryItemByID(accessoryId);
			this.FindDepedentAccessories(newAccessory);
			this.FindConflictingAccessories(newAccessory);
			this.FindDependenciesOfConflicts(this.PendingConflictsToBeRemoved.ToArray());

			this.PendingConflictsToBeRemoved.Where(o => o.ItemGroupID != null)
				.Select(o => o.ItemGroupID)
				.Distinct()
				.ForEach((accessory: number, index: number) => {
					if (this.ClickArr.Contains(accessory)) {
						this.ClickArr.RemoveAt(this.ClickArr.IndexOf(accessory));
					}

					this.ActiveArr.Where(o => o.ItemGroupID === accessory)
						.ForEach((val: IAccessory, idx: number) => {
							if (this.PendingConflictsToBeRemoved.Contains(val)) {
								this.PendingConflictsToBeRemoved.Add(val);
							}
						});
				});

			this.ArePendingConflictsToBeRemoved = (this.PendingConflictsToBeRemoved.Any());
		}

		public AddClickActionID = (accessoryId:number): void => {
			this.ClickArr.Add(accessoryId);
		}

		public AddClickAction = (accessory: IAccessory): void => {
			this.ClickArr.Add(accessory.AccessoryID);
		}

		public CheckColorConflicts = (colorId: number): void => {

			let isColorConflict: boolean = false;
			let itemsConflictingWithNewColor: Array<number> = [];
			let itemsToBeAddedToList: Array<number> = [];

			this.ActiveArr.Where(o => o.IsColorSpecific).ForEach((value: IAccessory, index: number) => {
				let invalidColors: Collection<number> = new Collection<number>(value.InValidColorIDs);
				invalidColors.ForEach((val: number, idx: number) => {
					if (val === colorId) {
						isColorConflict = true;
						itemsConflictingWithNewColor.push(value.AccessoryID);
					}
				});
			});

			this.accessoryList.Where(o => o.IsColorSpecific).ForEach((value: IAccessory, index: number) => {
				if (value.InValidColorIDs.indexOf(this.currentColorID) >= 0 && value.InValidColorIDs.indexOf(colorId) === -1) {
					isColorConflict = true;
					itemsToBeAddedToList.push(value.AccessoryID);
				}

				if (value.InValidColorIDs.indexOf(colorId) >= 0 && value.InValidColorIDs.indexOf(this.currentColorID) === -1) {
					isColorConflict = true;
					if (itemsConflictingWithNewColor.indexOf(value.AccessoryID) === -1) {
						itemsConflictingWithNewColor.push(value.AccessoryID);
					}
				}
			});

			if (isColorConflict) {
				if (this.ColorConflictDelegate !== undefined) {
					this.ColorConflictDelegate(itemsToBeAddedToList, itemsConflictingWithNewColor);
				}
			}
		}

		public CurrentColorIdCheck = (): void => {
			if (this.currentColorID === null) {
				/*
					CurrentColorID = $(ColorIdSelector).attr('data-id');
					$(ColorButtonIdSelector).text($(ColorIdSelector).attr('data-colorName'));
				*/
			}
		}

		public FindDepedentAccessories = (accessory: IAccessory): boolean => {

			if (this.PendingAcessoriesAdd.Where(o => o.AccessoryID === accessory.AccessoryID).Any()) {
				let packageExclusionIds: Collection<number> = new Collection<number>(accessory.PackageExclusionIDs);
				if (packageExclusionIds.Where(o => o === this.currentPackageID).Any()) {
					this.PendingAcessoriesAdd.Add(accessory);
				}

				let dependantIds: Collection<number> = new Collection<number>(accessory.DependantIDs);
				dependantIds.ForEach((value: number, index: number) => {
					if (!this.AreDepenanciesToBeAdded) {
						this.AreDepenanciesToBeAdded = true;
					}

					if (!this.PendingAcessoriesAdd.Where(o => o.AccessoryID === value).Any()) {
						this.FindDepedentAccessories(this.GetAccessoryItemByID(value));
					}
				});
			}

			return this.AreDepenanciesToBeAdded;
		}

		public FindConflictingAccessories = (accessory: IAccessory): void => {

			this.ActiveArr.ForEach((value: IAccessory, index: number) => {
				let conflictsIds: Collection<number> = new Collection<number>(accessory.ConfictIDs);
				conflictsIds.ForEach((val: number, idx: number) => {
					if (val === value.AccessoryID) {
						this.ArePendingConflictsToBeRemoved = true;
						if (this.PendingConflictsToBeRemoved.Contains(value)) {
							this.PendingConflictsToBeRemoved.Add(value);
						}
					}
				});

				let dependantIds: Collection<number> = new Collection<number>(accessory.DependantIDs);
				dependantIds.ForEach((newValue: number, index: number) => {
					let currentAccessory = this.GetAccessoryItemByID(newValue);

					let xconflictsIds: Collection<number> = new Collection<number>(currentAccessory.ConfictIDs);
					xconflictsIds.ForEach((val: number, idx: number) => {
						if (this.PendingConflictsToBeRemoved.Contains(value)) {
							this.PendingConflictsToBeRemoved.Add(value);
						}
					});
				});
			});
		}

		public FindDependenciesOfConflicts = (conflictsArray: Array<IAccessory>): void => {
			let newAccessoryList: Collection<IAccessory> = new Collection<IAccessory>();

			let conflictsAccessory: Collection<IAccessory> = new Collection<IAccessory>(conflictsArray);
			conflictsAccessory.ForEach((value: IAccessory, index: number) => {

				this.ActiveArr.ForEach((val: IAccessory, idx: number) => {

					let currentDependentIds: Collection<number> = new Collection<number>(val.DependantIDs);
					if (currentDependentIds.Contains(value.AccessoryID)) {
						if (this.PendingConflictsToBeRemoved.Contains(val)) {
							newAccessoryList.Add(val);
							this.PendingConflictsToBeRemoved.Add(val);
						}
					}

				});

			});

			if (newAccessoryList.Any()) {
				newAccessoryList.ForEach((value: IAccessory, index: number) => {

					let itemsInArrayDependOnItemId = this.FindItemsInArrayWhichDependOnItemID(value, this.PendingConflictsToBeRemoved.ToArray());
					itemsInArrayDependOnItemId.ForEach((val: IAccessory, idx: number) => {

						if (this.PendingConflictsToBeRemoved.Contains(val)) {
							this.PendingConflictsToBeRemoved.Add(val);
						}

					});
				});

				this.FindDependenciesOfConflicts(newAccessoryList.ToArray());
			}
		}

		public FindDepenanciesOfAccessory = (accessoryId:number): boolean => {


			this.ActiveArr.ForEach((value: IAccessory, index: number) => {

				var alreadyExist = this.DependantIDs.Where(o => o.AccessoryID === value.AccessoryID).Any();
				if (!alreadyExist) {

					let accessoryInDependants: Collection<number> = new Collection<number>(value.DependantIDs);
					if (accessoryInDependants.Contains(accessoryId)) {
						this.DependanciesExist = true;
						this.DependantIDs.Add(value);

						accessoryInDependants.ForEach((val: number, idx: number) => {

							let dependency: IAccessory = this.GetAccessoryItemByID(val);
							let alreadyExistAgain: boolean = this.DependantIDs.Where(o => o.AccessoryID === val).Any();
							if (!alreadyExistAgain) {
								this.DependanciesExist = true;
								this.DependantIDs.Add(dependency);
							}

						});

						this.FindDepenanciesOfAccessory(value.AccessoryID);
					}

				}

			});

			return this.DependanciesExist;
		}

		public FindItemsInArrayWhichDependOnItemID = (objItm: IAccessory, arr: Array<IAccessory>): Collection<IAccessory> => {

			let outgoingCollection: Collection<IAccessory> = new Collection<IAccessory>();
			this.ActiveArr.ForEach((value: IAccessory, index: number) => {

				if (objItm.DependantIDs.indexOf(value.AccessoryID) >= 0 && value.ItemGroupID == null) {

					if (arr.indexOf(value) < 0) {
						outgoingCollection.Add(value);
					}

				}

			});

			return outgoingCollection;
		}

		public GetAccessoriesForDisplay = (): void => {

			this.accessoryList.Where(o => !o.IsShowInList)
				.ForEach((value: IAccessory, index: number) => {

					let colorConflict: boolean = false;
					new Collection(value.InValidColorIDs).ForEach((numval: number, numidx: number) => {
						if (!colorConflict && numval === this.currentColorID) {
							colorConflict = true;
						}
					});

					let packageExclusions: boolean = false;
					new Collection(value.PackageExclusionIDs).ForEach((pkgvalue: number, pkgidx: number) => {
						if (!packageExclusions && pkgvalue === this.currentPackageID) {
							packageExclusions = true;
						}
					});

					if (this.hidePrices) {
						value.DisplayPrice = "";
						value.Price = 0;
					}

					if (!colorConflict && !packageExclusions) {
						//$('#cat_' + val.CatID).append(ListItemTemplate(val));
					}
					else if (colorConflict && !packageExclusions) {
						//$('#cat_' + val.CatID).append($(ListItemTemplate(val)).hide());
					}
				});
		}

		public GetAccessoryItemByID = (accessoryID: number): IAccessory => {
			return this.accessoryList.FirstOrDefault(o => o.AccessoryID === accessoryID);
		}

		public GetActiveArr = (): Array<IAccessory> => {
			return this.ActiveArr.ToArray();
		}

		public GetGetClickArray = (): Array<number> => {
			return this.ClickArr.ToArray();
		}

		public GetHidePrice = (): boolean => {
			return this.hidePrices;
		}

		public GetParentCategoryId = (): number => {
			return this.parentCategoryId;
		}

		public GetPendingAccessoriesByAccessoryClick = (accessoryId: number): Collection<IAccessory> => {
			this.AddAccessoryCheck(accessoryId);
			return this.PendingAcessoriesAdd;
		}

		public RemoveClickActionID = (accessoryId: number): void => {

			const indexOfAccessory = this.ClickArr.IndexOf(accessoryId);
			if (indexOfAccessory >= 0) {
				this.ClickArr.RemoveAt(indexOfAccessory);
				if (indexOfAccessory >= 0) {
					this.RemoveClickActionID(accessoryId);
				}
			}
		}

		private RemoveAccessorries = (objToRemove: IAccessory|Array<IAccessory>): void => {

			if (Array.isArray(objToRemove)) {

				let objToRemoveCollection = new Collection<IAccessory>(objToRemove);
				objToRemoveCollection.ForEach((value: IAccessory, index: number) => {
					this.ActiveArr.RemoveAt(this.ActiveArr.IndexOf(value));
					this.RemoveClickActionID(value.AccessoryID);
				});

				this.ActiveArr.ForEach((val: IAccessory, idx: number) => {
					let activeDependants = new Collection<number>(val.DependantIDs);
					activeDependants.ForEach((numval: number, numidx: number) => {
						objToRemoveCollection.ForEach((objvalue: IAccessory, objIdx: number) => {
							if (numval === objvalue.AccessoryID) {
								this.AddAccessoryToASelectArr(objvalue);
							}
						});
					});
				});
				
			}
			else {
				this.ActiveArr.RemoveAt(this.ActiveArr.IndexOf(objToRemove));
				this.RemoveClickActionID(objToRemove.AccessoryID);
			}

		}

		public RemoveAccessoryCheck = (accessoryId:number): void => {
			let newAccessory = this.GetAccessoryItemByID(accessoryId);
			this.DependantIDs.Add(newAccessory);

			let newAccessoryDependentIds: Collection<number> = new Collection<number>(newAccessory.DependantIDs);
			newAccessoryDependentIds.ForEach((value: number, index: number) => {

				let dependency:IAccessory = this.GetAccessoryItemByID(value);
				if (dependency.IsShowInList) {
					let alreadyExist: boolean = this.DependantIDs.Where(o => o.AccessoryID === value).Any();
					if (!alreadyExist) {
						this.DependanciesExist = true;
						this.DependantIDs.Add(dependency);
					}
				}

			});

			this.FindDepenanciesOfAccessory(accessoryId);
			const results = this.FindItemsInArrayWhichDependOnItemID(newAccessory, this.DependantIDs.ToArray());
			results.ForEach((val: IAccessory, idx: number) => {

				const anyAccessoriesInDependantIds = this.DependantIDs.Where(o => o.AccessoryID === val.AccessoryID);
				if (!anyAccessoriesInDependantIds.Any()) {
					this.DependantIDs.Add(val);
				}

			});

			this.ClickArr.Where(o => o !== accessoryId).Distinct()
				.ForEach((ovalue: number, oindex: number) => {
					let nItem = this.GetAccessoryItemByID(ovalue);
					let dependenciesItems: Collection<number> = new Collection<number>(nItem.DependantIDs);
					if (ovalue != accessoryId && !dependenciesItems.Contains(accessoryId)) {
						let reqAccess = this.GetPendingAccessoriesByAccessoryClick(ovalue);
						reqAccess.ForEach((xvalue: IAccessory, xindex: number) => {

							if (this.DependantIDs.Contains(xvalue)) {
								this.DependantIDs.RemoveAt(this.DependantIDs.IndexOf(xvalue));
							}

						});
					}
					else if (this.ClickArr.Where(o => o !== accessoryId).Distinct().Count() === 1) {
						let reqAccess = this.GetPendingAccessoriesByAccessoryClick(ovalue);
						reqAccess.ForEach((xvalue: IAccessory, xindex: number) => {

							if (!this.DependantIDs.Contains(xvalue)) {
								this.DependantIDs.Add(xvalue);
							}

						});
					}
				});

			this.DependantIDs.Where(o => o.ItemGroupID !== null).Select(o => o.ItemGroupID).Distinct()
				.ForEach((accessoryId: number, aindex: number) => {
					this.ActiveArr.Where(o => o.ItemGroupID === accessoryId)
						.ForEach((aval: IAccessory, aidx: number) => {
							if (this.DependantIDs.Contains(aval)) {
								this.DependantIDs.Add(aval);
							}
					});
				});
			
			let specialCaseItems = this.ActiveArr.Where(o => o.IsRequiresOptional);
			specialCaseItems.ForEach((saccessory: IAccessory, sindex: number) => {
				if (this.DependantIDs.Where(o => o.AccessoryID === saccessory.AccessoryID).Any()) {
					let reqOptionalAccessories = new Collection<number>(saccessory.RequiredOptionalAccessories);
					reqOptionalAccessories.ForEach((reqaccessory: number, reqindex: number) => {
						if (this.ActiveArr.Where(x => x.AccessoryID === reqaccessory).Count() > 0) {
							if (this.DependantIDs.Any(x => x.AccessoryID === reqaccessory)) {
								this.DependantIDs.Add(this.GetAccessoryItemByID(reqaccessory));
							}
						}
					});
				}
			});

			this.DependantIDs.ForEach((dep: IAccessory, idx: number) => {
				this.ActiveArr.ForEach((activeArrItem: IAccessory, activeidx: number) => {
					let reqOptionalAccessories = new Collection<number>(activeArrItem.RequiredOptionalAccessories);
					reqOptionalAccessories.ForEach((reqAcc: number, idx2: number) => {
						if (reqAcc === dep.AccessoryID) {
							if (!this.DependantIDs.Contains(activeArrItem)) {
								this.DependantIDs.Add(activeArrItem);
							}
						}
					});
				});
			});

			this.DependanciesExist = (this.DependantIDs.Count() > 1);
		}

		public RenderImage = (): void => {

			let accessoryIds = new Collection<number>();
			this.ActiveArr.ForEach((itm: IAccessory, idx: number) => {
				accessoryIds.Add(itm.AccessoryID);
			});

			this.CurrentColorIdCheck();

			const data = { ProductID: this.productId, AccessoryIds: accessoryIds, ColorID: this.currentColorID };
			var request: XMLHttpRequest = new XMLHttpRequest();
			request.open('POST', this.ajaxGetImagepath, true);
			request.responseType = 'json';
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			request.setRequestHeader("Accept", "application/json");
			request.onreadystatechange = () => {
				if (request.readyState == 4 && request.status == 200) {
					//callback(request.responseText); // Another callback here
					const data = request.responseText;
					//$(FrontImgSelector).attr("src", data.imageFrontURL);
					//$(RearImgSelector).attr("src", data.imageBackURL);
				}
			}; 

			request.send(data);
		}

		public SetColorIdSelector = (colorIdSelector: HTMLElement, colorButtonIdSelector: HTMLElement): void => {
			this.colorIdSelector = colorIdSelector;
			this.colorButtonIdSelector = colorButtonIdSelector;
		}

		public SetCurrentColorID = (colorId: number): void => {
			this.currentColorID = colorId;
		}

		public SetFrontBackImageSelector = (frontSelector: HTMLElement, rearSelector: HTMLElement): void => {
			this.frontImgSelector = frontSelector;
			this.rearImgSelector = rearSelector;
		}

		public SetParentCategoryId = (id: number): void => {
			this.parentCategoryId = id;
		}

		/*DELGATE*/
		public OnColorConflictsFound = (targetMethod: Function): void => {
			this.ColorConflictDelegate = function (currentAdd, conflicts) {
				targetMethod(currentAdd, conflicts);
			};
		}

		public ItemTemplate = (templateFunction: Function): void => {
			this.ListItemTemplate = function (objAccessoryItem) {
				templateFunction(objAccessoryItem);
			}
		}

		/*PRIVATE*/
		private AddAccessoryToASelectArr = (objAccessory:IAccessory): void => {
			let isFound: boolean = false;
			this.ActiveArr.ForEach((obj: IAccessory, idx: number) => {
				if (obj.AccessoryID === objAccessory.AccessoryID) {
					isFound = true;
				}
			});

			let isPackageConflict: boolean = false;
			let packageConflictId: Collection<number> = new Collection<number>();

			this.ActiveArr.ForEach((value: IAccessory, index: number) => {
				const packageExclusionsIds: Collection<number> = new Collection<number>(value.PackageExclusionIDs);
				packageExclusionsIds.ForEach((val: number, i: number) => {
					if (val === this.currentPackageID) {
						if (!isPackageConflict) {
							isPackageConflict = true;
						}

						packageConflictId.Add(value.AccessoryID);
					}
				})
			});

			if (!isFound && !isPackageConflict) {
				this.ActiveArr.Add(objAccessory);
			}
		}
	}
}