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
var ResearchTablet = (function (_super) {
    __extends(ResearchTablet, _super);
    function ResearchTablet(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            $('#researchtools').width(_this.windowWidth);
            TweenMax.set("#researchYear", { left: ((_this.windowWidth / 2)) - ($('#researchYear').width() / 2) });
            if (_this.Common.isSafari() && !_this.Common.isMobile()) {
                TweenMax.set("#researchYear img", {
                    width: '85%'
                });
            }
            TweenMax.set("#researchNinja", {
                left: ((_this.windowWidth / 2)) - ($('#researchNinja').width() / 2),
                top: $('#researchYear').position().top + $('#researchYear').height() + 20
            });
            if (_this.Common.isSafari() && !_this.Common.isMobile()) {
                if (_this.windowWidth > 1910) {
                    TweenMax.set("#researchNinja", {
                        top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3) + 15
                    });
                }
            }
            TweenMax.set("#researchInDealership", {
                left: ((_this.windowWidth / 2)) - ($('#researchInDealership').width() / 2),
                top: $('#researchToolText').position().top + $('#researchToolText').height() - 10
            });
            if (!_this.Common.isTablet()) {
                var researchToolTxtHalfWidth = $('#researchToolText').width() / 2;
                TweenMax.set(".research-research-txt", { left: (_this.windowWidth / 2) - researchToolTxtHalfWidth });
            }
            TweenMax.set(".footer-tiles", { height: $('#researchtools').height() / 2 });
            var researchToolsColumnsLeftPosition = (_this.windowWidth / 2) - ($('#researchListing').width() / 2);
            TweenMax.set("#researchListing", {
                left: researchToolsColumnsLeftPosition > 5 ? researchToolsColumnsLeftPosition : 5,
                top: $('#researchInDealership').position().top + $('#researchInDealership').height() - 50
            });
            var researchListingHeight = $('#researchListing').height();
            var restartExperienceLeftPosition = (_this.windowWidth / 2) - ($('#researchListing').width() / 2) - ($('.research-restart-btn img').height() / 2);
            TweenMax.set("#restartExperienceId", {
                left: restartExperienceLeftPosition > 0 ? restartExperienceLeftPosition : 0,
                top: $('#researchListing').position().top + ($('#researchListing').height())
            });
            if (_this.windowWidth < 950) {
                TweenMax.set("#exitExperienceId", {
                    left: $('#researchToolText').position().left + ($('#researchToolText').width() / 2),
                    top: $('#researchListing').position().top + ($('#researchListing').height())
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
        };
        _this.setTweenMechanism = function () {
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
        };
        return _this;
    }
    return ResearchTablet;
}(ExperienceSlide));
