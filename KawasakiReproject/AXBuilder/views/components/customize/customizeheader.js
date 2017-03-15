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
    var CustomizeHeader = (function (_super) {
        __extends(CustomizeHeader, _super);
        function CustomizeHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomizeHeader.prototype.render = function () {
            var AllCategories = this.props.AllCategories;
            return (React.createElement("ul", { id: "categoryContainer", className: "tabs inline-list" },
                React.createElement("li", { id: "packages" }, "ACCESSORIES PACKAGES"),
                AllCategories.map(function (axcategory, index) {
                    var specialDataAttr = "cat_" + axcategory.AccessoryCategoryID;
                    return (React.createElement("li", { id: axcategory.CategoryName.toLowerCase(), key: index, "data-special": specialDataAttr, className: "category-tab" },
                        React.createElement("h3", null,
                            axcategory.CategoryName,
                            " ",
                            React.createElement("i", { className: "hide" }))));
                })));
        };
        return CustomizeHeader;
    }(React.Component));
    exports.CustomizeHeader = CustomizeHeader;
});
