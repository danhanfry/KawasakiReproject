var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExploreDesktop = (function (_super) {
    __extends(ExploreDesktop, _super);
    function ExploreDesktop(windowWidth, windowHeight) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.s3Animated = false;
        _this.s3AlreadyTriggerHoverOnInit = false;
        _this.s3CurrentSelectedTile = -1;
        _this.s3CurrentSelectedTabletTile = -1;
        _this.s3ModalExapnded = false;
        _this.specModalClicked = false;
        _this.currentImageInTileDimensions = { width: 0, height: 0 };
        _this.tiles = [
            { elm: "#stylingId", x: -100, y: -100, imgX: -900, imgY: -100, imgScale: 0.23 },
            { elm: "#comfortId", x: 0, y: -130, imgX: -1320, imgY: 200, imgScale: 0.4 },
            { elm: "#convenienceId", x: -180, y: -40, imgX: -870, imgY: -700, imgScale: 0.5 },
            { elm: "#powerId", x: 230, y: -190, imgX: -900, imgY: -730, imgScale: 0.5 },
            { elm: "#handlingId", x: 120, y: -0, imgX: -500, imgY: 0, imgScale: 0.25 },
            { elm: "#racingHeritageId", x: 0, y: 120, imgX: -300, imgY: -800, imgScale: 0.5 }
        ];
        _this.tabletTiles = [
            { elm: "styling", x: -510, y: -300, width: 0, height: 0 },
            { elm: "comfort", x: -300, y: -150, width: 0, height: 0 },
            { elm: "convenience", x: -400, y: -355, width: 0, height: 0 },
            { elm: "power", x: -650, y: -630, width: 0, height: 0 },
            { elm: "handling", x: -155, y: -50, width: 0, height: 0 },
            { elm: "racingHeritage", x: -400, y: -300, width: 0, height: 0 }
        ];
        _this.Common = new Kawasaki.Common();
        _this.calculation = function () {
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
            TweenMax.set("#bikeId", { y: 300, opacity: 0 });
            TweenMax.set("#powerId", { x: 1300, y: 500 });
            TweenMax.set("#comfortId", { x: -1000, y: -600 });
            TweenMax.set("#convenienceId", { x: -1100, y: 300 });
            TweenMax.set("#handlingId", { x: -1000, y: -800 });
            TweenMax.set("#stylingId", { x: 1200, y: -700 });
            TweenMax.set("#racingHeritageId", { x: 1200, y: 800 });
            TweenMax.set(".explore-ninja-text", { y: -100 });
            TweenMax.set(".explore-hr-line", { y: -100 });
            TweenMax.set(".click-bike-explore", { y: -100 });
        };
        _this.setTweenMechanism = function () {
        };
        _this.eventInitialize = function () {
            var that = _this;
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
                var currentId = $(this).attr('id');
                if (currentId === "verticalWhiteLine" || currentId === "horizontalWhiteLine") {
                    return;
                }
                that.s3ModalExapnded = true;
                that.currentTileImage = $(this)[0];
                that.specModalClicked = true;
                that.clonedElement = that.Common.createCloneOfElement(that.currentTileImage, { positionTop: 0, positionLeft: 0 });
                document.body.appendChild(that.clonedElement);
                that.s3CurrentSelectedTile = $(this).data('tile-index');
                that.s3CurrentSelectedTabletTile = $(this).data('tech');
                that.s3CapturedTile = { width: "0", height: "0", top: "0", left: "0" };
                that.s3CapturedTile.width = $(that.clonedElement).width().toString();
                that.s3CapturedTile.height = $(that.clonedElement).height().toString();
                that.s3CapturedTile.top = $(that.clonedElement).position().top.toString();
                that.s3CapturedTile.left = $(that.clonedElement).position().left.toString();
                var time = 0.65;
                var ease = Power3.easeOut;
                var delay = 0.08;
                var imgWrapper = $(that.clonedElement).children()[0];
                var img = $(imgWrapper).children()[0];
                var windowW = $(window).width();
                var windowH = $(window).height();
                var results = that.Common.scaleProportionally(1920, 1080, windowW, windowH, false);
                TweenMax.to(that.clonedElement, time, { delay: delay, x: 0, y: 0, width: '100%', height: '100%', ease: ease });
                if (imgWrapper) {
                    if ($(imgWrapper).is('div')) {
                        TweenMax.to(imgWrapper, time, { delay: delay, scale: 1, ease: ease });
                    }
                    else if ($(imgWrapper).is('img')) {
                        that.currentImageInTileDimensions.width = $(imgWrapper).width();
                        that.currentImageInTileDimensions.height = $(imgWrapper).height();
                        TweenMax.to(imgWrapper, time, { delay: delay, ease: ease, width: "100%", height: "100%", position: 'static' });
                    }
                }
                if (img) {
                    TweenMax.to(img, time, { delay: delay, x: results.targetleft, y: results.targettop, ease: ease, width: results.width, height: results.height });
                }
                var ypad = 50;
                var specHtml = $(that.currentTileImage).data('tech');
                TweenMax.set('#specificationModal', { x: 0 });
                TweenMax.set('#s3ModalCloseBtn img', { scale: 0, transformOrigin: '50% 70%' });
                $('#modalSpecContentInfo').load("partials/" + specHtml + ".html", function () {
                    TweenMax.set('.spec-details-container', { minHeight: $('#specificationModal.modal').outerHeight() * (0.85) });
                    var timelineForExpandingSpecs = new TimelineMax({ paused: true });
                    var backing = "<div class='spec-details-backing'></div>";
                    var copyArr = [];
                    var hardDelay = 0.3;
                    TweenMax.set('.spec-details-container', { scaleX: 0, autoAlpha: 1, transformOrigin: '0% 00%' });
                    timelineForExpandingSpecs.to('.spec-details-container', 0.5, { scaleX: 1, delay: hardDelay, ease: Power3.easeOut });
                    TweenMax.set('.spec-title', { opacity: 0, y: ypad });
                    copyArr.push(TweenMax.to('.spec-title', 0.9, { delay: hardDelay, y: 0, opacity: 1, ease: Power3.easeOut }));
                    $('.spec-details-text-container').find('div').each(function (i, e) {
                        TweenMax.set(e, { opacity: 0, y: ypad });
                        var d = (i + 1) * (0.02);
                        copyArr.push(TweenMax.to(e, 0.9, { delay: hardDelay + d, y: 0, opacity: 1, ease: Power3.easeOut }));
                    });
                    timelineForExpandingSpecs.add(copyArr);
                    timelineForExpandingSpecs.play();
                    TweenMax.to('#s3ModalCloseBtn img', 0.5, { scale: 1, delay: hardDelay + 0.7, ease: Power3.easeOut, overwrite: 'all' });
                });
                document.getElementById('specificationModal').style.display = "block";
                that.Common.preventScrolling();
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
                                that.Common.allowScrolling();
                                document.getElementById('specificationModal').style.display = "none";
                                that.s3CapturedTile = null;
                                that.s3CurrentSelectedTile = -1;
                                that.s3ModalExapnded = false;
                                that.specModalClicked = false;
                            }
                        });
                    }
                }
                if (img) {
                    TweenMax.to(img, time, {
                        delay: delay, x: currentTileData.imgX, y: currentTileData.imgY, ease: ease, width: 1920, height: 1080, onComplete: function () {
                            document.body.removeChild($('.cloned-element')[0]);
                            that.Common.allowScrolling();
                            document.getElementById('specificationModal').style.display = "none";
                            that.s3CapturedTile = null;
                            that.s3CurrentSelectedTile = -1;
                            that.s3ModalExapnded = false;
                            that.specModalClicked = false;
                        }
                    });
                }
            });
            $("#slideThreeScroller").on('click', function () {
                TweenMax.to(window, 1, { scrollTo: { y: $('#social').offset().top - 65 } });
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
            var thirdScene = new ScrollMagic.Scene({
                triggerElement: "#techDemoTrigger",
                offset: 100
            })
                .setTween(_this.tweenMovingBikeParts())
                .addTo(controller)
                .on("leave", _this.onS3Leave);
            _this.tweenHoverSpecSeperateEvent();
        };
        _this.tweenMovingBikeParts = function () {
            var time = 1.5;
            var ease = Power3.easeOut;
            var tlmax = new TimelineMax({
                onComplete: _this.onS3Complete, onReverseStart: _this.onS3ReverseComplete, onReverseComplete: _this.onS3ReverseComplete,
            })
                .add([
                TweenMax.to("#bikeId", 1, { y: 0, opacity: 1, ease: Power3.easeOut }),
                TweenMax.to("#racingHeritageId", time, {
                    delay: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#powerId", time, {
                    delay: 0.2,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Linear.easeInOut
                }),
                TweenMax.to("#stylingId", time, {
                    delay: 0.3,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#comfortId", time, {
                    delay: 0.5,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#convenienceId", time, {
                    delay: 0.2,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#handlingId", time, {
                    delay: 0.6,
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#horizontalWhiteLine", 0.5, {
                    delay: 1.5,
                    scaleY: 1,
                    ease: Cubic.easeInOut
                }),
                TweenMax.to("#verticalWhiteLine", 0.5, {
                    delay: 1.5,
                    scaleX: 1,
                    ease: Cubic.easeInOut
                }),
            ]);
            var tlmax2 = new TimelineMax().add([
                TweenMax.to(".explore-ninja-text", 2, { delay: 1.0, x: 0, y: 0, opacity: 1, ease: ease }),
                TweenMax.to(".explore-hr-line", 2, { delay: 1.0 + 0.1, x: 0, y: 0, opacity: 1, ease: ease }),
                TweenMax.to(".click-bike-explore", 2, { delay: 1.0 + 0.2, x: 0, y: 0, opacity: 1, ease: ease })
            ]);
            return tlmax;
        };
        _this.tweenHoverSpecSeperateEvent = function () {
            var hoverExpandTimeline, currentTileOver, tileTimer;
            var tileState = 'off';
            var techOver = false;
            $(".tech-image").on("mouseover", function () {
                if (!_this.s3AlreadyTriggerHoverOnInit) {
                    $("#techAnimationId").trigger('mouseenter');
                }
            });
            $("#techAnimationId").on('mouseenter', onTileContainerOver);
            $("#techAnimationId").on('mouseleave', onTileContainerOut);
            TweenMax.set('#horizontalWhiteLine', { transformOrigin: '50% 50%', scaleY: 0 });
            TweenMax.set('#verticalWhiteLine', { transformOrigin: '50% 50%', scaleX: 0 });
            for (var i = 0; i < _this.tiles.length; i++) {
                var tile = _this.tiles[i];
                var img = $(tile.elm).children()[0];
                $(tile.elm).data('tile-index', i);
                TweenMax.set(tile.elm, { boxShadow: '20px 40px 40px 40px rgb(0, 0, 0, 0.05)' });
                var rollover = "<div class='rollover' style='width:100%; height:100%; background-color:#66cc33; opacity:0.0;'></div>";
                var parent = "<div class='imgWrapper' ></div>";
                $(tile.elm).append(parent);
                var wrapper = $(tile.elm).children()[1];
                $(wrapper).append(img);
                TweenMax.set(wrapper, { scale: tile.imgScale });
                img = $(wrapper).children()[0];
                TweenMax.set(img, { x: tile.imgX, y: tile.imgY });
            }
            function onTileOver() {
                var rollover = $(this).children()[$(this).children().length - 1];
                if (this.s3Animated && techOver)
                    TweenMax.to(rollover, 0.5, { opacity: 0.5, overwrite: 'all', ease: Power3.easeOut });
                if (this.s3Animated && !techOver)
                    onTileContainerOver();
            }
            function onTileOut() {
                var rollover = $(this).children()[$(this).children().length - 1];
                if (this.s3Animated)
                    TweenMax.to(rollover, 0.2, { opacity: 0.0, overwrite: 'all' });
            }
            function onTileContainerOver() {
                if (this.s3Animated && !this.s3ModalExapnded) {
                    techOver = true;
                    this.s3AlreadyTriggerHoverOnInit = true;
                    handleHoverTiles('over');
                    TweenMax.to("#bikeId", 0.65, { opacity: 0.5, overwrite: 'auto', ease: Power3.easeOut });
                    TweenMax.to("#bikeId", 0.65, { scale: 0.9, overwrite: 'auto', ease: Power3.easeOut });
                    animateWhiteRects('off');
                }
            }
            function onTileContainerOut() {
                if (this.s3Animated && !this.s3ModalExapnded) {
                    techOver = false;
                    handleHoverTiles('out');
                    TweenMax.to("#bikeId", 0.4, { opacity: 1, overwrite: 'auto', ease: Power3.easeOut });
                    TweenMax.to("#bikeId", 0.3, { scale: 1, overwrite: 'auto', ease: Power3.easeOut });
                    animateWhiteRects('on');
                }
            }
            function animateWhiteRects(type) {
                var time = 0.35;
                var scale = 0;
                if (type == 'on') {
                    scale = 1;
                }
                TweenMax.to('#horizontalWhiteLine', time, { scaleY: scale, ease: Power3.easeOut, overwrite: 'all' });
                TweenMax.to('#verticalWhiteLine', time, { scaleX: scale, ease: Power3.easeOut, overwrite: 'all' });
            }
            function handleHoverTiles(type) {
                var ease = Power3.easeOut;
                var time = 0.8;
                var b = [];
                var glow = "20px 20px 40px 40px rgb(0, 0, 0, 0.05)";
                for (var i = 0; i < this.tiles.length; i++) {
                    var tile_1 = this.tiles[i];
                    var x = void 0, y = 0;
                    var time_1 = 0;
                    if (type == 'over') {
                        ease = Back.easeOut;
                        x = tile_1.x;
                        y = tile_1.y;
                        time_1 = parseInt((Math.random() * (0.8 - 0.65) + 0.65).toFixed(4), 10);
                        var a = Math.floor(Math.random() * (5 - 2.2 + 1) + 2.2);
                        b = [a];
                        glow = "0px 0px 10px 10px rgb(0, 0, 0, 0.05)";
                    }
                    TweenMax.to($(tile_1.elm), time_1, { x: x, y: y, overwrite: "all", ease: ease, easeParams: b });
                    TweenMax.to($(tile_1.elm), 0.3, { boxShadow: glow, overwrite: "auto" });
                }
            }
        };
        _this.onS3Complete = function () {
            _this.s3Animated = true;
        };
        _this.onS3ReverseComplete = function () {
            _this.s3Animated = false;
        };
        _this.onS3Leave = function () {
            _this.s3Animated = false;
        };
        return _this;
    }
    return ExploreDesktop;
}(ExperienceSlide));
