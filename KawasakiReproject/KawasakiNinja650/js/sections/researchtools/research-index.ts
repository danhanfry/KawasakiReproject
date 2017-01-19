/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/research-desktop.ts" />
/// <reference path="devicetypes/research-mobile.ts" />
/// <reference path="devicetypes/research-tablet.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class ResearchTools {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			let deviceLayout: ExperienceSlide;
			if (this.Common.isMobile()) {
				deviceLayout = new ResearchMobile(this.windowDimensions.width, this.windowDimensions.height);
			}
			else if (this.Common.isTablet()) {
				deviceLayout = new ResearchTablet(this.windowDimensions.width, this.windowDimensions.height);
			}
			else {
				deviceLayout = new ResearchDesktop(this.windowDimensions.width, this.windowDimensions.height);
			}

			deviceLayout.calculation();
			deviceLayout.eventInitialize();
			deviceLayout.setScrollMagicMechanism();
		}

	}
}