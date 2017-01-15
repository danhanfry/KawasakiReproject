var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var VTR = (function () {
            function VTR() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    var deviceLayout;
                    if (_this.Common.isMobile()) {
                        deviceLayout = new VTRMobile(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else if (_this.Common.isTablet()) {
                        deviceLayout = new VTRTablet(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    else {
                        deviceLayout = new VTRDesktop(_this.windowDimensions.width, _this.windowDimensions.height);
                    }
                    deviceLayout.calculation();
                    deviceLayout.eventInitialize();
                    deviceLayout.setScrollMagicMechanism();
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return VTR;
        }());
        NinjaSixFifty.VTR = VTR;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
