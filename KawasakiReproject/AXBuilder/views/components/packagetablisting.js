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
    var AXPackageDisplay = (function (_super) {
        __extends(AXPackageDisplay, _super);
        function AXPackageDisplay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AXPackageDisplay.prototype.render = function () {
            var packageTitleDescriptionContainerStyle = {
                height: '122px'
            };
            var _a = this.props, BaseImage = _a.BaseImage, Packages = _a.Packages;
            return (React.createElement("div", null,
                React.createElement("div", { id: "packageTitleDescriptionContainerId", style: packageTitleDescriptionContainerStyle },
                    React.createElement("h3", { id: "packageTitleId", className: "title-roll-over" }, "PURPOSE-BUILT PACKAGES"),
                    React.createElement("p", { id: "packageDescriptionId", className: "item-roll-over" }, "Roll over any of the icons below for more information on each purpose-built accessories package.")),
                React.createElement("div", { className: "package-listing-container" },
                    React.createElement("ul", { className: "selections small-block-grid-4", id: "packageListingContainerId" }, Packages.map(function (axpackage, index) {
                        var liId = axpackage.PackageName + "id";
                        return (React.createElement("li", { id: liId, key: index },
                            React.createElement("img", { alt: axpackage.PackageName, src: axpackage.IconImgPath, className: "package-icon" }),
                            React.createElement("h4", { dangerouslySetInnerHTML: { __html: axpackage.PackageTitle } }),
                            React.createElement("button", { className: "gry-btn" }, "select")));
                    })),
                    React.createElement("h6", null,
                        React.createElement("a", { id: "skip" }, "Skip this step")))));
        };
        return AXPackageDisplay;
    }(React.Component));
    exports.AXPackageDisplay = AXPackageDisplay;
});
