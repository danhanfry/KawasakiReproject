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

export interface IExploreTiles {
    readonly Id:string;
    readonly Name: string;
    readonly ImagePath: string;
    readonly TileSize: string;
    readonly ClassName:string;
}

export interface IExplorePage {
    readonly Tiles:Array<IExploreTiles>;
}