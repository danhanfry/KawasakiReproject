var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommercialMobile = (function (_super) {
    __extends(CommercialMobile, _super);
    function CommercialMobile(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";
        _this.Common = new Kawasaki.Common();
        _this.NinjaCommon = new Kawasaki.NinjaCommon();
        _this.calculation = function () {
            var ninjaLogoYear = $('#commericalNinjaNameYearId');
            var ninjaLogoName = $('#commericalNinjaNameId');
            var ninjaDescriptionElement = $('#commericalNinjaLifeDescriptionId');
            var ninjaPlayArrow = $('#commericalNinjaLifePlayArrow');
            var ninjaGreenLine = $('#commericalNinjaLifeGreenHrId');
            var mobileTabletStaticImgContainer = document.getElementById('mobileTabletStaticImgId');
            var ninjaPlayButtonSvg = $('#PlayButtonAction');
            var videoPlay = document.getElementById('videoPlayer');
            videoPlay.controls = false;
            videoPlay.pause();
            videoPlay.style.display = 'none';
            mobileTabletStaticImgContainer.style.display = 'block';
            var mobileContainerImage = mobileTabletStaticImgContainer.querySelectorAll('img');
            if (mobileContainerImage.length > 0) {
                mobileContainerImage[0].src = 'assets/slide1/mobile-landing-bkgd.jpg';
            }
            var thirdOfWindowHeight = _this.windowHeight / 3;
            var fourthOfWindowHeight = _this.windowHeight / 4;
            var thirdOfWindowWidth = _this.windowWidth / 3;
            var halfOfWindowWidth = _this.windowWidth / 2;
            var commercialNinjaHrOuterHeight = ninjaGreenLine.outerHeight();
            $('#slideOneGloss').hide();
            $('#PlayButtonGloss').hide();
            $('#commercial').height(_this.windowHeight).width(_this.windowWidth);
            var scaledStaticImage = _this.NinjaCommon.scaleProportionally(1125, 2001, _this.windowWidth, 150, false);
            $(mobileTabletStaticImgContainer).width(scaledStaticImage.width).height(scaledStaticImage.height);
            var topOfHeightToUse = (_this.windowHeight / 8);
            if (_this.windowHeight <= 570) {
                TweenMax.set("#commericalNinjaNameYearId", {
                    top: topOfHeightToUse, left: (_this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
                });
            }
            if (_this.windowHeight > 570 && _this.windowHeight <= 680) {
                TweenMax.set("#commericalNinjaNameYearId", {
                    top: topOfHeightToUse, left: (_this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
                });
            }
            if (_this.windowHeight > 680) {
                TweenMax.set("#commericalNinjaNameYearId", {
                    top: topOfHeightToUse + 60, left: (_this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
                });
            }
            if (_this.Common.isAndroid()) {
                $('#commericalNinjaNameYearId img').width("130%");
            }
            TweenMax.set("#commericalNinjaNameId", {
                top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
                left: 0
            });
            TweenMax.set("#commericalNinjaLifeGreenHrId", {
                top: ninjaLogoName.position().top + (ninjaLogoName.outerHeight() / 3 * 2),
                left: ((_this.windowWidth / 2) - (ninjaGreenLine.outerWidth() / 2))
            });
            TweenMax.set("#commericalNinjaLifePlayArrow", {
                top: ninjaGreenLine.position().top + ninjaGreenLine.height() + 20,
                left: ((_this.windowWidth / 2) - (ninjaPlayArrow.width() / 2) - 50)
            });
            if (_this.Common.isAndroid()) {
                TweenMax.set("#PlayButtonAction", {
                    top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) + 5,
                    left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2)
                });
            }
            else {
                TweenMax.set("#PlayButtonAction", {
                    top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) + 15,
                    left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2) + 15
                });
            }
            TweenMax.set("#commericalNinjaLifeDescriptionId", {
                top: ninjaPlayArrow.position().top + (ninjaPlayArrow.height() * 2) + 10,
                left: ((_this.windowWidth / 2) - (ninjaDescriptionElement.outerWidth() / 2))
            });
            TweenMax.set("#slideOneArrow", {
                top: ($('#slideOneScroller').height() / 2) - ($('#slideOneArrow').height() / 2)
            });
            if (_this.windowHeight <= 570) {
                TweenMax.set("#slideOneScroller", {
                    top: _this.windowHeight - $('#slideOneScroller').height() + 25,
                    left: (_this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
                });
            }
            if (_this.windowHeight > 570 && _this.windowHeight <= 680) {
                TweenMax.set("#slideOneScroller", {
                    top: _this.windowHeight - $('#slideOneScroller').height() - 50,
                    left: (_this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
                });
            }
            if (_this.windowHeight > 680) {
                TweenMax.set("#slideOneScroller", {
                    top: _this.windowHeight - $('#slideOneScroller').height() - 50,
                    left: (_this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
                });
            }
            var scaledVideo = _this.NinjaCommon.scaleProportionally(1388, 780, _this.windowWidth, 150, false);
            $('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);
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
                playButtonElement.style.borderColor = _this.NinjaCommon.kawasakiGreen;
                document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
                var polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
                if (polygonInPlayBtn.length > 0) {
                    var polygonInSvg = polygonInPlayBtn[0];
                    polygonInSvg.style.fill = _this.NinjaCommon.kawasakiGreen;
                    polygonInSvg.style.stroke = _this.NinjaCommon.kawasakiGreen;
                }
            });
            playButtonElement.addEventListener('mouseleave', function () {
                playButtonElement.style.borderColor = _this.NinjaCommon.kawasakiWhite;
                document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
                var polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
                if (polygonInPlayBtn.length > 0) {
                    var polygonInSvg = polygonInPlayBtn[0];
                    polygonInSvg.style.fill = _this.NinjaCommon.kawasakiWhite;
                    polygonInSvg.style.stroke = _this.NinjaCommon.kawasakiWhite;
                }
            });
            $('#videoPlayer').bind('webkitendfullscreen', function () {
                switch (window.orientation) {
                    case -90:
                    case 90:
                        this.mobileLandscapeOrientationModalChange();
                        break;
                    case 0:
                    case 180:
                        break;
                }
            });
            $("#slideOneScroller").on('tap', function () {
                TweenMax.to(window, 1, {
                    scrollTo: { y: $('#virtual').offset().top }
                });
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
        _this.commercialResize = function (video, windowWidth, windowHeight) {
            var newScaledVideo = _this.NinjaCommon.scaleProportionally(1920, 1080, windowWidth, windowHeight, false);
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
        _this.mobileLandscapeOrientationModalChange = function () {
            TweenMax.fromTo("#imageRotateImg", 2, {
                rotation: 90, scale: 0.4
            }, {
                scale: 0.4, rotation: 0, repeat: -1
            });
            TweenMax.to(".fixed-nav-bar", 1, {
                y: -100
            });
        };
        return _this;
    }
    return CommercialMobile;
}(ExperienceSlide));
