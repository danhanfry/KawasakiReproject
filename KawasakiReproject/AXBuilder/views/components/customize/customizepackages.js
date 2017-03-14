var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomizePackages = (function (_super) {
        __extends(CustomizePackages, _super);
        function CustomizePackages() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomizePackages.prototype.render = function () {
            var Packages = this.props;
            return (React.createElement("div", { className: "packages hide" }, Packages.map(function (axpackage, index) {
                return (React.createElement("section", { key: index, className: "clearfix customize-package-type", "data-packageid": axpackage.AccessoryPackageTypeID },
                    React.createElement("img", { alt: "reduced package", src: axpackage.IconImgPath }),
                    React.createElement("div", { className: "pick-p" },
                        React.createElement("h3", { className: "package-name-customize-tab", dangerouslySetInnerHTML: { __html: axpackage.PackageName } }),
                        React.createElement("div", { className: "package-accessory" })),
                    React.createElement("div", { className: "free" },
                        React.createElement("button", { id: "", className: "green-btn close-reveal-modal right" }, "SELECT"))));
            })));
        };
        return CustomizePackages;
    }(React.Component));
    exports.CustomizePackages = CustomizePackages;
});
