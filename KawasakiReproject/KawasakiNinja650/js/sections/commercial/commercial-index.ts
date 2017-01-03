/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/commercial-desktop.ts" />
/// <reference path="devicetypes/commercial-tablet.ts" />
/// <reference path="devicetypes/commercial-mobile.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class Commercial {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;

		private desktopCommercialSplitVideoUrl = "https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4";
		private desktopCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_1080.mp4";
		private tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			let deviceLayout: ExperienceSlide;
			if (this.Common.isMobile()) {
				deviceLayout = new CommercialMobile(this.windowDimensions.width, this.windowDimensions.height);
			}
			else if (this.Common.isTablet()) {
				deviceLayout = new CommercialTablet(this.windowDimensions.width, this.windowDimensions.height);
			}
			else {
				deviceLayout = new CommercialDesktop(this.windowDimensions.width, this.windowDimensions.height);
			}

			deviceLayout.calculation();
			deviceLayout.eventInitialize();
		}
	}
}