var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommercialDesktop = (function (_super) {
    __extends(CommercialDesktop, _super);
    function CommercialDesktop(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.desktopCommercialSplitVideoUrl = "https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4";
        _this.desktopCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_1080.mp4";
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            var ninjaLogoYear = $('#commericalNinjaNameYearId');
            var ninjaLogoName = $('#commericalNinjaNameId');
            var ninjaDescriptionElement = $('#commericalNinjaLifeDescriptionId');
            var ninjaGreenLine = $('#commericalNinjaLifeGreenHrId');
            var videoPlay = document.getElementById('videoPlayer');
            videoPlay.controls = false;
            videoPlay.play();
            videoPlay.style.display = 'block';
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
            var topOfHeightToUse = thirdOfWindowHeight;
            if (_this.windowHeight < 750) {
                topOfHeightToUse = fourthOfWindowHeight;
            }
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
            if (_this.windowWidth < 1280) {
                leftGreenHr = leftGreenHr - (ninjaGreenLine.width() / 2);
            }
            TweenMax.set("#commericalNinjaLifeGreenHrId", {
                top: ninjaLogoName.position().top + ninjaLogoName.height(),
                left: leftGreenHr
            });
            var leftDescription = halfOfWindowWidth - 10;
            if (_this.windowWidth < 1280) {
                leftDescription = leftDescription - (ninjaDescriptionElement.width() / 2);
            }
            TweenMax.set("#commericalNinjaLifeDescriptionId", {
                top: ninjaGreenLine.position().top + ninjaGreenLine.outerHeight(),
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
            TweenMax.set("#slideOneScroller", {
                top: floatingBottom,
                left: (_this.windowWidth / 2) - ($('#slideOneScroller').width() / 2)
            });
            _this.setTweenMechanism();
        };
        _this.setTweenMechanism = function () {
            TweenMax.set(".fixed-nav-bar", { y: -100 });
            TweenMax.set("#commericalNinjaNameYearId", { x: 20 });
            TweenMax.set("#commericalNinjaNameId", { x: 0 });
            TweenMax.set("#commericalNinjaLifeGreenHrId", { x: -50 });
            TweenMax.set("#commericalNinjaLifeDescriptionId", { x: -50 });
            TweenMax.set("#commercialGreenScrollImg", { y: 0 });
            TweenMax.set("#commericalNinjaLifePlayArrow", { x: -25 });
            TweenMax.set("#PlayButtonAction", { x: -50, opacity: 0 });
            TweenMax.set("#PlayButtonGloss", { x: -70, opacity: 0, scaleX: 0.1 });
            TweenMax.set("#slideOneScroller.scroll-indicator", { y: -50, opacity: 0 });
            TweenMax.set("#slideOneArrow", { y: 0 });
            TweenMax.set("#slideOneGloss", { y: 50 });
            new TimelineMax()
                .to('#commericalNinjaNameYearId', .4, { x: 0, ease: Linear.easeOut, autoAlpha: 1 })
                .to('#commericalNinjaNameId', 1, { x: 0, ease: Linear.easeOut, autoAlpha: 1, delay: -.4 })
                .to("#commericalNinjaLifeGreenHrId", .35, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 })
                .to("#commericalNinjaLifeDescriptionId", .35, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.25 })
                .to("#slideOneScroller.scroll-indicator", .5, { y: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 })
                .to("#commericalNinjaLifePlayArrow", .5, {
                x: 0, ease: Linear.easeInOut, autoAlpha: 1, onComplete: function () {
                    new TimelineMax().to(".play-button-gloss", .3, { x: 120, ease: Linear.easeIn, scaleX: 1, autoAlpha: 1, repeat: 0 });
                    new TimelineMax().to(".play-button-action", .3, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 });
                }
            });
            new TimelineMax().to("#slideOneArrow", .5, { y: 50, ease: Linear.easeInOut, repeat: 3, onComplete: _this.setArrow });
            new TimelineMax().to("#slideOneGloss", .5, { y: -100, ease: Linear.easeOut, autoAlpha: .7, repeat: 3 })
                .to("#slideOneGloss", 1, { y: -100, ease: Linear.easeInOut, repeat: 0 });
            setTimeout(_this.repeatScrollIndicatorAnimation, 6000);
            setTimeout(_this.repeatPlayButtonGlossAnimation, 5000);
        };
        _this.eventInitialize = function () {
            var playButtonElement = document.getElementById('playArrowMask');
            var playButtonArrowElement = document.getElementById('PlayButtonAction');
            document.getElementById('commericalNinjaLifePlayArrow').addEventListener('click', function () {
                if (document.documentElement.scrollTop > 0) {
                    window.scrollTo(0, 0);
                }
                TweenMax.set("#commericalNinjaNameYearId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaNameId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 0, display: "none" });
                TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 0, display: "none" });
                TweenMax.to("#firstSlideCloseContainerId", 1, { opacity: 1, display: "block" });
                TweenMax.to("#slideOneScroller", 1, { opacity: 0, display: "none" });
                TweenMax.set(".fixed-nav-bar", { opacity: 0, display: "none" });
                var video = document.getElementById('videoPlayer');
                video.src = _this.desktopCommercialVideoUrl;
                video.removeAttribute("loop");
                video.setAttribute("controls", "controls");
                var newScaledVideo = _this.Common.scaleProportionally(1920, 1080, _this.windowWidth, _this.windowHeight, false);
                var finalNewScaledVideo = newScaledVideo.height;
                if (_this.Common.isFirefoxBrowser()) {
                    finalNewScaledVideo -= 30;
                }
                _this.commercialResize(video, _this.windowWidth, _this.windowHeight);
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
                video.src = _this.desktopCommercialSplitVideoUrl;
                video.removeAttribute("controls");
                video.setAttribute('loop', 'true');
                video.play();
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
            document.getElementById('slideOneScroller').addEventListener('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#virtual').offset().top - 65 } });
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
        _this.repeatPlayButtonGlossAnimation = function () {
            TweenMax.set(".play-button-gloss", { x: -120, opacity: .6, scaleX: .3 });
            new TimelineMax().to(".play-button-gloss", .5, { x: 120, ease: Linear.easeInOut, scaleX: .3, autoAlpha: .6, repeat: 0 });
            setTimeout(_this.repeatPlayButtonGlossAnimation, 4000);
        };
        _this.repeatScrollIndicatorAnimation = function () {
            TweenMax.set("#slideOneArrow", { y: 0 });
            TweenMax.set("#slideOneGloss", { y: 50 });
            TweenMax.to("#slideOneArrow", 1, { y: 50, ease: Linear.easeInOut, repeat: 0, onComplete: _this.setArrow });
            TweenMax.to("#slideOneGloss", 1, { y: -100, ease: Linear.easeOut, autoAlpha: 1, repeat: 0 });
            setTimeout(_this.repeatScrollIndicatorAnimation, 4500);
        };
        _this.setArrow = function () {
            TweenMax.set("#slideOneArrow", { y: -50 });
            new TimelineMax().to("#slideOneArrow", .4, { y: 23, ease: Linear.easeIn, repeat: 0, delay: -.5 });
        };
        return _this;
    }
    return CommercialDesktop;
}(ExperienceSlide));
