var controller = new ScrollMagic.Controller();
var initOrientation = window.orientation;
var Common = new Kawasaki.Common();
var NinjaCommon = new Kawasaki.NinjaCommon();
var IsMobile = Common.isMobile();
var IsTablet = Common.isTablet();
var IsTouchDevice = IsMobile || IsTablet;
if (IsMobile || IsTablet) {
    if (IsTablet && (window.orientation === 0 || window.orientation === 180)) {
        NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
    }
    if (typeof window.orientation === 'number') {
        if (IsMobile && Math.abs(window.orientation) === 90) {
            NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
        }
    }
    window.addEventListener('orientationchange', function () {
        NinjaCommon.ninjaOrientationChange(window.orientation, IsTablet ? "tablet" : "mobile");
    });
}
