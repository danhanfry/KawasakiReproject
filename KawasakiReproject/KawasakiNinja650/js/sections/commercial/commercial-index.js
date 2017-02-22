var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var Commercial = (function () {
            function Commercial() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.NinjaCommon = new Kawasaki.NinjaCommon();
                this.calculation = function () {
                    if (_this.Common.isMobile()) {
                        _this.deviceLayout = new CommercialMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        _this.deviceLayout = new CommercialTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        _this.deviceLayout = new CommercialDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    _this.deviceLayout.calculation();
                    _this.deviceLayout.eventInitialize();
                };
                this.recalculation = function () {
                    _this.deviceLayout.calculation();
                };
                this.windowDimensions = this.NinjaCommon.elementDimensions(window);
            }
            return Commercial;
        }());
        NinjaSixFifty.Commercial = Commercial;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
