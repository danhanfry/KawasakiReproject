var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './components/socialheader', './components/socialmodal', './components/socialSubmissionModal'], function (require, exports, socialheader_1, socialmodal_1, socialSubmissionModal_1) {
    "use strict";
    var SocialCommunity = (function (_super) {
        __extends(SocialCommunity, _super);
        function SocialCommunity() {
            _super.apply(this, arguments);
            this.SocialIndex = new Kawasaki.NinjaSixFifty.SocialCommunity();
        }
        SocialCommunity.prototype.componentWillMount = function () {
        };
        SocialCommunity.prototype.componentDidMount = function () {
            window.addEventListener("resize", this.socialResizeEvent);
            this.socialCalculation();
        };
        SocialCommunity.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.socialResizeEvent);
        };
        SocialCommunity.prototype.render = function () {
            var SocialHeaderProp = this.props.SocialCommunityProperties.SocialHeaderProp;
            return (React.createElement("div", null, 
                React.createElement(socialheader_1.SocialHeader, {Model: SocialHeaderProp}), 
                React.createElement("div", {id: "socialContainer", className: "social-container"}), 
                React.createElement(socialmodal_1.SocialModal, null), 
                React.createElement(socialSubmissionModal_1.SocialSubmissionGuidelines, null)));
        };
        SocialCommunity.prototype.socialCalculation = function () {
            this.SocialIndex.calculation();
        };
        SocialCommunity.prototype.socialResizeEvent = function () {
            this.SocialIndex.recalculation();
        };
        return SocialCommunity;
    }(React.Component));
    exports.SocialCommunity = SocialCommunity;
    var socialCommunityHeaderModel = new SocialHeaderViewModel('community', '#NINJALIFE', 'submission guidelines', 'assets/slide4/icon_twitter.svg', 'assets/slide4/icon_instagram.svg');
    var socialCommunityModel = new SocialCommunityProperties(socialCommunityHeaderModel);
    ReactDOM.render(React.createElement(SocialCommunity, {SocialCommunityProperties: socialCommunityModel}), document.getElementById('social'));
});
