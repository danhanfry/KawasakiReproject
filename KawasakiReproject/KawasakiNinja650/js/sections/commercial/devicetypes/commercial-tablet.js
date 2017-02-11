var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommercialTablet = (function (_super) {
    __extends(CommercialTablet, _super);
    function CommercialTablet(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            var ninjaLogoYear = $('#commericalNinjaNameYearId');
            var ninjaLogoName = $('#commericalNinjaNameId');
            var ninjaDescriptionElement = $('#commericalNinjaLifeDescriptionId');
            var ninjaGreenLine = $('#commericalNinjaLifeGreenHrId');
            var ninjaPlayArrow = $('#commericalNinjaLifePlayArrow');
            var ninjaPlayButtonSvg = $('#PlayButtonAction');
            var mobileTabletStaticImgContainer = document.getElementById('mobileTabletStaticImgId');
            var videoPlay = document.getElementById('videoPlayer');
            videoPlay.controls = false;
            videoPlay.pause();
            videoPlay.style.display = 'none';
            mobileTabletStaticImgContainer.style.display = 'block';
            var mobileContainerImage = mobileTabletStaticImgContainer.querySelectorAll('img');
            if (mobileContainerImage.length > 0) {
                mobileContainerImage[0].src = 'assets/slide1/tablet-landing-bkgd.jpg';
            }
            var scaledStaticImage = _this.Common.scaleProportionally(1920, 1080, _this.windowWidth, 150, false);
            $(mobileTabletStaticImgContainer).width(scaledStaticImage.width).height(scaledStaticImage.height + 60);
            document.getElementById('PlayButtonGloss').style.display = 'none';
            document.getElementById('slideOneGloss').style.display = 'none';
            var thirdOfWindowHeight = _this.windowHeight / 3;
            var fourthOfWindowHeight = _this.windowHeight / 4;
            var thirdOfWindowWidth = _this.windowWidth / 3;
            var halfOfWindowWidth = _this.windowWidth / 2;
            TweenMax.set("#firstSlideCloseContainerId", {
                left: (_this.windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
            });
            $('#commercial').height(_this.windowHeight).width(_this.windowWidth);
            var scaledVideo = _this.Common.scaleProportionally(1388, 780, _this.windowWidth, _this.windowHeight, false);
            $('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);
            var topOfHeightToUse = fourthOfWindowHeight;
            TweenMax.set("#commericalNinjaNameYearId", {
                top: topOfHeightToUse, left: (_this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
            });
            if (_this.Common.isSafari() && !_this.Common.isMobile()) {
                TweenMax.set("#commericalNinjaNameYearId img", {
                    width: '135%'
                });
            }
            TweenMax.set("#commericalNinjaNameId", {
                top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
                left: (_this.windowWidth / 2) - (ninjaLogoName.width() / 2)
            });
            var leftGreenHr = halfOfWindowWidth - 10;
            leftGreenHr = leftGreenHr - (ninjaGreenLine.width() / 2);
            TweenMax.set("#commericalNinjaLifeGreenHrId", {
                top: ninjaLogoName.position().top + ninjaLogoName.height(),
                left: leftGreenHr
            });
            var leftDescription = halfOfWindowWidth - 10;
            leftDescription = leftDescription - (ninjaDescriptionElement.width() / 2);
            TweenMax.set("#commericalNinjaLifeDescriptionId", {
                top: ninjaGreenLine.position().top + ninjaGreenLine.outerHeight() - 10,
                left: leftDescription
            });
            TweenMax.set("#commericalNinjaLifePlayArrow", {
                top: ninjaGreenLine.position().top + ninjaGreenLine.outerHeight(),
                left: (ninjaDescriptionElement.position().left + ninjaDescriptionElement.width() + 50)
            });
            var floatingBottom = $('#commercial').height() / 10 * 9;
            var bottom = ninjaDescriptionElement.offset().top + ninjaDescriptionElement.outerHeight() + 100;
            if (floatingBottom < bottom) {
                floatingBottom = bottom;
            }
            TweenMax.set("#PlayButtonAction", {
                top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) - 10,
                left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2) - 15
            });
            TweenMax.set("#slideOneArrow", {
                top: ($('#scrollIndicatorMask').height() / 2) - ($('#slideOneArrow').height() / 2)
            });
            TweenMax.set("#slideOneScroller", {
                top: floatingBottom,
                left: (_this.windowWidth / 2) - ($('#slideOneScroller').width() / 2)
            });
            _this.setTweenMechanism();
        };
        _this.setTweenMechanism = function () {
            TweenMax.set("#commericalNinjaNameYearId", { opacity: 1 });
            TweenMax.set("#commericalNinjaNameId", { opacity: 1 });
            TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 1 });
            TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 1 });
            TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 1 });
            TweenMax.set("#slideOneScroller.scroll-indicator", { opacity: 1 });
            TweenMax.set(".fixed-nav-bar", { opacity: 1 });
        };
        _this.eventInitialize = function () {
            var playButtonElement = document.getElementById('playArrowMask');
            var playButtonArrowElement = document.getElementById('PlayButtonAction');
            document.getElementById('commericalNinjaLifePlayArrow').addEventListener('click', function () {
                TweenMax.set("#commericalNinjaNameYearId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaNameId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 0, display: "none" });
                TweenMax.to("#firstSlideCloseContainerId", 1, { opacity: 1, display: "block" });
                TweenMax.to("#slideOneScroller", 1, { opacity: 0, display: "none" });
                TweenMax.set(".fixed-nav-bar", { opacity: 0, display: "none" });
                var video = document.getElementById('videoPlayer');
                video.style.display = 'block';
                document.getElementById('mobileTabletStaticImgId').style.display = 'none';
                video.src = _this.tabletMobileCommercialVideoUrl;
                video.removeAttribute("loop");
                video.setAttribute("controls", "controls");
                _this.Common.preventScrolling();
                video.play();
            });
            document.getElementById('firstSlideCloseContainerId').addEventListener('click', function () {
                TweenMax.set("#commericalNinjaNameYearId", { opacity: 1, display: "block" });
                TweenMax.set("#commericalNinjaNameId", { opacity: 1, display: "block" });
                TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 1, display: "block" });
                TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 1, display: "block" });
                TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 1, display: "block" });
                TweenMax.to("#firstSlideCloseContainerId", 1, { opacity: 0, display: "none" });
                TweenMax.to("#slideOneScroller", 1, { opacity: 1, display: "block" });
                TweenMax.to(".fixed-nav-bar", 1, { opacity: 1, display: "block" });
                TweenMax.to("#commercialGreenPageTransition", 1, { opacity: 1, display: "block" });
                var video = document.getElementById('videoPlayer');
                video.pause();
                video.style.display = 'none';
                document.getElementById('mobileTabletStaticImgId').style.display = 'block';
                video.removeAttribute("controls");
                video.setAttribute('loop', 'true');
                _this.Common.allowScrolling();
                _this.resize();
            });
            playButtonElement.addEventListener('mouseenter', function () {
                playButtonElement.style.borderColor = _this.Common.kawasakiGreen;
                document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
                var polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
                if (polygonInPlayBtn.length > 0) {
                    var polygonInSvg = polygonInPlayBtn[0];
                    polygonInSvg.style.fill = _this.Common.kawasakiGreen;
                    polygonInSvg.style.stroke = _this.Common.kawasakiGreen;
                }
            });
            playButtonElement.addEventListener('mouseleave', function () {
                playButtonElement.style.borderColor = _this.Common.kawasakiWhite;
                document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
                var polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
                if (polygonInPlayBtn.length > 0) {
                    var polygonInSvg = polygonInPlayBtn[0];
                    polygonInSvg.style.fill = _this.Common.kawasakiWhite;
                    polygonInSvg.style.stroke = _this.Common.kawasakiWhite;
                }
            });
        };
        _this.resize = function () {
            _this.calculation();
            var videoElement = document.getElementById('videoPlayer');
            var isCommercialPlaying = (videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2);
            if (isCommercialPlaying) {
                _this.commercialResize(videoElement, $(window).width(), $(window).height());
            }
        };
        _this.setScrollMagicMechanism = function () {
        };
        _this.commercialResize = function (video, windowWidth, windowHeight) {
            var newScaledVideo = _this.Common.scaleProportionally(1920, 1080, windowWidth, windowHeight, false);
            var finalNewScaledVideo = newScaledVideo.height;
            if (_this.Common.isFirefoxBrowser()) {
                finalNewScaledVideo -= 30;
            }
            if (windowWidth <= 1360) {
                $(video).width(windowWidth - 70);
            }
            else {
                $(video).width(newScaledVideo.width - 70);
            }
            if (windowHeight <= 770) {
                $(video).height(windowHeight);
            }
            else {
                $(video).height(finalNewScaledVideo);
            }
        };
        return _this;
    }
    return CommercialTablet;
}(ExperienceSlide));
