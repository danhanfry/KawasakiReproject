interface IVTRVideo {
	VideoUrl: string;
	FallbackMobileUrl: string;
	FallbackTabletUrl: string;
	FallbackLessThanIE11Url: string;
	FallbackLessThanIE11Description: string;
}

interface IVTRVideoModel {
	Model: IVTRVideo;
}

interface IVTRContent {
	YearLogoImgUrl: string;
	YearModelImgUrl: string;
	GreenHorizontalLineImgUrl: string;
	Description: string;
	PlayButtonImgSvg: SVGSVGElement;
	PlayButtonGlossImgUrl: string;
}

interface IVTRContentModel {
	Model: IVTRContent;
}