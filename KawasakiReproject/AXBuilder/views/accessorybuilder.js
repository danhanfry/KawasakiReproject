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
define(["require", "exports", "./partials/headertabs", "./components/packagetablisting", "./components/customizetablisting", "./components/summarytablisting", "./components/customize/customizevehiclecontrols"], function (require, exports, headertabs_1, packagetablisting_1, customizetablisting_1, summarytablisting_1, customizevehiclecontrols_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AX = (function (_super) {
        __extends(AX, _super);
        function AX(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                PackageView: true,
                AccessoryView: false,
                SummaryView: false
            };
            return _this;
        }
        AX.prototype.componentWillMount = function () {
        };
        AX.prototype.componentDidMount = function () {
            this.init_clickevents();
        };
        AX.prototype.componentWillUnmount = function () {
        };
        AX.prototype.componentDidUpdate = function (prevProps) {
        };
        AX.prototype.render = function () {
            var _a = this.props, PackageContent = _a.PackageContent, CustomizeContent = _a.CustomizeContent, SummaryContent = _a.SummaryContent;
            var BaseImage = PackageContent.BaseImage, Packages = PackageContent.Packages;
            var Categories = CustomizeContent.Categories, Colors = CustomizeContent.Colors;
            var Summary = SummaryContent.Summary;
            var accessoryImgAddon = {
                height: '414px'
            };
            return (React.createElement("div", { className: "fit direct-fit clearfix" },
                React.createElement("ul", { className: "small-block-grid-2" },
                    React.createElement("li", null,
                        React.createElement(headertabs_1.AXHeaderTabs, null),
                        this.state.PackageView &&
                            React.createElement("div", { className: "fit-box" },
                                React.createElement(packagetablisting_1.AXPackageDisplay, { Packages: Packages, BaseImage: BaseImage })),
                        this.state.AccessoryView &&
                            React.createElement("div", { className: "build-box" },
                                React.createElement(customizetablisting_1.AXCustomizeDisplay, { Packages: Packages, Categories: Categories, Colors: Colors })),
                        this.state.SummaryView &&
                            React.createElement(summarytablisting_1.AXSummaryDisplay, { Summary: Summary })),
                    React.createElement("li", null,
                        this.state.PackageView &&
                            React.createElement("img", { id: "packageProductImgId", alt: "pick your fit", className: "pick-fit", src: BaseImage }),
                        this.state.AccessoryView &&
                            React.createElement("li", { className: "results" },
                                React.createElement("div", { style: accessoryImgAddon },
                                    React.createElement("img", { className: "front-white show" }),
                                    React.createElement("img", { className: "back-white hide" })),
                                React.createElement(customizevehiclecontrols_1.CustomizeVehicleControls, { AllColors: Colors })),
                        this.state.SummaryView &&
                            React.createElement("li", { className: "results" },
                                React.createElement("img", { alt: "mule builder", className: "front-white show", src: "~/images/ajax-medium.gif" }),
                                React.createElement("img", { alt: "mule builder", className: "back-white hide", src: "~/images/ajax-medium.gif" }),
                                React.createElement("div", null,
                                    React.createElement("h5", { className: "frontOrBack" }, "front view"),
                                    React.createElement("img", { alt: "switch front back view", className: "switch", src: "/images/accybldr/switch.jpg" })))))));
        };
        AX.prototype.init_clickevents = function () {
            var headerListings = document.querySelectorAll('#headerTabId li');
            var that = this;
            for (var i = 0; i < headerListings.length; i++) {
                var currentElement = headerListings[i];
                currentElement.addEventListener('click', function () {
                    var currentIdAttribute = this.getAttribute('id');
                    that.setState({
                        PackageView: currentIdAttribute === "packagesTabId",
                        AccessoryView: currentIdAttribute === "customizeTabId",
                        SummaryView: currentIdAttribute === "summaryTabId"
                    });
                });
            }
        };
        return AX;
    }(React.Component));
    exports.AX = AX;
});
