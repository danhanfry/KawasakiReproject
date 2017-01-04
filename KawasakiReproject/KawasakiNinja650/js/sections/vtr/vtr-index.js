var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var VTR = (function () {
            function VTR() {
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                };
                this.windowDimensions = this.Common.elementDimensions(window);
            }
            return VTR;
        }());
        NinjaSixFifty.VTR = VTR;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
