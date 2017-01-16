interface IResearchToolsHeader {
	YearLogoImgUrl: string;
	YearModelImgUrl: string;
	ResearchToolText: string;
	ResearchDealership: string;
}

interface IResearchToolsHeaderModel {
	Model: IResearchToolsHeader;
}

interface IResearchToolsLink {
	Text: string;
	Href: string;
}

interface IResearchToolsLinks {
	Links: Array<IResearchToolsLink>;
}

interface IResearchToolsLinksModel {
	Model: IResearchToolsLinks;
}

interface IResearchToolsProperties {
	ResearchToolsHeaderProp: IResearchToolsHeader;
	ResearchToolsLinksProp: IResearchToolsLinks;
}

interface IResearchToolsModel {
	ResearchToolsProperties: IResearchToolsProperties;
}