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
    var ResearchToolsLinks = (function (_super) {
        __extends(ResearchToolsLinks, _super);
        function ResearchToolsLinks() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResearchToolsLinks.prototype.render = function () {
            var Model = this.props.Model;
            return (React.createElement("div", { className: "footer-tiles" },
                React.createElement("div", { id: Model.HeaderId, className: "research-numbered" }),
                React.createElement("div", { className: "research-numbered-header" },
                    React.createElement("div", null,
                        React.createElement("span", null, Model.HeaderText))),
                React.createElement("div", null, Model.Links.map(function (researchLink, index) {
                    return (React.createElement("div", { className: "research-numbered-link", key: index },
                        React.createElement("div", null,
                            React.createElement("span", null,
                                React.createElement("a", { href: researchLink.Href }, researchLink.Text)))));
                }))));
        };
        return ResearchToolsLinks;
    }(React.Component));
    exports.ResearchToolsLinks = ResearchToolsLinks;
});
