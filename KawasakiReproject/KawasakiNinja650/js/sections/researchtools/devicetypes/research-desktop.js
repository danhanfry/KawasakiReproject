var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ResearchDesktop = (function (_super) {
    __extends(ResearchDesktop, _super);
    function ResearchDesktop(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            $('#researchtools').width(_this.windowWidth);
            TweenMax.set("#researchYear", { left: ((_this.windowWidth / 2)) - ($('#researchYear').width() / 2) });
            if (_this.Common.isSafari()) {
                TweenMax.set("#researchYear img", {
                    width: '85%'
                });
            }
            TweenMax.set("#researchNinja", {
                left: ((_this.windowWidth / 2)) - ($('#researchNinja').width() / 2),
                top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3)
            });
            if (_this.Common.isSafari()) {
                if (_this.windowWidth > 1910) {
                    TweenMax.set("#researchNinja", {
                        top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3) + 15
                    });
                }
            }
            TweenMax.set("#researchInDealership", {
                left: ((_this.windowWidth / 2)) - ($('#researchInDealership').width() / 2),
                top: $('#researchToolContainerId').outerHeight() - $('#researchYear').height() + $('#researchNinja').height()
            });
            var researchToolTxtHalfWidth = $('#researchToolText').width() / 2;
            TweenMax.set(".research-research-txt", { left: (_this.windowWidth / 2) - researchToolTxtHalfWidth });
            TweenMax.set(".footer-tiles", { height: $('#researchtools').height() - 160 - 21 - 220 - 100 });
            var researchToolsColumnsLeftPosition = (_this.windowWidth / 2) - ($('#researchListing').width() / 2);
            TweenMax.set("#researchListing", {
                left: researchToolsColumnsLeftPosition > 5 ? researchToolsColumnsLeftPosition : 5,
                top: $('#researchToolContainerId').outerHeight() - $('#researchYear').height() + $('#researchNinja').height() + $('#researchInDealership').height()
            });
            var researchListingHeight = $('#researchListing').height();
            var restartExperienceLeftPosition = (_this.windowWidth / 2) - ($('#researchListing').width() / 2) - ($('.research-restart-btn img').height() / 2);
            TweenMax.set("#restartExperienceId", {
                left: restartExperienceLeftPosition > 0 ? restartExperienceLeftPosition : 0,
                top: ($('#researchtools').height() - researchListingHeight) + (researchListingHeight / 2)
            });
            if (_this.windowWidth < 950) {
                TweenMax.set("#exitExperienceId", {
                    left: $('#researchToolText').position().left + ($('#researchToolText').width() / 2),
                    top: $('#restartExperienceId').position().top
                });
            }
            else {
                TweenMax.set("#exitExperienceId", {
                    left: $('#researchToolText').position().left + ($('#researchToolText').width() / 3 * 2),
                    top: $('#restartExperienceId').position().top
                });
            }
            var halfWayOfResearchTool = $('#researchToolText').position().top + ($('#researchToolText').height() / 2);
            TweenMax.set(".research-grey-bkg", {
                top: halfWayOfResearchTool,
                height: $('#researchtools').height() - halfWayOfResearchTool
            });
            _this.setTweenMechanism();
        };
        _this.setTweenMechanism = function () {
            TweenMax.set(".research-in-dealership", { y: 50 });
        };
        _this.eventInitialize = function () {
            document.getElementById('restartExperienceId').addEventListener('click', function () {
                TweenMax.to(window, 2, { scrollTo: { y: 0, x: 0 } });
            });
            document.getElementById('exitExperienceId').addEventListener('click', function () {
                window.location.href = '/Products/2017-Ninja-650-ABS-KRT-Edition';
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
            var scene = new ScrollMagic.Scene({
                triggerElement: "#researchtools",
                offset: 0,
            })
                .setTween(_this.getFadeTween())
                .addTo(controller);
            var scrambleScene = new ScrollMagic.Scene({
                triggerElement: "#researchtools",
                offset: 0,
            })
                .setTween(_this.getScrambleText())
                .addTo(controller);
        };
        _this.getFadeTween = function () {
            return new TimelineMax()
                .to(".research-text-year", 1, { autoAlpha: 1, ease: Linear.easeInOut })
                .to('.research-logo', 1, { autoAlpha: 1, ease: Linear.easeInOut }, "-=1")
                .to('.research-in-dealership', 0.7, { y: 0, autoAlpha: 1, ease: Linear.easeInOut }, "-=1")
                .to('#researchNumberedContainer', 0.5, { autoAlpha: 1, ease: Linear.easeInOut }, "-=0.5")
                .to('#restartExperienceId', 1, { autoAlpha: 1, ease: Linear.easeInOut });
        };
        _this.getScrambleText = function () {
            return new TimelineMax()
                .to("#researchToolText", 1.5, { opacity: 1 })
                .to("#researchToolsBackgroundId", 1.5, { scrambleText: { text: "RESEARCH TOOLS", chars: "upperCase", revealDelay: 0.5, tweenLength: false, ease: Linear.easeNone } }, "-=2.0");
        };
        return _this;
    }
    return ResearchDesktop;
}(ExperienceSlide));
