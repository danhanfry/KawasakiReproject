var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExploreTablet = (function (_super) {
    __extends(ExploreTablet, _super);
    function ExploreTablet(windowWidth, windowHeight) {
        var _this = this;
        _super.call(this);
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.tiles = [
            { elm: "#stylingId", x: -100, y: -100, imgX: -900, imgY: -100, imgScale: 0.23 },
            { elm: "#comfortId", x: 0, y: -130, imgX: -1320, imgY: 200, imgScale: 0.4 },
            { elm: "#convenienceId", x: -180, y: -40, imgX: -870, imgY: -700, imgScale: 0.5 },
            { elm: "#powerId", x: 230, y: -190, imgX: -900, imgY: -730, imgScale: 0.5 },
            { elm: "#handlingId", x: 120, y: -0, imgX: -500, imgY: 0, imgScale: 0.25 },
            { elm: "#racingHeritageId", x: 0, y: 120, imgX: -300, imgY: -800, imgScale: 0.5 }
        ];
        this.tabletTiles = [
            { elm: "styling", x: -510, y: -300, width: 0, height: 0 },
            { elm: "comfort", x: -300, y: -150, width: 0, height: 0 },
            { elm: "convenience", x: -400, y: -355, width: 0, height: 0 },
            { elm: "power", x: -650, y: -630, width: 0, height: 0 },
            { elm: "handling", x: -155, y: -50, width: 0, height: 0 },
            { elm: "racingHeritage", x: -400, y: -300, width: 0, height: 0 }
        ];
        this.specOriginalDimensions = { width: 1920, height: 1080 };
        this.s3Animated = false;
        this.s3AlreadyTriggerHoverOnInit = false;
        this.s3CurrentSelectedTile = -1;
        this.s3CurrentSelectedTabletTile = -1;
        this.s3ModalExapnded = false;
        this.specModalClicked = false;
        this.currentImageInTileDimensions = { width: 0, height: 0 };
        this.Common = new Kawasaki.Common();
        this.calculation = function () {
            var bikeCoordinates = $('#bikeId').position().top + $('#bikeId').height();
            if (_this.windowWidth <= 1290) {
                TweenMax.set("#techAnimationId", { left: 0 });
            }
            else {
                TweenMax.set("#techAnimationId", { left: (_this.windowWidth / 2) - (1290 / 2) });
            }
            TweenMax.set("#bikeId", { left: (1215 / 2) - ($('#bikeId').width() / 2) });
            var expectedTechAnimationExploreYCoord = 0;
            TweenMax.set("#techAnimationExploreId", {
                left: (_this.windowWidth / 2) - ($('.explore-ninja-content').width() / 2),
            });
            var currentWindowHeight = _this.windowHeight;
            var currentHeightOfSlideContent = $('#techAnimationExploreId').position().top + $('#techAnimationExploreId').height();
            if (currentWindowHeight < currentHeightOfSlideContent) {
                currentWindowHeight = currentHeightOfSlideContent;
            }
            $('#explore').height(currentWindowHeight).width(_this.windowWidth);
            TweenMax.set("#slideThreeScroller", { bottom: 0, left: (_this.windowWidth / 2) - ($('#slideThreeScroller').width() / 2) });
            document.getElementById('thirdSlideTransition').style.display = 'none';
            $('#ninjaLogoExploreId').prop('src', 'assets/slide3/ninja_650_logo_tablet.png');
            $('#ninjaLogoExploreId').width("100%");
            $('.spec-parts').height($('.spec-parts').width() / 2);
            TweenMax.set(".non-spec-container", { top: $('.spec-ninja-bike').position().top + ($('.spec-ninja-bike').height() / 3) - 15 });
            $('#explore').height(_this.windowHeight).width(_this.windowWidth);
            TweenMax.set("#slideThreeScroller", { bottom: "70px", left: (_this.windowWidth / 2) - ($('#slideThreeScroller').width() / 2) });
            $('.spec-parts .non-tech-image').each(function (index, element) {
                var currentTile = $(_this);
                var tileImage;
                var dataTech = currentTile.data('tech');
                var elementDimension;
                switch (dataTech) {
                    case 'power': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/power.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(1.35, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                    case 'handling': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/handling.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(4, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                    case 'comfort': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/comfort.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(3, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                    case 'racingheritage': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/heritage.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(2, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                    case 'styling': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/styling.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(2, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                    case 'convenience': {
                        tileImage = _this.tabletAttachImageToContainer(currentTile, "assets/slide3/convenience.jpg");
                        elementDimension = _this.Common.scaleByFactorProportionally(2, _this.specOriginalDimensions.width, _this.specOriginalDimensions.height);
                        break;
                    }
                }
                ;
                $(tileImage).width(elementDimension.width);
                $(tileImage).height(elementDimension.height);
                var tabletTile = _this.tabletTiles.filter(function (x) { return x.elm == dataTech; });
                if (tabletTile.length > 0) {
                    tabletTile[0].width = $(tileImage).width();
                    tabletTile[0].height = $(tileImage).height();
                }
            });
        };
        this.setTweenMechanism = function () {
        };
        this.eventInitialize = function () {
            $('.tech-image:not(.horiz-white-tile):not(.vert-white-tile)').each(function (index, element) {
                $(this).on('mouseover', function () {
                    TweenMax.to($(this), .2, { scaleX: 1.05, scaleY: 1.05, ease: Linear.easeInOut, repeat: 0 });
                    TweenMax.to($(this), .2, { boxShadow: "rgba(0, 0, 0, 0.078) 10px 10px 30px 30px" });
                });
                $(this).on('mouseout', function () {
                    TweenMax.to($(this), .2, { scaleX: 1, scaleY: 1, ease: Linear.easeInOut, repeat: 0 });
                    TweenMax.to($(this), .2, { boxShadow: "rgba(0, 0, 0, 0.0470588) 10px 10px 30px 30px" });
                });
            });
            $('.tech-image, .non-tech-image').on('click', function (event) {
                var currentId = $(_this).attr('id');
                if (currentId === "verticalWhiteLine" || currentId === "horizontalWhiteLine") {
                    return;
                }
                _this.s3ModalExapnded = true;
                _this.currentTileImage = $(_this)[0];
                _this.specModalClicked = true;
                _this.clonedElement = _this.Common.createCloneOfElement(_this.currentTileImage, { positionTop: 0, positionLeft: 0 });
                document.body.appendChild(_this.clonedElement);
                _this.s3CurrentSelectedTile = $(_this).data('tile-index');
                _this.s3CurrentSelectedTabletTile = $(_this).data('tech');
                _this.s3CapturedTile = { width: "0", height: "0", top: "0", left: "0" };
                _this.s3CapturedTile.width = $(_this.clonedElement).width().toString();
                _this.s3CapturedTile.height = $(_this.clonedElement).height().toString();
                _this.s3CapturedTile.top = $(_this.clonedElement).position().top.toString();
                _this.s3CapturedTile.left = $(_this.clonedElement).position().left.toString();
                var time = 0.65;
                var ease = Power3.easeOut;
                var delay = 0.08;
                var imgWrapper = $(_this.clonedElement).children()[0];
                var img = $(imgWrapper).children()[0];
                var windowW = $(window).width();
                var windowH = $(window).height();
                var results = _this.Common.scaleProportionally(1920, 1080, windowW, windowH, false);
                TweenMax.to(_this.clonedElement, time, { delay: delay, x: 0, y: 0, width: '100%', height: '100%', ease: ease });
                if (imgWrapper) {
                    if ($(imgWrapper).is('div')) {
                        TweenMax.to(imgWrapper, time, { delay: delay, scale: 1, ease: ease });
                    }
                    else if ($(imgWrapper).is('img')) {
                        _this.currentImageInTileDimensions.width = $(imgWrapper).width();
                        _this.currentImageInTileDimensions.height = $(imgWrapper).height();
                        TweenMax.to(imgWrapper, time, { delay: delay, ease: ease, width: "100%", height: "100%", position: 'static' });
                    }
                }
                if (img) {
                    TweenMax.to(img, time, { delay: delay, x: results.targetleft, y: results.targettop, ease: ease, width: results.width, height: results.height });
                }
                var ypad = 50;
                var specHtml = $(_this.currentTileImage).data('tech');
                TweenMax.set('#specificationModal', { x: 0 });
                TweenMax.set('#s3ModalCloseBtn img', { scale: 0, transformOrigin: '50% 70%' });
                $('#modalSpecContentInfo').load("partials/" + specHtml + ".html", function () {
                    TweenMax.set('.spec-details-container', { minHeight: $('#specificationModal.modal').outerHeight() * (0.85) });
                    this.timelineForExpandingSpecs = new TimelineMax({ paused: true });
                    var backing = "<div class='spec-details-backing'></div>";
                    var copyArr = [];
                    var hardDelay = 0.3;
                    TweenMax.set('.spec-details-container', { scaleX: 0, autoAlpha: 1, transformOrigin: '0% 00%' });
                    this.timelineForExpandingSpecs.to('.spec-details-container', 0.5, { scaleX: 1, delay: hardDelay, ease: Power3.easeOut });
                    TweenMax.set('.spec-title', { opacity: 0, y: ypad });
                    copyArr.push(TweenMax.to('.spec-title', 0.9, { delay: hardDelay, y: 0, opacity: 1, ease: Power3.easeOut }));
                    $('.spec-details-text-container').find('div').each(function (i, e) {
                        TweenMax.set(e, { opacity: 0, y: ypad });
                        var d = (i + 1) * (0.02);
                        copyArr.push(TweenMax.to(e, 0.9, { delay: hardDelay + d, y: 0, opacity: 1, ease: Power3.easeOut }));
                    });
                    this.timelineForExpandingSpecs.add(copyArr);
                    this.timelineForExpandingSpecs.play();
                    TweenMax.to('#s3ModalCloseBtn img', 0.5, { scale: 1, delay: hardDelay + 0.7, ease: Power3.easeOut, overwrite: 'all' });
                });
                document.getElementById('specificationModal').style.display = "block";
                _this.Common.preventScrolling();
            });
            $('#specificationModal .close-btn').on('click', function () {
                var currentTileData = _this.tiles[_this.s3CurrentSelectedTile];
                var currentTileTabletDataArr = _this.tabletTiles.filter(function (x) { return x.elm == this.s3CurrentSelectedTabletTile; });
                _this.currentTileTabletData = currentTileTabletDataArr.length > 0 ? currentTileTabletDataArr[0] : {};
                var time = 0.85;
                var ease = Power4.easeInOut;
                var delay = 0.78;
                var imgWrapper = $(_this.clonedElement).children()[0];
                var img = $(imgWrapper).children()[0];
                var ypad = 50;
                var d = 0;
                $('.spec-details-text-container').find('div').each(function (i, e) {
                    var d = (i + 1) * (0.02);
                    TweenMax.to(e, 0.4, { delay: 0, y: ypad, opacity: 0, ease: Power3.easeOut });
                });
                TweenMax.to('.spec-title', 0.4, { delay: d, y: ypad, opacity: 0, ease: Power3.easeOut });
                TweenMax.to('#s3ModalCloseBtn img', 0.35, { scale: 0, delay: 0, overwrite: 'all' });
                TweenMax.to('.spec-details-container', 0.5, { scaleX: 0, delay: 0.65, ease: Power3.easeOut });
                TweenMax.to(_this.clonedElement, time, { delay: delay, x: _this.s3CapturedTile.left, y: _this.s3CapturedTile.top, width: _this.s3CapturedTile.width, height: _this.s3CapturedTile.height, ease: ease });
                if (imgWrapper) {
                    if ($(imgWrapper).is('div')) {
                        TweenMax.to(imgWrapper, time, { delay: delay, scale: currentTileData.imgScale, ease: ease });
                    }
                    else if ($(imgWrapper).is('img')) {
                        TweenMax.to(imgWrapper, time, {
                            delay: delay, ease: ease, x: _this.currentTileTabletData.x, y: _this.currentTileTabletData.y,
                            width: _this.currentTileTabletData.width, height: _this.currentTileTabletData.height, onComplete: function () {
                                document.body.removeChild($('.cloned-element')[0]);
                                this.Common.allowScrolling();
                                document.getElementById('specificationModal').style.display = "none";
                                this.s3CapturedTile = null;
                                this.s3CurrentSelectedTile = -1;
                                this.s3ModalExapnded = false;
                                this.specModalClicked = false;
                            }
                        });
                    }
                }
                if (img) {
                    TweenMax.to(img, time, {
                        delay: delay, x: currentTileData.imgX, y: currentTileData.imgY, ease: ease, width: 1920, height: 1080, onComplete: function () {
                            document.body.removeChild($('.cloned-element')[0]);
                            this.Common.allowScrolling();
                            document.getElementById('specificationModal').style.display = "none";
                            this.s3CapturedTile = null;
                            this.s3CurrentSelectedTile = -1;
                            this.s3ModalExapnded = false;
                            this.specModalClicked = false;
                        }
                    });
                }
            });
            $("#slideThreeScroller").on('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#social').offset().top - 65 } });
            });
        };
        this.resize = function () {
        };
        this.setScrollMagicMechanism = function () {
        };
        this.tabletAttachImageToContainer = function (parent, childImgSrc) {
            var tileImage = document.createElement('img');
            tileImage.src = childImgSrc;
            parent.append(tileImage);
            return tileImage;
        };
    }
    return ExploreTablet;
}(ExperienceSlide));
