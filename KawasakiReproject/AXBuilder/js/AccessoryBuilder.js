var Kawasaki;
(function (Kawasaki) {
    var FuseAXBuilder = (function () {
        function FuseAXBuilder(accessorySourceList, productId, ajaxpath) {
            var _this = this;
            this.accessoryList = new Collection();
            this.productId = 0;
            this.ajaxGetImagepath = "";
            this.hidePrices = false;
            this.parentCategoryId = 0;
            this.currentColorID = 0;
            this.currentPackageID = 0;
            this.runnintTotal = 0;
            this.ActiveArr = new Collection();
            this.ClickArr = new Collection();
            this.PendingAcessoriesAdd = new Collection();
            this.PendingConflictsToBeRemoved = new Collection();
            this.DependantIDs = new Collection();
            this.AreDepenanciesToBeAdded = false;
            this.ArePendingConflictsToBeRemoved = false;
            this.DependanciesExist = false;
            this.AddAccessorries = function (objToAdd) {
                if (Array.isArray(objToAdd)) {
                    objToAdd.map(function (value, idex) {
                        _this.AddAccessoryToASelectArr(value);
                    });
                }
                else {
                    _this.AddAccessoryToASelectArr(objToAdd);
                }
            };
            this.AddAccessoryCheck = function (accessoryId) {
                var newAccessory = _this.GetAccessoryItemByID(accessoryId);
                _this.FindDepedentAccessories(newAccessory);
                _this.FindConflictingAccessories(newAccessory);
                _this.FindDependenciesOfConflicts(_this.PendingConflictsToBeRemoved.ToArray());
                _this.PendingConflictsToBeRemoved.Where(function (o) { return o.ItemGroupID != null; })
                    .Select(function (o) { return o.ItemGroupID; })
                    .Distinct()
                    .ForEach(function (accessory, index) {
                    if (_this.ClickArr.Contains(accessory)) {
                        _this.ClickArr.RemoveAt(_this.ClickArr.IndexOf(accessory));
                    }
                    _this.ActiveArr.Where(function (o) { return o.ItemGroupID === accessory; })
                        .ForEach(function (val, idx) {
                        if (_this.PendingConflictsToBeRemoved.Contains(val)) {
                            _this.PendingConflictsToBeRemoved.Add(val);
                        }
                    });
                });
                _this.ArePendingConflictsToBeRemoved = (_this.PendingConflictsToBeRemoved.Any());
            };
            this.AddClickActionID = function (accessoryId) {
                _this.ClickArr.Add(accessoryId);
            };
            this.AddClickAction = function (accessory) {
                _this.ClickArr.Add(accessory.AccessoryID);
            };
            this.CheckColorConflicts = function (colorId) {
                var isColorConflict = false;
                var itemsConflictingWithNewColor = [];
                var itemsToBeAddedToList = [];
                _this.ActiveArr.Where(function (o) { return o.IsColorSpecific; }).ForEach(function (value, index) {
                    var invalidColors = new Collection(value.InValidColorIDs);
                    invalidColors.ForEach(function (val, idx) {
                        if (val === colorId) {
                            isColorConflict = true;
                            itemsConflictingWithNewColor.push(value.AccessoryID);
                        }
                    });
                });
                _this.accessoryList.Where(function (o) { return o.IsColorSpecific; }).ForEach(function (value, index) {
                    if (value.InValidColorIDs.indexOf(_this.currentColorID) >= 0 && value.InValidColorIDs.indexOf(colorId) === -1) {
                        isColorConflict = true;
                        itemsToBeAddedToList.push(value.AccessoryID);
                    }
                    if (value.InValidColorIDs.indexOf(colorId) >= 0 && value.InValidColorIDs.indexOf(_this.currentColorID) === -1) {
                        isColorConflict = true;
                        if (itemsConflictingWithNewColor.indexOf(value.AccessoryID) === -1) {
                            itemsConflictingWithNewColor.push(value.AccessoryID);
                        }
                    }
                });
                if (isColorConflict) {
                    if (_this.ColorConflictDelegate !== undefined) {
                        _this.ColorConflictDelegate(itemsToBeAddedToList, itemsConflictingWithNewColor);
                    }
                }
            };
            this.CurrentColorIdCheck = function () {
                if (_this.currentColorID === null) {
                }
            };
            this.FindDepedentAccessories = function (accessory) {
                if (_this.PendingAcessoriesAdd.Where(function (o) { return o.AccessoryID === accessory.AccessoryID; }).Any()) {
                    var packageExclusionIds = new Collection(accessory.PackageExclusionIDs);
                    if (packageExclusionIds.Where(function (o) { return o === _this.currentPackageID; }).Any()) {
                        _this.PendingAcessoriesAdd.Add(accessory);
                    }
                    var dependantIds = new Collection(accessory.DependantIDs);
                    dependantIds.ForEach(function (value, index) {
                        if (!_this.AreDepenanciesToBeAdded) {
                            _this.AreDepenanciesToBeAdded = true;
                        }
                        if (!_this.PendingAcessoriesAdd.Where(function (o) { return o.AccessoryID === value; }).Any()) {
                            _this.FindDepedentAccessories(_this.GetAccessoryItemByID(value));
                        }
                    });
                }
                return _this.AreDepenanciesToBeAdded;
            };
            this.FindConflictingAccessories = function (accessory) {
                _this.ActiveArr.ForEach(function (value, index) {
                    var conflictsIds = new Collection(accessory.ConfictIDs);
                    conflictsIds.ForEach(function (val, idx) {
                        if (val === value.AccessoryID) {
                            _this.ArePendingConflictsToBeRemoved = true;
                            if (_this.PendingConflictsToBeRemoved.Contains(value)) {
                                _this.PendingConflictsToBeRemoved.Add(value);
                            }
                        }
                    });
                    var dependantIds = new Collection(accessory.DependantIDs);
                    dependantIds.ForEach(function (newValue, index) {
                        var currentAccessory = _this.GetAccessoryItemByID(newValue);
                        var xconflictsIds = new Collection(currentAccessory.ConfictIDs);
                        xconflictsIds.ForEach(function (val, idx) {
                            if (_this.PendingConflictsToBeRemoved.Contains(value)) {
                                _this.PendingConflictsToBeRemoved.Add(value);
                            }
                        });
                    });
                });
            };
            this.FindDependenciesOfConflicts = function (conflictsArray) {
                var newAccessoryList = new Collection();
                var conflictsAccessory = new Collection(conflictsArray);
                conflictsAccessory.ForEach(function (value, index) {
                    _this.ActiveArr.ForEach(function (val, idx) {
                        var currentDependentIds = new Collection(val.DependantIDs);
                        if (currentDependentIds.Contains(value.AccessoryID)) {
                            if (_this.PendingConflictsToBeRemoved.Contains(val)) {
                                newAccessoryList.Add(val);
                                _this.PendingConflictsToBeRemoved.Add(val);
                            }
                        }
                    });
                });
                if (newAccessoryList.Any()) {
                    newAccessoryList.ForEach(function (value, index) {
                        var itemsInArrayDependOnItemId = _this.FindItemsInArrayWhichDependOnItemID(value, _this.PendingConflictsToBeRemoved.ToArray());
                        itemsInArrayDependOnItemId.ForEach(function (val, idx) {
                            if (_this.PendingConflictsToBeRemoved.Contains(val)) {
                                _this.PendingConflictsToBeRemoved.Add(val);
                            }
                        });
                    });
                    _this.FindDependenciesOfConflicts(newAccessoryList.ToArray());
                }
            };
            this.FindDepenanciesOfAccessory = function (accessoryId) {
                _this.ActiveArr.ForEach(function (value, index) {
                    var alreadyExist = _this.DependantIDs.Where(function (o) { return o.AccessoryID === value.AccessoryID; }).Any();
                    if (!alreadyExist) {
                        var accessoryInDependants = new Collection(value.DependantIDs);
                        if (accessoryInDependants.Contains(accessoryId)) {
                            _this.DependanciesExist = true;
                            _this.DependantIDs.Add(value);
                            accessoryInDependants.ForEach(function (val, idx) {
                                var dependency = _this.GetAccessoryItemByID(val);
                                var alreadyExistAgain = _this.DependantIDs.Where(function (o) { return o.AccessoryID === val; }).Any();
                                if (!alreadyExistAgain) {
                                    _this.DependanciesExist = true;
                                    _this.DependantIDs.Add(dependency);
                                }
                            });
                            _this.FindDepenanciesOfAccessory(value.AccessoryID);
                        }
                    }
                });
                return _this.DependanciesExist;
            };
            this.FindItemsInArrayWhichDependOnItemID = function (objItm, arr) {
                var outgoingCollection = new Collection();
                _this.ActiveArr.ForEach(function (value, index) {
                    if (objItm.DependantIDs.indexOf(value.AccessoryID) >= 0 && value.ItemGroupID == null) {
                        if (arr.indexOf(value) < 0) {
                            outgoingCollection.Add(value);
                        }
                    }
                });
                return outgoingCollection;
            };
            this.GetAccessoriesForDisplay = function () {
                _this.accessoryList.Where(function (o) { return !o.IsShowInList; })
                    .ForEach(function (value, index) {
                    var colorConflict = false;
                    new Collection(value.InValidColorIDs).ForEach(function (numval, numidx) {
                        if (!colorConflict && numval === _this.currentColorID) {
                            colorConflict = true;
                        }
                    });
                    var packageExclusions = false;
                    new Collection(value.PackageExclusionIDs).ForEach(function (pkgvalue, pkgidx) {
                        if (!packageExclusions && pkgvalue === _this.currentPackageID) {
                            packageExclusions = true;
                        }
                    });
                    if (_this.hidePrices) {
                        value.DisplayPrice = "";
                        value.Price = 0;
                    }
                    if (!colorConflict && !packageExclusions) {
                    }
                    else if (colorConflict && !packageExclusions) {
                    }
                });
            };
            this.GetAccessoryItemByID = function (accessoryID) {
                return _this.accessoryList.FirstOrDefault(function (o) { return o.AccessoryID === accessoryID; });
            };
            this.GetActiveArr = function () {
                return _this.ActiveArr.ToArray();
            };
            this.GetGetClickArray = function () {
                return _this.ClickArr.ToArray();
            };
            this.GetHidePrice = function () {
                return _this.hidePrices;
            };
            this.GetParentCategoryId = function () {
                return _this.parentCategoryId;
            };
            this.GetPendingAccessoriesByAccessoryClick = function (accessoryId) {
                _this.AddAccessoryCheck(accessoryId);
                return _this.PendingAcessoriesAdd;
            };
            this.RemoveClickActionID = function (accessoryId) {
                var indexOfAccessory = _this.ClickArr.IndexOf(accessoryId);
                if (indexOfAccessory >= 0) {
                    _this.ClickArr.RemoveAt(indexOfAccessory);
                    if (indexOfAccessory >= 0) {
                        _this.RemoveClickActionID(accessoryId);
                    }
                }
            };
            this.RemoveAccessorries = function (objToRemove) {
                if (Array.isArray(objToRemove)) {
                    var objToRemoveCollection_1 = new Collection(objToRemove);
                    objToRemoveCollection_1.ForEach(function (value, index) {
                        _this.ActiveArr.RemoveAt(_this.ActiveArr.IndexOf(value));
                        _this.RemoveClickActionID(value.AccessoryID);
                    });
                    _this.ActiveArr.ForEach(function (val, idx) {
                        var activeDependants = new Collection(val.DependantIDs);
                        activeDependants.ForEach(function (numval, numidx) {
                            objToRemoveCollection_1.ForEach(function (objvalue, objIdx) {
                                if (numval === objvalue.AccessoryID) {
                                    _this.AddAccessoryToASelectArr(objvalue);
                                }
                            });
                        });
                    });
                }
                else {
                    _this.ActiveArr.RemoveAt(_this.ActiveArr.IndexOf(objToRemove));
                    _this.RemoveClickActionID(objToRemove.AccessoryID);
                }
            };
            this.RemoveAccessoryCheck = function (accessoryId) {
                var newAccessory = _this.GetAccessoryItemByID(accessoryId);
                _this.DependantIDs.Add(newAccessory);
                var newAccessoryDependentIds = new Collection(newAccessory.DependantIDs);
                newAccessoryDependentIds.ForEach(function (value, index) {
                    var dependency = _this.GetAccessoryItemByID(value);
                    if (dependency.IsShowInList) {
                        var alreadyExist = _this.DependantIDs.Where(function (o) { return o.AccessoryID === value; }).Any();
                        if (!alreadyExist) {
                            _this.DependanciesExist = true;
                            _this.DependantIDs.Add(dependency);
                        }
                    }
                });
                _this.FindDepenanciesOfAccessory(accessoryId);
                var results = _this.FindItemsInArrayWhichDependOnItemID(newAccessory, _this.DependantIDs.ToArray());
                results.ForEach(function (val, idx) {
                    var anyAccessoriesInDependantIds = _this.DependantIDs.Where(function (o) { return o.AccessoryID === val.AccessoryID; });
                    if (!anyAccessoriesInDependantIds.Any()) {
                        _this.DependantIDs.Add(val);
                    }
                });
                _this.ClickArr.Where(function (o) { return o !== accessoryId; }).Distinct()
                    .ForEach(function (ovalue, oindex) {
                    var nItem = _this.GetAccessoryItemByID(ovalue);
                    var dependenciesItems = new Collection(nItem.DependantIDs);
                    if (ovalue != accessoryId && !dependenciesItems.Contains(accessoryId)) {
                        var reqAccess = _this.GetPendingAccessoriesByAccessoryClick(ovalue);
                        reqAccess.ForEach(function (xvalue, xindex) {
                            if (_this.DependantIDs.Contains(xvalue)) {
                                _this.DependantIDs.RemoveAt(_this.DependantIDs.IndexOf(xvalue));
                            }
                        });
                    }
                    else if (_this.ClickArr.Where(function (o) { return o !== accessoryId; }).Distinct().Count() === 1) {
                        var reqAccess = _this.GetPendingAccessoriesByAccessoryClick(ovalue);
                        reqAccess.ForEach(function (xvalue, xindex) {
                            if (!_this.DependantIDs.Contains(xvalue)) {
                                _this.DependantIDs.Add(xvalue);
                            }
                        });
                    }
                });
                _this.DependantIDs.Where(function (o) { return o.ItemGroupID !== null; }).Select(function (o) { return o.ItemGroupID; }).Distinct()
                    .ForEach(function (accessoryId, aindex) {
                    _this.ActiveArr.Where(function (o) { return o.ItemGroupID === accessoryId; })
                        .ForEach(function (aval, aidx) {
                        if (_this.DependantIDs.Contains(aval)) {
                            _this.DependantIDs.Add(aval);
                        }
                    });
                });
                var specialCaseItems = _this.ActiveArr.Where(function (o) { return o.IsRequiresOptional; });
                specialCaseItems.ForEach(function (saccessory, sindex) {
                    if (_this.DependantIDs.Where(function (o) { return o.AccessoryID === saccessory.AccessoryID; }).Any()) {
                        var reqOptionalAccessories = new Collection(saccessory.RequiredOptionalAccessories);
                        reqOptionalAccessories.ForEach(function (reqaccessory, reqindex) {
                            if (_this.ActiveArr.Where(function (x) { return x.AccessoryID === reqaccessory; }).Count() > 0) {
                                if (_this.DependantIDs.Any(function (x) { return x.AccessoryID === reqaccessory; })) {
                                    _this.DependantIDs.Add(_this.GetAccessoryItemByID(reqaccessory));
                                }
                            }
                        });
                    }
                });
                _this.DependantIDs.ForEach(function (dep, idx) {
                    _this.ActiveArr.ForEach(function (activeArrItem, activeidx) {
                        var reqOptionalAccessories = new Collection(activeArrItem.RequiredOptionalAccessories);
                        reqOptionalAccessories.ForEach(function (reqAcc, idx2) {
                            if (reqAcc === dep.AccessoryID) {
                                if (!_this.DependantIDs.Contains(activeArrItem)) {
                                    _this.DependantIDs.Add(activeArrItem);
                                }
                            }
                        });
                    });
                });
                _this.DependanciesExist = (_this.DependantIDs.Count() > 1);
            };
            this.RenderImage = function () {
                var accessoryIds = new Collection();
                _this.ActiveArr.ForEach(function (itm, idx) {
                    accessoryIds.Add(itm.AccessoryID);
                });
                _this.CurrentColorIdCheck();
                var data = { ProductID: _this.productId, AccessoryIds: accessoryIds, ColorID: _this.currentColorID };
                var request = new XMLHttpRequest();
                request.open('POST', _this.ajaxGetImagepath, true);
                request.responseType = 'json';
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                request.setRequestHeader("Accept", "application/json");
                request.onreadystatechange = function () {
                    if (request.readyState == 4 && request.status == 200) {
                        var data_1 = request.responseText;
                    }
                };
                request.send(data);
            };
            this.SetColorIdSelector = function (colorIdSelector, colorButtonIdSelector) {
                _this.colorIdSelector = colorIdSelector;
                _this.colorButtonIdSelector = colorButtonIdSelector;
            };
            this.SetCurrentColorID = function (colorId) {
                _this.currentColorID = colorId;
            };
            this.SetFrontBackImageSelector = function (frontSelector, rearSelector) {
                _this.frontImgSelector = frontSelector;
                _this.rearImgSelector = rearSelector;
            };
            this.SetParentCategoryId = function (id) {
                _this.parentCategoryId = id;
            };
            this.OnColorConflictsFound = function (targetMethod) {
                _this.ColorConflictDelegate = function (currentAdd, conflicts) {
                    targetMethod(currentAdd, conflicts);
                };
            };
            this.ItemTemplate = function (templateFunction) {
                _this.ListItemTemplate = function (objAccessoryItem) {
                    templateFunction(objAccessoryItem);
                };
            };
            this.AddAccessoryToASelectArr = function (objAccessory) {
                var isFound = false;
                _this.ActiveArr.ForEach(function (obj, idx) {
                    if (obj.AccessoryID === objAccessory.AccessoryID) {
                        isFound = true;
                    }
                });
                var isPackageConflict = false;
                var packageConflictId = new Collection();
                _this.ActiveArr.ForEach(function (value, index) {
                    var packageExclusionsIds = new Collection(value.PackageExclusionIDs);
                    packageExclusionsIds.ForEach(function (val, i) {
                        if (val === _this.currentPackageID) {
                            if (!isPackageConflict) {
                                isPackageConflict = true;
                            }
                            packageConflictId.Add(value.AccessoryID);
                        }
                    });
                });
                if (!isFound && !isPackageConflict) {
                    _this.ActiveArr.Add(objAccessory);
                }
            };
            this.accessoryList.Clear();
            this.accessoryList.AddRange(accessorySourceList);
            this.productId = productId;
            this.ajaxGetImagepath = ajaxpath;
        }
        return FuseAXBuilder;
    }());
    Kawasaki.FuseAXBuilder = FuseAXBuilder;
})(Kawasaki || (Kawasaki = {}));
