/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/social.d.ts" />
/// <reference path="../../../commonjs.ts" />

export class SocialHeader extends React.Component<ISocialHeaderModel, any> {
	render() {

		var {Model} = this.props;

		var socialContainerStyle = {
			marginLeft: '40px'
		};


		return (
			<div>

				<div className="social-left-line"></div>
				<div className="social-right-line"></div>
				<div id="ninjaLifeTxt" className="ninja-life-text">
					<div><span>{Model.SocialHashTagText}</span></div>
				</div>
				<div className="social-gray-bg">
				</div>
				<div id="socialCommunityText" className="social-community-txt">
					<div><span id="communitySocialBackgroundId">{Model.SocialText}</span></div>
				</div>
				<div id="socialSubmissionGuideLines" className="social-guidelines-txt">
					<div><span>{Model.SubmissionGuidelineText}</span></div>
				</div>
				<div id="socialCommunityContainer" className="social-community-social-icons-container">
					<div id="twitterSocialIconId" className="social-community-social-icons">
						<img src={Model.TwitterImgPath} />
					</div>
					<div id="instagramSocialIconId" className="social-community-social-icons" style={socialContainerStyle}>
						<img src={Model.InstagramImgPath} />
					</div>
				</div>

			</div>
		);
	}
}