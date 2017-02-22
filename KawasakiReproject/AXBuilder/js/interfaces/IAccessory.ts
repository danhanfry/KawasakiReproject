interface IAccessory {
	AccessoryID: number;
	AccessoryName: string;
	AccessoryDesc: string;
	IsColorSpecific: boolean;
	IsActive: boolean;
	IsHidden: boolean;
	IsRequiresOptional: boolean;
	ImageUrl: string;
	Price: number;
	DisplayPrice: string;
	CatID: number;
	IncludedPackageID: number;
	IsSupportingAccessory: boolean;
	IsHideSummary: boolean;
	ColorGroupId: number;
	IsShowInList: boolean;
	ItemGroupID: number;
	OptionalType: number;
	DependantIDs: Array<number>;
	ConfictIDs: Array<number>;
	PackageExclusionIDs: Array<number>;
	InValidColorIDs: Array<number>;
	IncludedPackageIDs: Array<number>;
	RequiredOptionalAccessories: Array<number>;
}