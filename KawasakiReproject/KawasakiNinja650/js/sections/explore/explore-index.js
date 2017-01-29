var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var Explore = (function () {
            function Explore() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    if (_this.Common.isMobile()) {
                        _this.deviceLayout = new ExploreMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        _this.deviceLayout = new ExploreTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        _this.deviceLayout = new ExploreDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    _this.deviceLayout.calculation();
                    _this.deviceLayout.eventInitialize();
                    _this.deviceLayout.setScrollMagicMechanism();
                };
                this.recalculation = function () {
                    _this.deviceLayout.calculation();
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return Explore;
        }());
        NinjaSixFifty.Explore = Explore;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
