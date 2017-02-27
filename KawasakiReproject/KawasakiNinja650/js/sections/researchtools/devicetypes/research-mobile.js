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
var ResearchMobile = (function (_super) {
    __extends(ResearchMobile, _super);
    function ResearchMobile(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.NinjaCommon = new Kawasaki.NinjaCommon();
        _this.halfWindowWidth = 0;
        _this.calculation = function () {
            if (_this.windowHeight <= 570) {
                $('#researchtools').css('min-height', _this.windowHeight + 60);
            }
            if (_this.windowHeight > 570 && _this.windowHeight <= 680) {
                $('#researchtools').css('min-height', _this.windowHeight + 50);
            }
            if (_this.windowHeight > 680) {
                $('#researchtools').css('min-height', _this.windowHeight - 50);
            }
            $('#researchtools').height(_this.windowHeight - 65);
            $('#researchtools').css('max-width', _this.windowWidth);
            $('#researchtools').width(_this.windowWidth);
            TweenMax.set("#researchYear", { left: _this.halfWindowWidth - ($('#researchYear').width() / 2) });
            if (_this.Common.isAndroid()) {
                $('#researchYear img').width("130%");
            }
            TweenMax.set("#researchNinja", {
                left: _this.halfWindowWidth - ($('#researchNinja').width() / 2),
                top: $('#researchYear').position().top + $('#researchYear').outerHeight() + 15
            });
            TweenMax.set("#researchNinjaImgId", {
                left: _this.halfWindowWidth - ($('#researchNinjaImgId').width() / 2),
                top: $('#researchYear').position().top + $('#researchYear').outerHeight() + 15
            });
            TweenMax.set("#researchInDealership", {
                left: _this.halfWindowWidth - ($('#researchInDealership').width() / 2),
                top: $('#researchNinja').position().top + ($('#researchNinja').height()) - 20
            });
            TweenMax.set("#researchListing", {
                left: _this.halfWindowWidth - ($('#researchListing').width() / 2),
                top: $('#researchToolContainerId').outerHeight() + $('#researchNinja').height() + $('#researchInDealership').height() - 80
            });
            var researchListingHeight = $('#researchListing').height();
            if (_this.windowHeight <= 570) {
                TweenMax.set("#restartExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 60
                });
                TweenMax.set("#exitExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 80,
                    left: $('.restart-experience-txt').outerWidth()
                });
            }
            if (_this.windowHeight > 570 && _this.windowHeight <= 680) {
                TweenMax.set("#restartExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) + 20
                });
                TweenMax.set("#exitExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()),
                    left: $('.restart-experience-txt').outerWidth() + 30
                });
            }
            if (_this.windowHeight > 680) {
                TweenMax.set("#restartExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 20
                });
                TweenMax.set("#exitExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 40,
                    left: $('.restart-experience-txt').outerWidth() + 50
                });
            }
            if (_this.Common.isAndroid()) {
                TweenMax.set("#restartExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 0
                });
                TweenMax.set("#exitExperienceId", {
                    top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 20
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
                document.getElementById('commercial').scrollIntoView();
            });
            document.getElementById('exitExperienceId').addEventListener('click', function () {
                window.location.href = '/Product/details/2017-Ninja-650-ABS-KRT-Edition';
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
        };
        _this.halfWindowWidth = _this.windowWidth / 2;
        return _this;
    }
    return ResearchMobile;
}(ExperienceSlide));
