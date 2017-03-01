var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VTRMobile = (function (_super) {
    __extends(VTRMobile, _super);
    function VTRMobile(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            $('#mobileTabletVRStaticImgId img').prop('src', 'assets/slide2/mobile-vtr-failover.jpg');
            $('#virtual').height(_this.windowHeight).width(_this.windowWidth);
            var scaledStaticImage = _this.Common.scaleProportionally(1125, 2001, _this.windowWidth, _this.windowHeight, false);
            $('#mobileTabletVRStaticImgId').width(scaledStaticImage.width);
            if (_this.windowHeight <= 570) {
                $('#mobileTabletVRStaticImgId').height(scaledStaticImage.height / 2 + 20);
            }
            if (_this.windowHeight > 570 && _this.windowHeight <= 680) {
                $('#mobileTabletVRStaticImgId').height(scaledStaticImage.width - 5);
            }
            if (_this.windowHeight > 680) {
                $('#mobileTabletVRStaticImgId').height(scaledStaticImage.width);
            }
            TweenMax.set('#testVRContainerId', {
                top: ($('#virtual').height() / 5.5) - 80
            });
            TweenMax.set("#testVRDescription", {
                width: $(window).width() - 40
            });
            $('#leftTextForVRVideoHoverId').css({});
            $('#rightTextForVRVideoHoverId').css({
                'left': ($(window).width() / 2) + 2
            });
            if (_this.Common.isAndroid()) {
                $('#vrTestRideSelection').css({ "top": "400px" });
                $('.text-vr-hover-txt').css({ "width": "170px" });
            }
            TweenMax.set("#slideTwoScroller", {
                bottom: 0,
                left: (_this.windowWidth / 2) - ($('#slideTwoScroller img').width() / 2) - 40
            });
        };
        _this.setTweenMechanism = function () {
        };
        _this.eventInitialize = function () {
            $('#leftTextForVRVideoHoverId').on({
                mouseover: function () {
                    TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#66cc33' });
                    TweenMax.to("#interactiveBoxId", 0.5, { fill: '#66cc33' });
                    TweenMax.to("#interactivePlayId", 0.5, { stroke: '#66cc33' });
                    TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });
                },
                mouseleave: function () {
                    TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });
                    TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });
                }
            });
            $('#rightTextForVRVideoHoverId').on({
                mouseover: function () {
                    TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });
                    TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#66cc33' });
                    TweenMax.to("#freeBoxId", 0.5, { fill: '#66cc33' });
                    TweenMax.to("#freePlayId", 0.5, { stroke: '#66cc33' });
                },
                mouseleave: function () {
                    TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });
                    TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
                    TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
                    TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });
                }
            });
            $('#leftTestVRVideoSVGId, #leftTextForVRVideoHoverId').on('click', function () {
                window.location.href = '//kawasaki.com/ninja650experience/vtr/index.html?videoId=0';
            });
            $('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('click', function () {
                window.location.href = '//kawasaki.com/ninja650experience/vtr/index.html?videoId=1';
            });
            $("#slideTwoScroller").on('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top } });
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
        };
        return _this;
    }
    return VTRMobile;
}(ExperienceSlide));
