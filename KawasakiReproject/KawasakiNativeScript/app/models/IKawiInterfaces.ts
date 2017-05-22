export interface IResearchLink {
    readonly Title:string;
    readonly Href:string;
}

export interface IResearchPageLink {
    readonly Id:string;
    readonly Title:string;
    readonly Links:Array<IResearchLink>;
}

export interface IResearchPage {
    readonly ResearchPage:Array<IResearchPageLink>;
}