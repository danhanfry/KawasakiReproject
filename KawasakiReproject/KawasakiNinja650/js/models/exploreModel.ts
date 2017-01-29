/// <reference path="../interfaces/explore.d.ts" />

class ExploreContentModel implements IExploreHeader {

	constructor(public ModelName: string, public ExploreText:string) {
	}
}

class ExploreTilesModel implements IExploreTiles {

	constructor(public Tiles: Array<IExploreTile>) {
	}
}

class ExploreProperties implements IExploreProperties {

	constructor(public ExploreHeaderProp: IExploreHeader) {

	}
}