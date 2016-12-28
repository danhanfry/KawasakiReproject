var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var Commercial = (function () {
            function Commercial(windowWidth, windowHeight) {
                var _this = this;
                this.windowWidth = windowWidth;
                this.windowHeight = windowHeight;
                this.Common = new Kawasaki.Common();
                this.calculation = function () {
                    var thirdOfWindowHeight = _this.windowHeight / 3;
                    var fourthOfWindowHeight = _this.windowHeight / 4;
                };
            }
            return Commercial;
        }());
        NinjaSixFifty.Commercial = Commercial;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
