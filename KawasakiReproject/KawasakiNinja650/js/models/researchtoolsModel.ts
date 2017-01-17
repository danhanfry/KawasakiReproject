/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../interfaces/researchtools.d.ts" />

class ResearchToolsHeaderModel implements IResearchToolsHeader {

	constructor(public YearLogoImgUrl: string, public YearModelImgUrl: string,
				public ResearchToolText:string, public ResearchDealership:string) {
	}
}

class ResearchToolsLinksModel implements IResearchToolsLinks {

	constructor(public HeaderText:string, public Links: Array<IResearchToolsLink>) {
	}
}

class ResearchToolsProperties implements IResearchToolsProperties {

	constructor(public ResearchToolsHeaderProp: IResearchToolsHeader, public ResearchToolsLinksProp: IResearchToolsLinks) {

	}
}