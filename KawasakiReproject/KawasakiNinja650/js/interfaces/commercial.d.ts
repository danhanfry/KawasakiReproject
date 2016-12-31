﻿interface IKawasakiSvgElement {
	id: string;
	className: string;
	x: string;
	y: string;
	width: string;
	height: string;
}

interface IElementPosition {
	positionLeft: number;
	positionTop: number;
}

interface IDimensionPosition {
	width: number;
	height: number;
	outerWidth: number;
	outerHeight: number;
	outerWidthWithMargin: number;
	outerHeightWithMargin: number;
	positionLeft: number;
	positionTop: number;
}

interface IScaleProportional {
	width: number;
	height: number;
	scaleToTargetWidth: boolean;
	targetleft: number;
	targettop: number;
}

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