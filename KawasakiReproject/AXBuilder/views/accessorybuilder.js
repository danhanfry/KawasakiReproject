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
define(["require", "exports", "./partials/headertabs", "./components/packagetablisting"], function (require, exports, headertabs_1, packagetablisting_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AX = (function (_super) {
        __extends(AX, _super);
        function AX() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AX.prototype.render = function () {
            var PackageContent = this.props.PackageContent;
            var BaseImage = PackageContent.BaseImage, Packages = PackageContent.Packages;
            return (React.createElement("div", { className: "fit direct-fit clearfix" },
                React.createElement("ul", { className: "small-block-grid-2" },
                    React.createElement("li", null,
                        React.createElement(headertabs_1.AXHeaderTabs, null),
                        this.state.PackageView &&
                            React.createElement("div", { className: "fit-box" },
                                React.createElement(packagetablisting_1.AXPackageDisplay, { Packages: Packages, BaseImage: BaseImage })),
                        this.state.AccessoryView &&
                            React.createElement("div", null),
                        this.state.SummaryView &&
                            React.createElement("div", null)),
                    React.createElement("li", null,
                        React.createElement("img", { id: "packageProductImgId", alt: "pick your fit", className: "pick-fit", src: BaseImage })))));
        };
        return AX;
    }(React.Component));
    exports.AX = AX;
});
