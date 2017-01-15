var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var Commercial = (function () {
            function Commercial() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    var deviceLayout;
                    if (_this.Common.isMobile()) {
                        deviceLayout = new CommercialMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        deviceLayout = new CommercialTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        deviceLayout = new CommercialDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    deviceLayout.calculation();
                    deviceLayout.eventInitialize();
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return Commercial;
        }());
        NinjaSixFifty.Commercial = Commercial;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
