var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var VTR = (function () {
            function VTR() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.NinjaCommon = new Kawasaki.NinjaCommon();
                this.calculation = function () {
                    if (_this.Common.isMobile()) {
                        _this.deviceLayout = new VTRMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        _this.deviceLayout = new VTRTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        _this.deviceLayout = new VTRDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
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
            return VTR;
        }());
        NinjaSixFifty.VTR = VTR;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
