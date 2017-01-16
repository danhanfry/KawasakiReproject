var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ResearchToolsHeader = (function (_super) {
        __extends(ResearchToolsHeader, _super);
        function ResearchToolsHeader() {
            _super.apply(this, arguments);
        }
        ResearchToolsHeader.prototype.render = function () {
            var Model = this.props.Model;
            return (React.createElement("div", null, 
                React.createElement("div", {id: "researchYear", className: "research-text-year "}, 
                    React.createElement("div", {className: "scale-to-window"}, 
                        React.createElement("img", {src: Model.YearModelImgUrl})
                    )
                ), 
                React.createElement("div", {id: "researchNinja", className: "research-logo"}, 
                    React.createElement("div", null, 
                        React.createElement("img", {id: "researchNinjaImgId", className: "scale-to-window", src: Model.YearLogoImgUrl})
                    )
                ), 
                React.createElement("div", {id: "researchToolText", className: "research-research-txt"}, 
                    React.createElement("div", null, 
                        React.createElement("span", {id: "researchToolsBackgroundId"}, Model.ResearchToolText)
                    )
                ), 
                React.createElement("div", {id: "researchInDealership", className: "research-in-dealership"}, 
                    React.createElement("div", null, 
                        React.createElement("span", null, Model.ResearchDealership)
                    )
                )));
        };
        return ResearchToolsHeader;
    }(React.Component));
    exports.ResearchToolsHeader = ResearchToolsHeader;
});
