var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var VTRContent = (function (_super) {
        __extends(VTRContent, _super);
        function VTRContent() {
            _super.apply(this, arguments);
        }
        VTRContent.prototype.render = function () {
            var Model = this.props.Model;
            return (React.createElement("div", null));
        };
        return VTRContent;
    }(React.Component));
    exports.VTRContent = VTRContent;
});
