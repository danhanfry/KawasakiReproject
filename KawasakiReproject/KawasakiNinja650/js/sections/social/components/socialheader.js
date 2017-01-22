var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var SocialHeader = (function (_super) {
        __extends(SocialHeader, _super);
        function SocialHeader() {
            _super.apply(this, arguments);
        }
        SocialHeader.prototype.render = function () {
            var Model = this.props.Model;
            var socialContainerStyle = {
                marginLeft: '40px'
            };
            return (React.createElement("div", null, 
                React.createElement("div", {class: "social-left-line"}), 
                React.createElement("div", {class: "social-right-line"}), 
                React.createElement("div", {id: "ninjaLifeTxt", class: "ninja-life-text"}, 
                    React.createElement("div", null, 
                        React.createElement("span", null, Model.SocialHashTagText)
                    )
                ), 
                React.createElement("div", {class: "social-gray-bg"}), 
                React.createElement("div", {id: "socialCommunityText", class: "social-community-txt"}, 
                    React.createElement("div", null, 
                        React.createElement("span", {id: "communitySocialBackgroundId"}, Model.SocialText)
                    )
                ), 
                React.createElement("div", {id: "socialSubmissionGuideLines", class: "social-guidelines-txt"}, 
                    React.createElement("div", null, 
                        React.createElement("span", null, Model.SubmissionGuidelineText)
                    )
                ), 
                React.createElement("div", {id: "socialCommunityContainer", class: "social-community-social-icons-container"}, 
                    React.createElement("div", {id: "twitterSocialIconId", class: "social-community-social-icons"}, 
                        React.createElement("img", {src: Model.TwitterImgPath})
                    ), 
                    React.createElement("div", {id: "instagramSocialIconId", class: "social-community-social-icons", style: socialContainerStyle}, 
                        React.createElement("img", {src: Model.InstagramImgPath})
                    ))));
        };
        return SocialHeader;
    }(React.Component));
    exports.SocialHeader = SocialHeader;
});
