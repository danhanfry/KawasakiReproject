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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.browseCatalogClick = function () {
                document.getElementById('noshow').style.display = 'none';
                var allNoShowClass = document.querySelectorAll('.noshow');
                for (var i = 0; i < allNoShowClass.length; i++) {
                    var currentElement = allNoShowClass[i];
                    currentElement.style.display = 'none';
                }
            };
            return _this;
        }
        CustomizeVehicleControls.prototype.render = function () {
            var model = this.props;
            return (React.createElement("div", { className: "summary" },
                React.createElement("section", { className: "clearfix" },
                    React.createElement("p", { className: "left" }, model.ProductCategory),
                    React.createElement("p", { className: "right summary-hide-price" }, model.MSRPText)),
                React.createElement("section", { className: "clearfix" },
                    React.createElement("h2", { className: "left", id: "summaryProductName" }),
                    React.createElement("h3", { className: "right", id: "summaryProductPrice" }),
                    React.createElement("div", { className: "clearfix" },
                        React.createElement("p", { className: "left" }, model.AccessoriesText),
                        React.createElement("p", { id: "accessoryMSRP", className: "right summary-hide-price" }, model.MSRPText))),
                React.createElement("section", { className: "clearfix" },
                    React.createElement("div", { id: "summaryListOfAccessories", className: "item-list clearfix" }),
                    React.createElement("div", { className: "subtotal" },
                        React.createElement("h5", { className: "left summary-hide-price" }, model.SubtotalText),
                        React.createElement("h5", { className: "right summary-hide-price", id: "summarySubTotal" }, "$0.00"))),
                React.createElement("section", { className: "total clearfix" },
                    React.createElement("div", { className: "clearfix" },
                        React.createElement("h6", { className: "left summary-hide-price" }, model.TotalMSRPText),
                        React.createElement("h6", { className: "right" },
                            React.createElement("div", { id: "finalTotal", className: "summary-hide-price" }))),
                    React.createElement("button", { "data-download-summary": true, className: "green-btn" }, model.DownloadSummaryText),
                    React.createElement("button", { "data-email-summary": true, className: "green-btn" }, model.EmailSummaryText),
                    model.HideBrowseCatalog &&
                        React.createElement("h6", null,
                            React.createElement("a", { id: "skip", onClick: this.browseCatalogClick }, "Browse Accessories Catalog")))));
        };
        return CustomizeVehicleControls;
    }(React.Component));
    exports.CustomizeVehicleControls = CustomizeVehicleControls;
});
