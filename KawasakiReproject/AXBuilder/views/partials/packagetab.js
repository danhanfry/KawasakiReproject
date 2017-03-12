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
    var AXPackageTab = (function (_super) {
        __extends(AXPackageTab, _super);
        function AXPackageTab() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AXPackageTab.prototype.render = function () {
            return (React.createElement("div", { className: "fit direct-fit clearfix" },
                React.createElement("ul", { className: "small-block-grid-2" },
                    React.createElement("li", null,
                        React.createElement("h1", null, "HEADER HERE"),
                        React.createElement("div", { className: "fit-box" },
                            React.createElement("div", { id: "packageTitleDescriptionContainerId" },
                                React.createElement("h3", { id: "packageTitleId", className: "title-roll-over" }, "PURPOSE-BUILT PACKAGES"),
                                React.createElement("p", { id: "packageDescriptionId", className: "item-roll-over" }, "Roll over any of the icons below for more information on each purpose-built accessories package.")),
                            React.createElement("div", { className: "package-listing-container" },
                                React.createElement("h6", null,
                                    React.createElement("a", { id: "skip" }, "Skip this step"))))),
                    React.createElement("li", null,
                        React.createElement("img", { id: "packageProductImgId", alt: "pick your fit", className: "pick-fit", src: "@Model.BaseImageUrl" })))));
        };
        return AXPackageTab;
    }(React.Component));
    exports.AXPackageTab = AXPackageTab;
});
