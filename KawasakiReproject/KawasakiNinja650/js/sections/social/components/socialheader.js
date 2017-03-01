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
    var SocialHeader = (function (_super) {
        __extends(SocialHeader, _super);
        function SocialHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SocialHeader.prototype.render = function () {
            var Model = this.props.Model;
            var socialContainerStyle = {
                marginLeft: '40px'
            };
            return (React.createElement("div", null,
                React.createElement("div", { className: "social-left-line" }),
                React.createElement("div", { className: "social-right-line" }),
                React.createElement("div", { id: "ninjaLifeTxt", className: "ninja-life-text" },
                    React.createElement("div", null,
                        React.createElement("span", null, Model.SocialHashTagText))),
                React.createElement("div", { className: "social-gray-bg" }),
                React.createElement("div", { id: "socialCommunityText", className: "social-community-txt" },
                    React.createElement("div", null,
                        React.createElement("span", { id: "communitySocialBackgroundId" }, Model.SocialText))),
                React.createElement("div", { id: "socialSubmissionGuideLines", className: "social-guidelines-txt" },
                    React.createElement("div", null,
                        React.createElement("span", null, Model.SubmissionGuidelineText))),
                React.createElement("div", { id: "socialCommunityContainer", className: "social-community-social-icons-container" },
                    React.createElement("div", { id: "twitterSocialIconId", className: "social-community-social-icons" },
                        React.createElement("img", { src: Model.TwitterImgPath })),
                    React.createElement("div", { id: "instagramSocialIconId", className: "social-community-social-icons", style: socialContainerStyle },
                        React.createElement("img", { src: Model.InstagramImgPath })))));
        };
        return SocialHeader;
    }(React.Component));
    exports.SocialHeader = SocialHeader;
});
