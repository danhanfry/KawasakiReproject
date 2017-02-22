/// <reference path="../../scripts/core/commonjs.ts" />
/// <reference path="ninjacommonjs.ts" />
/// <reference path="../../scripts/typings/scrollmagic.d.ts" />

var controller = new ScrollMagic.Controller();
var initOrientation: string | number = window.orientation;

const Common: Kawasaki.Common = new Kawasaki.Common();
const NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();
const IsMobile: boolean = Common.isMobile();
const IsTablet: boolean = Common.isTablet();
const IsTouchDevice: boolean = IsMobile || IsTablet;


if (IsMobile || IsTablet) {

	if (IsTablet && (window.orientation === 0 || window.orientation === 180)) {
		NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
	}

	if (typeof window.orientation === 'number') {
		if (IsMobile && Math.abs(window.orientation) === 90) {
			NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
		}
	}

	window.addEventListener('orientationchange', () => {
		NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
	});

}