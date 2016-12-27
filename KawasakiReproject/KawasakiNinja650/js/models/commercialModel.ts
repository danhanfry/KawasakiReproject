/// <reference path="../interfaces/commercial.d.ts" />

class CommercialVideoModel implements ICommercialVideo {

	VideoUrl: string = "";
	FallbackMobileUrl: string = "";
	FallbackTabletUrl: string = "";
	CloseImg: string = "";

	constructor(videoUrl:string, fallbackMobileUrl:string, fallbackTabletUrl:string, closeImg:string) {

		this.VideoUrl = videoUrl;
		this.FallbackMobileUrl = fallbackMobileUrl;
		this.FallbackTabletUrl = fallbackTabletUrl;
		this.CloseImg = closeImg;
	}
}

class CommercialContentModel implements ICommercialContent {
	YearLogoImgUrl: string;
	YearModelImgUrl: string;
	GreenHorizontalLineImgUrl: string;
	Description: string;
	PlayButtonImgSvg: SVGSVGElement;
	PlayButtonGlossImgUrl: string;

	constructor(yearLogoImgUrl: string, yearModelImgUrl: string, greenHrImgUrl: string, description: string,
		playBtnGlossImgUrl: string, playBtnImgSvg: SVGSVGElement) {

		this.YearLogoImgUrl = yearLogoImgUrl;
		this.YearModelImgUrl = yearModelImgUrl;
		this.GreenHorizontalLineImgUrl = greenHrImgUrl;
		this.Description = description;
		this.PlayButtonGlossImgUrl = playBtnGlossImgUrl;
		this.PlayButtonImgSvg = playBtnImgSvg;

	}
}

class CommercialProperties implements ICommercialProperties {

	constructor(public CommercialVideoProp: ICommercialVideo, public CommercialContentProp: ICommercialContent) {

	}
}