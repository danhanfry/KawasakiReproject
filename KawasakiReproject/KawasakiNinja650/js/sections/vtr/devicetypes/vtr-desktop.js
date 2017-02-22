var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VTRDesktop = (function (_super) {
    __extends(VTRDesktop, _super);
    function VTRDesktop(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.NinjaCommon = new Kawasaki.NinjaCommon();
        _this.calculation = function () {
            $('#virtual').height(_this.windowHeight).width(_this.windowWidth);
            if (navigator.userAgent.indexOf("MSIE") >= 0) {
                var scaledStaticImage = _this.NinjaCommon.scaleProportionally(3840, 1400, _this.windowWidth, 700, false);
                $('#desktopFailOverId').height(scaledStaticImage.height);
                $('#desktopFailOverId img').height(scaledStaticImage.height);
                TweenMax.set('#desktopFailOverId', {
                    top: ($('#virtual').height() / 5.5) - 40
                });
                TweenMax.set("#failOverNinjaName", {
                    top: $('#desktopFailOverId').position().top + ($('#desktopFailOverId').height() / 2) - ($('#failOverNinjaName').height()),
                    left: (_this.windowWidth / 2) - ($('#failOverNinjaName').width() / 2)
                });
                TweenMax.set("#failOverMessage", {
                    top: $('#failOverNinjaName').position().top + $('#failOverNinjaName').height(),
                    left: (_this.windowWidth / 2) - ($('#failOverMessage').width() / 2)
                });
            }
            else {
                TweenMax.set('#videoPlayerVR', {
                    top: ($('#virtual').height() / 5.5) - 40
                });
                TweenMax.set('#testVRContainerId', {
                    top: ($('#virtual').height() / 5.5) - 80
                });
                TweenMax.set("#testVRExperience", {
                    left: (_this.windowWidth / 2) - ($('#testVRExperience').width() / 2)
                });
                var vrTestRideTxtHalfWidth = $('#testVRTestRide').width() / 2;
                TweenMax.set(".testvr-testride", {
                    top: $('#testVRExperience').position().top + $('#testVRExperience').height(),
                    left: (_this.windowWidth / 2) - vrTestRideTxtHalfWidth
                });
                TweenMax.set("#testVRDescription", {
                    top: $('#testVRTestRide').position().top + $('#testVRTestRide').height(),
                    left: (_this.windowWidth / 2) - ($('#testVRDescription').width() / 2)
                });
                TweenMax.set('#vrTestRideSelection', {
                    top: $('#testVRDescription').position().top + $('#testVRDescription').height() + 60
                });
                $('#leftTextForVRVideoHoverId').css({
                    'left': ($(window).width() / 2) - $('#leftTextForVRVideoHoverId').width() - 100
                });
                $('#rightTextForVRVideoHoverId').css({
                    'left': ($(window).width() / 2) + 75
                });
                if (_this.windowWidth < (1280 + 40) || _this.windowHeight < 801) {
                    var scaledVRVideo = _this.NinjaCommon.scaleProportionally(1280, 720, (_this.windowWidth / 2), 550, false);
                    $('#modalContentVTRContainer').height(scaledVRVideo.height).width(scaledVRVideo.width);
                    $('#modalVTRContentInfo').height(scaledVRVideo.height).width(scaledVRVideo.width);
                }
                TweenMax.set("#modalVTRContentInfo", {
                    left: (_this.windowWidth / 2) - ($('#modalVTRContentInfo').width() / 2)
                });
                TweenMax.set(".testvr-experience", { y: 50 });
                TweenMax.set(".testvr-description", { y: 50 });
                TweenMax.set("#leftTextForVRVideoHoverId", { y: 100 });
                TweenMax.set("#rightTextForVRVideoHoverId", { y: 100 });
            }
            TweenMax.set("#slideTwoScroller", {
                top: _this.windowHeight - $('#slideTwoScroller').height() - 25,
                left: (_this.windowWidth / 2) - ($('#slideTwoScroller').width() / 2)
            });
            _this.setTweenMechanism();
            var videoVTRPlay = document.getElementById('videoPlayerVR');
            videoVTRPlay.controls = false;
            videoVTRPlay.play();
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
                _this.setupTestVRModal(0);
            });
            $('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('click', function () {
                _this.setupTestVRModal(1);
            });
            $("#slideTwoScroller").on('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top - 65 } });
            });
        };
        _this.resize = function () {
            _this.calculation();
        };
        _this.setScrollMagicMechanism = function () {
            var vtrScene = new ScrollMagic.Scene({
                triggerElement: "#virtual",
                offset: 100
            })
                .setTween(_this.tweenTextByScroll())
                .addTo(controller);
            var scrambleTxtScene = new ScrollMagic.Scene({
                triggerElement: "#virtual",
                offset: 100
            })
                .setTween(_this.tweenScrambleTextByScroll())
                .addTo(controller);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#testVRDescription",
                triggerHook: 1,
                duration: 1
            })
                .setTween("#slideTwoScroller", 1, { y: 65, duration: .5, ease: Linear.easeOut })
                .addTo(controller);
        };
        _this.prepareIFrameVRTestRide = function () {
            var vrIFrame = document.createElement('iframe');
            vrIFrame.width = "100%";
            vrIFrame.height = "100%";
            vrIFrame.frameBorder = "0";
            vrIFrame.marginWidth = "0";
            vrIFrame.marginHeight = "0";
            vrIFrame.name = "inlineframe";
            vrIFrame.style.marginLeft = "0";
            vrIFrame.setAttribute('seamless', 'true');
            document.getElementById('modalVTRContentInfo').appendChild(vrIFrame);
        };
        _this.setupTestVRModal = function (videoId) {
            _this.prepareIFrameVRTestRide();
            window.frames[0].frameElement.src = "//kawasaki.com/ninja650experience/vtr/index.html?videoId=" + videoId;
            document.getElementById('testVRModal').style.display = 'block';
            _this.Common.preventScrolling();
            $('#testVRModal .close-btn').on('click', function () {
                window.frames[0].frameElement.contentWindow.getEdgeApp().destroy();
                _this.Common.allowScrolling();
                document.getElementById('testVRModal').style.display = 'none';
            });
        };
        _this.tweenTextByScroll = function () {
            return new TimelineMax()
                .to('.testvr-experience', 0.5, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.6")
                .to(".testvr-description", 0.5, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.4")
                .to("#leftTextForVRVideoHoverId", 0.4, { y: 0, autoAlpha: 1, ease: Linear.easeOut })
                .to('#rightTextForVRVideoHoverId', 0.4, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.1");
        };
        _this.tweenScrambleTextByScroll = function () {
            return new TimelineMax()
                .to("#testVRTestRide", 1.5, { opacity: 1 })
                .to("#testVRTestRideBackgroundId", 1.5, { scrambleText: { text: "TAKE A VIRTUAL TEST RIDE", chars: "upperCase", revealDelay: 0.5, tweenLength: false, ease: Linear.easeNone } }, "-=2.0");
        };
        return _this;
    }
    return VTRDesktop;
}(ExperienceSlide));
