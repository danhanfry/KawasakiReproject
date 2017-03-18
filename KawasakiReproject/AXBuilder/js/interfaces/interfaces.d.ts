interface IAXPackage {
	readonly AccessoryPackageTypeID: number;
	readonly IconImgPath: string;
	readonly PackageName: string;
	readonly PackageTitle: string;
	readonly PackageDescription: string;
	readonly PackageImage: string;
}

interface IAXCategory {
	readonly AccessoryCategoryID: number;
	readonly CategoryName: string;
}

interface IAXColor {
	readonly ColorID: number;
	readonly ColorName: string;
	readonly ColorImgName: string;
	readonly ColorImgName_Active: string;
}

interface IOnlyAXCategory {
	AllCategories: IAXCategory[];
}

interface IOnlyAXPackage {
	AllPackages: IAXPackage[];
}

interface IOnlyAXColor {
	AllColors: IAXColor[];
}

interface IAXSummarySection {
	readonly AccessoriesText: string;
	readonly MSRPText: string;
	readonly SubtotalText: string;
	readonly TotalMSRPText: string;
	readonly DownloadSummaryText: string;
	readonly EmailSummaryText: string;
	readonly ProductCategory: string;
	readonly HideBrowseCatalog: boolean;
}

interface IAXPackageTabModel {
	readonly BaseImage: string;
	readonly Packages: IAXPackage[];
}

interface IAXCustomizeTabModel {
	readonly Categories: IAXCategory[];
	readonly Packages: IAXPackage[];
	readonly Colors: IAXColor[];
}

interface IAXSummaryTabModel {
	readonly Summary: IAXSummarySection;
}

interface IAXBuilderModel {
	readonly PackageContent: IAXPackageTabModel;
	readonly CustomizeContent: IAXCustomizeTabModel;
	readonly SummaryContent: IAXSummaryTabModel;
}

interface IAXState {
	PackageView: boolean;
	AccessoryView: boolean;
	SummaryView: boolean;
}

interface IEmptyProperties {
}