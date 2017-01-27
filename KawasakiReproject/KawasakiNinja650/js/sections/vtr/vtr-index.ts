/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/vtr-desktop.ts" />
/// <reference path="devicetypes/vtr-mobile.ts" />
/// <reference path="devicetypes/vtr-tablet.ts" />


namespace Kawasaki.NinjaSixFifty {
	export class VTR {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;
		private deviceLayout: ExperienceSlide;

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			if (this.Common.isMobile()) {
				this.deviceLayout = new VTRMobile(this.windowDimensions.width, this.windowDimensions.height);
			}
			else if (this.Common.isTablet()) {
				this.deviceLayout = new VTRTablet(this.windowDimensions.width, this.windowDimensions.height);
			}
			else {
				this.deviceLayout = new VTRDesktop(this.windowDimensions.width, this.windowDimensions.height);
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