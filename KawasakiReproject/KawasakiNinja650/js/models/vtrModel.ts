/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../interfaces/vtr.d.ts" />

class VTRVideoModel implements IVTRVideo {

	VideoUrl: string = "";
	FallbackMobileUrl: string = "";
	FallbackTabletUrl: string = "";
	FallbackLessThanIE11Url: string = "";
	FallbackLessThanIE11Description: string = "";

	constructor(videoUrl: string, fallbackMobileUrl: string, fallbackTabletUrl: string,
		fallbackIEUrl: string, fallbackIEDescription:string) {

		this.VideoUrl = videoUrl;
		this.FallbackMobileUrl = fallbackMobileUrl;
		this.FallbackTabletUrl = fallbackTabletUrl;
		this.FallbackLessThanIE11Url = fallbackIEUrl;
		this.FallbackLessThanIE11Description = fallbackIEDescription;
	}
}

class VTRContentViewModel implements IVTRContent {

	GreenExperienceText: string = "";
	MainTextDisplay: string = "";
	Description: string = "";
	VirtualRideLeft: SVGSVGElement;
	VirtualRideRight: SVGSVGElement;

	constructor(greenExperienceTxt: string, mainTxtDisplay: string, description: string,
		leftVRSvg: SVGSVGElement, rightVRSvg: SVGSVGElement) {

		this.GreenExperienceText = greenExperienceTxt;
		this.MainTextDisplay = mainTxtDisplay;
		this.Description = description;
		this.VirtualRideLeft = leftVRSvg;
		this.VirtualRideRight = rightVRSvg;
	}

}

class VTRProperties implements IVTRProperties {

	constructor(public VTRVideoProp: IVTRVideo, public VTRContentProp: IVTRContent) {

	}
}