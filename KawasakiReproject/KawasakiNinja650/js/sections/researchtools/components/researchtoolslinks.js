var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ResearchToolsLinks = (function (_super) {
        __extends(ResearchToolsLinks, _super);
        function ResearchToolsLinks() {
            _super.apply(this, arguments);
        }
        ResearchToolsLinks.prototype.render = function () {
            var Model = this.props.Model;
            var researchlinks = [];
            for (var i = 0; i < Model.Links.length; i++) {
                researchlinks.push(React.createElement("span", {className: 'indent', key: i}));
            }
            return (React.createElement("div", {id: "researchNumberedContainer", className: "row research-numbered-container"}, 
                React.createElement("div", {className: "footer-tiles-container", id: "researchListing"})
            ));
        };
        return ResearchToolsLinks;
    }(React.Component));
    exports.ResearchToolsLinks = ResearchToolsLinks;
});
