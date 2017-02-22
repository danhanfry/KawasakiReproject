var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var ResearchTools = (function () {
            function ResearchTools() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.NinjaCommon = new Kawasaki.NinjaCommon();
                this.calculation = function () {
                    if (_this.Common.isMobile()) {
                        _this.deviceLayout = new ResearchMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        _this.deviceLayout = new ResearchTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        _this.deviceLayout = new ResearchDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    _this.deviceLayout.calculation();
                    _this.deviceLayout.eventInitialize();
                    _this.deviceLayout.setScrollMagicMechanism();
                };
                this.recalculation = function () {
                    _this.deviceLayout.calculation();
                };
                this.windowDimensions = this.NinjaCommon.elementDimensions(window);
            }
            return ResearchTools;
        }());
        NinjaSixFifty.ResearchTools = ResearchTools;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
