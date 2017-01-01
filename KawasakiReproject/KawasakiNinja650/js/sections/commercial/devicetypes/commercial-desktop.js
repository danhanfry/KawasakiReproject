var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommercialDesktop = (function (_super) {
    __extends(CommercialDesktop, _super);
    function CommercialDesktop() {
        var _this = this;
        _super.call(this);
        this.desktopCommercialSplitVideoUrl = "https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4";
        this.desktopCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_1080.mp4";
        this.Common = new Kawasaki.Common();
        this.calculation = function (windowWidth, windowHeight) {
            var videoPlay = document.getElementById('videoPlayer');
            videoPlay.controls = false;
            videoPlay.play();
            videoPlay.style.display = 'block';
            var thirdOfWindowHeight = windowHeight / 3;
            var fourthOfWindowHeight = windowHeight / 4;
            var thirdOfWindowWidth = windowWidth / 3;
            var halfOfWindowWidth = windowWidth / 2;
            var ninjaLogoYear = $('#commericalNinjaNameYearId');
            var ninjaLogoName = $('#commericalNinjaNameId');
            var ninjaDescriptionElement = $('#commericalNinjaLifeDescriptionId');
            var commercialNinjaNameHeight = ninjaLogoName.height();
            var commercialNinjaHrOuterHeight = $('#commericalNinjaLifeGreenHrId').outerHeight();
            var commercialNinjaNameWidth = ninjaLogoName.width();
            TweenMax.set("#firstSlideCloseContainerId", {
                left: (windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
            });
            $('#commercial').height(windowHeight).width(windowWidth);
            var scaledVideo = _this.Common.scaleProportionally(1388, 780, windowWidth, windowHeight, false);
            $('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);
            var topOfHeightToUse = thirdOfWindowHeight;
            if (windowHeight < 750) {
                topOfHeightToUse = fourthOfWindowHeight;
            }
            TweenMax.set("#commericalNinjaNameYearId", {
                top: topOfHeightToUse, left: (windowWidth / 2) - (ninjaLogoYear.width() / 2)
            });
            if (_this.Common.isSafari() && !_this.Common.isMobile()) {
                TweenMax.set("#commericalNinjaNameYearId img", {
                    width: '135%'
                });
            }
            TweenMax.set("#commericalNinjaNameId", {
                top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
                left: (windowWidth / 2) - (ninjaLogoName.width() / 2)
            });
            var leftGreenHr = halfOfWindowWidth - 10;
            if (windowWidth < 1280) {
                leftGreenHr = leftGreenHr - ($('#commericalNinjaLifeGreenHrId').width() / 2);
            }
            TweenMax.set("#commericalNinjaLifeGreenHrId", {
                top: ninjaLogoName.position().top + ninjaLogoName.height(),
                left: leftGreenHr
            });
            var leftDescription = halfOfWindowWidth - 10;
            if (windowWidth < 1280) {
                leftDescription = leftDescription - (ninjaDescriptionElement.width() / 2);
            }
            TweenMax.set("#commericalNinjaLifeDescriptionId", {
                top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
                left: leftDescription
            });
            TweenMax.set("#commericalNinjaLifePlayArrow", {
                top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
                left: (ninjaDescriptionElement.position().left + ninjaDescriptionElement.width() + 50)
            });
            var floatingBottom = $('#commercial').height() / 10 * 9;
            var bottom = ninjaDescriptionElement.offset().top + ninjaDescriptionElement.outerHeight() + 100;
            if (floatingBottom < bottom) {
                floatingBottom = bottom;
            }
            TweenMax.set("#slideOneScroller", {
                top: floatingBottom,
                left: (windowWidth / 2) - ($('#slideOneScroller').width() / 2)
            });
        };
    }
    return CommercialDesktop;
}(CommercialSlide));
