interface IEmptyProperties {
}

interface ICommercialVideo {
	VideoUrl: string;
	FallbackMobileUrl: string;
	FallbackTabletUrl: string;
	CloseImg: string;
}

interface ICommercialVideoModel {
	Model: ICommercialVideo;
}

interface ICommercialContent {
	YearLogoImgUrl: string;
	YearModelImgUrl: string;
	GreenHorizontalLineImgUrl: string;
	Description: string;
	PlayButtonImgSvg: SVGSVGElement;
	PlayButtonGlossImgUrl: string;
}

interface ICommercialContentModel {
	Model: ICommercialContent;
}

interface ICommercialProperties {
	CommercialVideoProp: ICommercialVideo;
	CommercialContentProp: ICommercialContent;
}

interface ICommercialModel {
	CommercialProperties: ICommercialProperties;
}