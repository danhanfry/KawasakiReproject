/// <reference path="../interfaces/interfaces.d.ts" />

class AXPackageModel implements IAXPackageTabModel {

	constructor(public BaseImage: string, public Packages: IAXPackage[]) {
	}
}

class AXCustomizeModel implements IAXCustomizeTabModel {

	constructor(public Categories: IAXCategory[], public Packages: IAXPackage[], public Colors: IAXColor[]) {
	}
}

class AXSummaryModel implements IAXSummaryTabModel {

	constructor(public Summary: IAXSummarySection) {
	}
}

class AXModel implements IAXBuilderModel {

	constructor(public PackageContent: IAXPackageTabModel, public CustomizeContent: IAXCustomizeTabModel,
		public SummaryContent: IAXSummaryTabModel) {
	}

}