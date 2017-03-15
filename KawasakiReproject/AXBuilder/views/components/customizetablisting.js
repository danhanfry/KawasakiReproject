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
define(["require", "exports", "./customize/customizeheader", "./customize/customizepackages", "./customize/customizecategoryaccessories"], function (require, exports, customizeheader_1, customizepackages_1, customizecategoryaccessories_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AXCustomizeDisplay = (function (_super) {
        __extends(AXCustomizeDisplay, _super);
        function AXCustomizeDisplay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AXCustomizeDisplay.prototype.render = function () {
            var _a = this.props, Categories = _a.Categories, Packages = _a.Packages;
            return (React.createElement("div", null,
                React.createElement(customizeheader_1.CustomizeHeader, { AllCategories: Categories }),
                React.createElement(customizepackages_1.CustomizePackages, { AllPackages: Packages }),
                React.createElement(customizecategoryaccessories_1.CustomizeCatgoriesAccessories, { AllCategories: Categories })));
        };
        return AXCustomizeDisplay;
    }(React.Component));
    exports.AXCustomizeDisplay = AXCustomizeDisplay;
});
