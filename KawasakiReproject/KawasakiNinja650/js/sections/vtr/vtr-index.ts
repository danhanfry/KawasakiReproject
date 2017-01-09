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

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			let deviceLayout: ExperienceSlide;
			if (this.Common.isMobile()) {
				
			}
			else if (this.Common.isTablet()) {
				
			}
			else {
				
			}

			deviceLayout.calculation();
			deviceLayout.eventInitialize();
		}
	}
}