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

interface IAXPackageTabModel {
	readonly BaseImage: string;
	readonly Packages: IAXPackage[];
}

interface IAXCustomizeTabModel {
	readonly Categories: IAXCategory[];
	readonly Packages: IAXPackage[];
}

interface IAXBuilderModel {
	readonly PackageContent: IAXPackageTabModel;
	readonly CustomizeContent: IAXCustomizeTabModel;
}

interface IAXState {
	PackageView: boolean;
	AccessoryView: boolean;
	SummaryView: boolean;
}

interface IEmptyProperties {
}