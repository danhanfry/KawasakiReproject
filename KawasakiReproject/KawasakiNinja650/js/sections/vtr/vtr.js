var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var VTR = (function (_super) {
        __extends(VTR, _super);
        function VTR() {
            _super.apply(this, arguments);
            this.Common = new Kawasaki.Common();
            this.VTRIndex = new Kawasaki.NinjaSixFifty.VTR();
        }
        VTR.prototype.componentWillMount = function () {
        };
        VTR.prototype.componentDidMount = function () {
        };
        VTR.prototype.componentWillUnmount = function () {
        };
        VTR.prototype.render = function () {
            var _a = this.props.VTRProperties, VTRVideoProp = _a.VTRVideoProp, VTRContentProp = _a.VTRContentProp;
            return (React.createElement("div", null));
        };
        return VTR;
    }(React.Component));
    exports.VTR = VTR;
});
