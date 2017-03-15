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
    var CustomizeCatgoriesAccessories = (function (_super) {
        __extends(CustomizeCatgoriesAccessories, _super);
        function CustomizeCatgoriesAccessories() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomizeCatgoriesAccessories.prototype.render = function () {
            var AllCategories = this.props.AllCategories;
            return (React.createElement("div", { className: "product_list" }, AllCategories.map(function (axcategory, index) {
                var currentCategoryId = "cat_" + axcategory.AccessoryCategoryID;
                var categoryId = axcategory.AccessoryCategoryID;
                var clsName = axcategory.CategoryName + " acc-list " + (index != 0 ? "hide" : "");
                return (React.createElement("div", { id: currentCategoryId, "data-catid": categoryId, className: clsName }));
            })));
        };
        return CustomizeCatgoriesAccessories;
    }(React.Component));
    exports.CustomizeCatgoriesAccessories = CustomizeCatgoriesAccessories;
});
