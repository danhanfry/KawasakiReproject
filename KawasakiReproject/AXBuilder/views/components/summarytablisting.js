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
define(["require", "exports", "./summary/summarysection"], function (require, exports, summarysection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AXSummaryDisplay = (function (_super) {
        __extends(AXSummaryDisplay, _super);
        function AXSummaryDisplay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AXSummaryDisplay.prototype.render = function () {
            var Summary = this.props.Summary;
            return (React.createElement("div", null,
                React.createElement(summarysection_1.AXSummary, { AccessoriesText: Summary.AccessoriesText, DownloadSummaryText: Summary.DownloadSummaryText, EmailSummaryText: Summary.EmailSummaryText, HideBrowseCatalog: Summary.HideBrowseCatalog, MSRPText: Summary.MSRPText, TotalMSRPText: Summary.TotalMSRPText, ProductCategory: Summary.ProductCategory, SubtotalText: Summary.SubtotalText })));
        };
        return AXSummaryDisplay;
    }(React.Component));
    exports.AXSummaryDisplay = AXSummaryDisplay;
});
