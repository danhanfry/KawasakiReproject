/// <reference path="../models/enum.d.ts" />

interface IStickerPrice {
	stringValue: string;
	numberValue: number;
}

interface IViewProperties {
	Id: number;
	Depth: number;
	MimeType: string;
	Modifier: string;
	Sort: number;
}

interface IViews {

}

interface IParts {
	Id: number;
	Availability: string;
	Code: string;
	LongDescription: string;
	LongName: string;
	Name: string;
	ShortDescription: string;
	ShortTitle: string;
	StickerPrice: IStickerPrice;
	PartType: IPartTypes;
	PartTypeValue: string | null;

}