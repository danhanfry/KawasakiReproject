/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../../../scripts/core/commonjs.ts" />
/// <reference path="../../ninjacommonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/social-desktop.ts" />
/// <reference path="devicetypes/social-mobile.ts" />
/// <reference path="devicetypes/social-tablet.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class SocialCommunity {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();
		private windowDimensions: IDimensionPosition;
		private socialSpredfasterUrl: string = "";
		private deviceLayout: ExperienceSlide;

		constructor() {
			this.windowDimensions = this.NinjaCommon.elementDimensions(window);
			this.socialSpredfasterUrl = location.protocol + "//app.feedspear.com/Campaign/16/Feed";
		}

		public calculation = (): void => {

			if (this.Common.isMobile()) {
				this.deviceLayout = new SocialMobile(this.windowDimensions.width, this.windowDimensions.height, this.socialSpredfasterUrl);
			}
			else if (this.Common.isTablet()) {
				this.deviceLayout = new SocialTablet(this.windowDimensions.width, this.windowDimensions.height, this.socialSpredfasterUrl);
			}
			else {
				this.deviceLayout = new SocialDesktop(this.windowDimensions.width, this.windowDimensions.height, this.socialSpredfasterUrl);
			}

			this.deviceLayout.calculation();
			this.deviceLayout.eventInitialize();
			this.deviceLayout.setScrollMagicMechanism();
		}

		public recalculation = (): void => {
			this.deviceLayout.calculation();
		}

	}
}