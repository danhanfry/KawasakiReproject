var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var ResearchTools = (function () {
            function ResearchTools() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    var deviceLayout;
                    if (_this.Common.isMobile()) {
                        deviceLayout = new ResearchMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        deviceLayout = new ResearchTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        deviceLayout = new ResearchDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    deviceLayout.calculation();
                    deviceLayout.eventInitialize();
                    deviceLayout.setScrollMagicMechanism();
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return ResearchTools;
        }());
        NinjaSixFifty.ResearchTools = ResearchTools;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
