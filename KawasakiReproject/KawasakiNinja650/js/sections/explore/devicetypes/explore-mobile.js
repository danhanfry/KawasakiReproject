var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExploreMobile = (function (_super) {
    __extends(ExploreMobile, _super);
    function ExploreMobile(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
            document.getElementById('techAnimationExploreId').style.display = 'none';
            document.getElementById('slideThreeScroller').style.display = 'none';
            $('#ninjaLogoExploreId').prop('src', 'assets/slide3/ninja-650-logo-mobile.png');
            $('.spec-parts').height($('.spec-parts').width() / 3 * 2 + 6);
            $('.spec-parts-final').height($('.spec-parts').width() / 2);
            $('.non-tech-image').height($('.non-tech-image').width() / 3 * 2 + 6);
            $('#explore').height(_this.windowHeight).width(_this.windowWidth);
            $('#explore').css('min-height', '0px');
            TweenMax.set(".non-spec-container", { top: ($('.spec-ninja-bike').position().top + $('.spec-ninja-bike').height()) / 3 * 2 - 3 });
            TweenMax.set("#slideThreeScroller", {
                bottom: 0, left: (_this.windowWidth / 2) - ($('#slideThreeScroller').width() / 2)
            });
        };
        _this.setTweenMechanism = function () {
        };
        _this.eventInitialize = function () {
            $('.non-tech-image').on('click', function (event) {
                var currentImage = $(this)[0];
                var specHtml = $(currentImage).data('tech');
                $('#modalSpecContentInfo').load("partials/" + specHtml + ".html", function () {
                    TweenMax.set('.modal-spec-content-info', {
                        height: $('#specificationModal.modal').outerHeight() - 100
                    });
                    TweenMax.set('.spec-details-container', {
                        minHeight: Math.ceil($('#specificationModal.modal').outerHeight() * (0.75))
                    });
                    TweenMax.set('#mobileImgDisplay', {
                        width: $('#specificationModal').width(), height: 360
                    });
                    var $scroller = $(".modal-spec-content-info");
                    $scroller.bind('touchstart', function (ev) {
                        var $this = $(this);
                        var scroller = $scroller.get(0);
                        if ($this.scrollTop() === 0)
                            $this.scrollTop(1);
                        var scrollTop = scroller.scrollTop;
                        var scrollHeight = scroller.scrollHeight;
                        var offsetHeight = scroller.offsetHeight;
                        var contentHeight = scrollHeight - offsetHeight;
                        if (contentHeight == scrollTop)
                            $this.scrollTop(scrollTop - 1);
                        if (contentHeight === 0) {
                            this.Common.preventScrolling();
                        }
                    });
                    $scroller.scrollTop(0);
                }).hide().fadeIn('slow');
                TweenMax.to(".fixed-nav-bar", 1, {
                    autoAlpha: 0, ease: Linear.easeNone
                });
                document.getElementById('specificationModal').style.display = "block";
            });
            $('#specificationModal .close-btn').on('click', function () {
                _this.Common.allowScrolling();
                TweenMax.to(".fixed-nav-bar", 1, {
                    autoAlpha: 1, ease: Linear.easeNone
                });
                $("#specificationModal").fadeOut('slow');
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
        };
        return _this;
    }
    return ExploreMobile;
}(ExperienceSlide));
