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
    var CustomizeVehicleControls = (function (_super) {
        __extends(CustomizeVehicleControls, _super);
        function CustomizeVehicleControls() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomizeVehicleControls.prototype.render = function () {
            var AllColors = this.props.AllColors;
            var colorCollection = new Collection(AllColors);
            var defaultColorName = colorCollection.Count() > 0 ? colorCollection.FirstOrDefault().ColorName : "NONE";
            var displayNone = {
                display: 'none'
            };
            var displayBlock = {
                display: 'block'
            };
            return (React.createElement("ul", { className: "small-block-grid-3", id: "customizePriceColorView" },
                React.createElement("li", null,
                    React.createElement("h5", null, "accessories total msrp"),
                    React.createElement("div", { className: "accessory-total-container" },
                        React.createElement("h6", { id: "accessoryTotal" }, "$0.00"))),
                React.createElement("li", null,
                    React.createElement("div", { id: "buttonColorName" },
                        React.createElement("h5", null, defaultColorName)),
                    React.createElement("div", { className: "color-picker-container" },
                        React.createElement("ul", { className: "inline-list accessory-color-list-customize-tab", id: "colorOptions" }, AllColors.map(function (axcolor, index) {
                            var swatchOffModeSrc = "/content/accessories/colorswatches/" + axcolor.ColorImgName;
                            var swatchOnModeSrc = "/content/accessories/colorswatches/" + axcolor.ColorImgName_Active + "?w=37";
                            var styleDisplayOff = index === 0 ? displayNone : displayBlock;
                            var styleDisplayOn = index === 0 ? displayBlock : displayNone;
                            return (React.createElement("li", null,
                                React.createElement("img", { "data-id": axcolor.ColorID, "data-colorname": axcolor.ColorName, className: "swatch-off-mode", style: styleDisplayOff, alt: axcolor.ColorImgName, src: swatchOffModeSrc }),
                                React.createElement("img", { "data-id": axcolor.ColorID, "data-colorname": axcolor.ColorName, className: "swatch-on-mode", style: styleDisplayOn, alt: axcolor.ColorImgName, src: swatchOnModeSrc })));
                        })))),
                React.createElement("li", null,
                    React.createElement("h5", { className: "frontOrBack" }, "front view"),
                    React.createElement("img", { alt: "switch front back view", className: "switch", src: "/images/accybldr/switch.jpg" }))));
        };
        return CustomizeVehicleControls;
    }(React.Component));
    exports.CustomizeVehicleControls = CustomizeVehicleControls;
});
