/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../../../scripts/core/commonjs.ts" />
/// <reference path="../../ninjacommonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/commercial-desktop.ts" />
/// <reference path="devicetypes/commercial-tablet.ts" />
/// <reference path="devicetypes/commercial-mobile.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class Commercial {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();
		private windowDimensions: IDimensionPosition;
		private deviceLayout: ExperienceSlide;

		constructor() {
			this.windowDimensions = this.NinjaCommon.elementDimensions(window);
		}

		public calculation = (): void => {

			if (this.Common.isMobile()) {
				this.deviceLayout = new CommercialMobile(this.windowDimensions.width, this.windowDimensions.height);
			}
			else if (this.Common.isTablet()) {
				this.deviceLayout = new CommercialTablet(this.windowDimensions.width, this.windowDimensions.height);
			}
			else {
				this.deviceLayout = new CommercialDesktop(this.windowDimensions.width, this.windowDimensions.height);
			}

			this.deviceLayout.calculation();
			this.deviceLayout.eventInitialize();
		}

		public recalculation = (): void => {
			this.deviceLayout.calculation();
		}
	}
}