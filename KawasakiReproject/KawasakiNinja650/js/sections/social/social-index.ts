/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/social-desktop.ts" />
/// <reference path="devicetypes/social-mobile.ts" />
/// <reference path="devicetypes/social-tablet.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class SocialCommunity {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			let deviceLayout: ExperienceSlide;
			if (this.Common.isMobile()) {
				deviceLayout = new SocialMobile(this.windowDimensions.width, this.windowDimensions.height);
			}
			else if (this.Common.isTablet()) {
				deviceLayout = new SocialTablet(this.windowDimensions.width, this.windowDimensions.height);
			}
			else {
				deviceLayout = new SocialDesktop(this.windowDimensions.width, this.windowDimensions.height);
			}

			deviceLayout.calculation();
			deviceLayout.eventInitialize();
			deviceLayout.setScrollMagicMechanism();
		}

	}
}