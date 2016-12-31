var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var Commercial = (function () {
            function Commercial() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    var videoPlay = document.getElementById('videoPlayer');
                    videoPlay.controls = false;
                    videoPlay.play();
                    videoPlay.style.display = 'block';
                    var thirdOfWindowHeight = _this.windowDimensions.height / 3;
                    var fourthOfWindowHeight = _this.windowDimensions.height / 4;
                    var thirdOfWindowWidth = _this.windowDimensions.width / 3;
                    var halfOfWindowWidth = _this.windowDimensions.width / 2;
                    var ninjaYearDimensions = _this.Common.elementDimensions(document.getElementById('commericalNinjaNameYearId'));
                    var commercialNinjaHrDimension = _this.Common.elementDimensions(document.getElementById('commericalNinjaLifeGreenHrId'));
                    var commericalNinjaLifeDescDimension = _this.Common.elementDimensions(document.getElementById('commericalNinjaLifeDescriptionId'));
                    var commericalNinjaNameDimension = _this.Common.elementDimensions(document.getElementById('commericalNinjaNameId'));
                    var commercialNinjaNameHeight = commericalNinjaNameDimension.height;
                    var commercialNinjaNameWidth = commericalNinjaNameDimension.width;
                    TweenMax.set("#firstSlideCloseContainerId", {
                        left: (_this.windowDimensions.width / 2) - (_this.Common.elementDimensions(document.getElementById('firstSlideCloseContainerId')).width / 2)
                    });
                    document.getElementById('commercial').style.height = _this.windowDimensions.height + 'px';
                    document.getElementById('commercial').style.width = _this.windowDimensions.width + 'px';
                    var scaledVideo = _this.Common.scaleProportionally(1388, 780, _this.windowDimensions.width, _this.windowDimensions.height, false);
                    document.getElementById('videoPlayer').style.height = scaledVideo.height + 'px';
                    document.getElementById('videoPlayer').style.width = scaledVideo.width + 'px';
                    var topOfHeightToUse = thirdOfWindowHeight;
                    if (_this.windowDimensions.height < 750) {
                        topOfHeightToUse = fourthOfWindowHeight;
                    }
                    TweenMax.set("#commericalNinjaNameYearId", {
                        top: topOfHeightToUse, left: (_this.windowDimensions.width / 2) - (ninjaYearDimensions.width / 2)
                    });
                    TweenMax.set("#commericalNinjaNameId", {
                        top: ninjaYearDimensions.positionTop + ninjaYearDimensions.height,
                        left: (_this.windowDimensions.width / 2) - (commericalNinjaNameDimension.width / 2)
                    });
                    var leftGreenHr = halfOfWindowWidth - 10;
                    if (_this.windowDimensions.width < 1280) {
                        leftGreenHr = leftGreenHr - (commercialNinjaHrDimension.width / 2);
                    }
                    TweenMax.set("#commericalNinjaLifeGreenHrId", {
                        top: commericalNinjaNameDimension.positionTop + commericalNinjaNameDimension.height,
                        left: leftGreenHr
                    });
                    var leftDescription = halfOfWindowWidth - 10;
                    if (_this.windowDimensions.width < 1280) {
                        leftDescription = leftDescription - (commericalNinjaLifeDescDimension.width / 2);
                    }
                    TweenMax.set("#commericalNinjaLifeDescriptionId", {
                        top: commercialNinjaHrDimension.positionTop + commercialNinjaHrDimension.outerHeight,
                        left: leftDescription
                    });
                    TweenMax.set("#commericalNinjaLifePlayArrow", {
                        top: commercialNinjaHrDimension.positionTop + commercialNinjaHrDimension.outerHeight,
                        left: (commericalNinjaLifeDescDimension.positionLeft + commericalNinjaLifeDescDimension.width + 50)
                    });
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return Commercial;
        }());
        NinjaSixFifty.Commercial = Commercial;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
