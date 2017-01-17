interface IVTRVideo {
	readonly VideoUrl: string;
	readonly FallbackMobileUrl: string;
	readonly FallbackTabletUrl: string;
	readonly FallbackLessThanIE11Url: string;
	readonly FallbackLessThanIE11Description: string;
}

interface IVTRVideoModel {
	readonly Model: IVTRVideo;
}

interface IVTRContent {
	readonly GreenExperienceText: string;
	readonly MainTextDisplay: string;
	readonly Description: string;
	readonly VirtualRideLeft: SVGSVGElement;
	readonly VirtualRideRight: SVGSVGElement;
}

interface IVTRContentModel {
	readonly Model: IVTRContent;
}

interface IVTRProperties {
	readonly VTRVideoProp: IVTRVideo;
	readonly VTRContentProp: IVTRContent;
}

interface IVTRlModel {
	readonly VTRProperties: IVTRProperties;
}