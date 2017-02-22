var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VTRTablet = (function (_super) {
    __extends(VTRTablet, _super);
    function VTRTablet(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.NinjaCommon = new Kawasaki.NinjaCommon();
        _this.calculation = function () {
            $('#virtual').height(_this.windowHeight).width(_this.windowWidth);
            var scaledStaticImage = _this.NinjaCommon.scaleProportionally(2048, 1070, _this.windowWidth, 150, false);
            $('#mobileTabletVRStaticImgId').height(scaledStaticImage.height + 15);
            TweenMax.set('#testVRContainerId', {
                top: ($('#virtual').height() / 5.5) - 80
            });
            $('#leftTextForVRVideoHoverId').css({
                'left': ($(window).width() / 2) - $('#leftTextForVRVideoHoverId').width() - 60
            });
            $('#rightTextForVRVideoHoverId').css({
                'left': ($(window).width() / 2) + 75
            });
            TweenMax.set("#slideTwoScroller", {
                bottom: "110px",
                left: (_this.windowWidth / 2) - ($('#slideTwoScroller img').width() / 2)
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
            $('#leftTestVRVideoSVGId, #leftTextForVRVideoHoverId').on('tap longtap', function () {
                window.location.href = 'vtr/index.html?videoId=0';
            });
            $('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('tap longtap', function () {
                window.location.href = 'vtr/index.html?videoId=1';
            });
            $("#slideTwoScroller").on('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top - 65 } });
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
        };
        return _this;
    }
    return VTRTablet;
}(ExperienceSlide));
