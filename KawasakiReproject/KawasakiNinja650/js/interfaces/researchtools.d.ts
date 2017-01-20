interface IResearchToolsHeader {
	readonly YearLogoImgUrl: string;
	readonly YearModelImgUrl: string;
	readonly ResearchToolText: string;
	readonly ResearchDealership: string;
}

interface IResearchToolsHeaderModel {
	readonly Model: IResearchToolsHeader;
}

interface IResearchToolsLink {
	Text: string;
	Href: string;
}

interface IResearchToolsLinks {
	readonly HeaderText: string;
	readonly Links: Array<IResearchToolsLink>;
}

interface IResearchToolsLinksModel {
	readonly Model: IResearchToolsLinks;
}

interface IResearchToolsLinksState {
	readonly LinksState: IResearchToolsLinks[];
}

interface IResearchToolsStartStop {
	readonly RestartImgPath: string;
	readonly RestartText: string;
	readonly ExitExperienceImgPath: string;
	readonly ExitExperienceText: string;
}

interface IResearchToolsStartStopModel {
	readonly Model: IResearchToolsStartStop;
}

interface IResearchToolsProperties {
	readonly ResearchToolsHeaderProp: IResearchToolsHeader;
	readonly ResearchToolsStartStopProp: IResearchToolsStartStop;
	//readonly ResearchToolsLinksProp: IResearchToolsLinks;
}

interface IResearchToolsModel {
	readonly ResearchToolsProperties: IResearchToolsProperties;
}