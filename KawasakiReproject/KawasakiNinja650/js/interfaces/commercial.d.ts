interface ICommercialVideo {
	readonly VideoUrl: string;
	readonly FallbackMobileUrl: string;
	readonly FallbackTabletUrl: string;
	readonly CloseImg: string;
}

interface ICommercialVideoModel {
	readonly Model: ICommercialVideo;
}

interface ICommercialContent {
	readonly YearLogoImgUrl: string;
	readonly YearModelImgUrl: string;
	readonly GreenHorizontalLineImgUrl: string;
	readonly Description: string;
	readonly PlayButtonImgSvg: SVGSVGElement;
	readonly PlayButtonGlossImgUrl: string;
}

interface ICommercialContentModel {
	readonly Model: ICommercialContent;
}

interface ICommercialProperties {
	readonly CommercialVideoProp: ICommercialVideo;
	readonly CommercialContentProp: ICommercialContent;
}

interface ICommercialModel {
	readonly CommercialProperties: ICommercialProperties;
}