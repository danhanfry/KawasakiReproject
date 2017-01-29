interface ICapturedTile {
	width: string;
	height: string;
	top: string;
	left: string;
}

interface ICapturedTilesDimension {

	elm: string;
	x: number;
	y: number;
	imgX: number;
	imgY: number;
	imgScale: number;
}

interface ICapturedTabletTilesDimension {

	elm: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

interface IExploreHeader {
	readonly ModelName: string;
	readonly ExploreText: string;
}

interface IExploreHeaderModel {
	readonly Model: IExploreHeader;
}

interface IExploreTile {
	readonly TileId: string;
	readonly TileName: string;
	readonly TileImgPath: string;
	readonly TileSize: string;
}

interface IExploreTiles {
	readonly Tiles: IExploreTile[];
}

interface IExploreTileState {
	readonly TilesState: IExploreTile[];
}

interface IExploreProperties {
	readonly ExploreHeaderProp: IExploreHeader;
}

interface IExploreModel {
	readonly ExploreProperties: IExploreProperties;
}