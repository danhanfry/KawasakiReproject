var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var CommercialContent = (function (_super) {
        __extends(CommercialContent, _super);
        function CommercialContent() {
            _super.apply(this, arguments);
        }
        CommercialContent.prototype.render = function () {
            var Model = this.props.Model;
            var xmlSerializer = new XMLSerializer();
            var svgPlayBtnAsString = xmlSerializer.serializeToString(Model.PlayButtonImgSvg);
            return (React.createElement("div", null, 
                React.createElement("div", {id: "commericialContainerId", className: "commerical-container scale-to-window"}, 
                    React.createElement("div", {id: "commericalNinjaNameYearId", className: "commerical-text-year "}, 
                        React.createElement("img", {src: Model.YearModelImgUrl})
                    ), 
                    React.createElement("div", {id: "commericalNinjaNameId", className: "commerical-logo "}, 
                        React.createElement("img", {src: Model.YearLogoImgUrl})
                    ), 
                    React.createElement("div", {id: "commericalNinjaLifeGreenHrId", className: "commerical-hr"}, 
                        React.createElement("div", null, 
                            React.createElement("img", {src: Model.GreenHorizontalLineImgUrl})
                        )
                    ), 
                    React.createElement("div", {id: "commericalNinjaLifeDescriptionId", className: "commerical-life-description"}, 
                        React.createElement("div", null, 
                            React.createElement("span", {dangerouslySetInnerHTML: { __html: Model.Description }})
                        )
                    ), 
                    React.createElement("div", {id: "commericalNinjaLifePlayArrow", className: "commerical-life-arrow"}, 
                        React.createElement("div", {id: "playArrowMask", className: "playArrow"}, 
                            React.createElement("span", {className: "", dangerouslySetInnerHTML: { __html: svgPlayBtnAsString }}), 
                            React.createElement("img", {id: "PlayButtonGloss", className: "play-button-gloss", src: Model.PlayButtonGlossImgUrl}))
                    ))
            ));
        };
        return CommercialContent;
    }(React.Component));
    exports.CommercialContent = CommercialContent;
});
