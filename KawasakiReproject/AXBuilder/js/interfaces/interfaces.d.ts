interface IAXPackage {
	readonly AccessoryPackageTypeID: number;
	readonly IconImgPath: string;
	readonly PackageName: string;
	readonly PackageTitle: string;
	readonly PackageDescription: string;
	readonly PackageImage: string;
}

interface IAXCategory {
	AccessoryCategoryID: number;
	CategoryName: string;
}

interface IAXPackageTab {
	readonly BaseImage: string;
	readonly Packages: IAXPackage[];
}

interface IAXCustomizeTab {
	Categories: IAXCategory[];
}

interface IAXBuilderModel {
	readonly PackageContent: IAXPackageTab;
	readonly CustomizeContent: IAXCustomizeTab;
}

interface IAXState {
	PackageView: boolean;
	AccessoryView: boolean;
	SummaryView: boolean;
}

interface IEmptyProperties {
}