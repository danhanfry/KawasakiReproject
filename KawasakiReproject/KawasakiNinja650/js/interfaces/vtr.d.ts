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
	GreenExperienceText: string;
	MainTextDisplay: string;
	Description: string;
	VirtualRideLeft: SVGSVGElement;
	VirtualRideRight: SVGSVGElement;
}

interface IVTRContentModel {
	Model: IVTRContent;
}

interface IVTRProperties {
	VTRVideoProp: IVTRVideo;
	VTRContentProp: IVTRContent;
}

interface IVTRlModel {
	VTRProperties: IVTRProperties;
}