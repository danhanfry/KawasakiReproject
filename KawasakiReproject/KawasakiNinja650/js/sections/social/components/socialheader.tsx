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

				<div class="social-left-line"></div>
				<div class="social-right-line"></div>
				<div id="ninjaLifeTxt" class="ninja-life-text">
					<div><span>{Model.SocialHashTagText}</span></div>
				</div>
				<div class="social-gray-bg">
				</div>
				<div id="socialCommunityText" class="social-community-txt">
					<div><span id="communitySocialBackgroundId">{Model.SocialText}</span></div>
				</div>
				<div id="socialSubmissionGuideLines" class="social-guidelines-txt">
					<div><span>{Model.SubmissionGuidelineText}</span></div>
				</div>
				<div id="socialCommunityContainer" class="social-community-social-icons-container">
					<div id="twitterSocialIconId" class="social-community-social-icons">
						<img src={Model.TwitterImgPath} />
					</div>
					<div id="instagramSocialIconId" class="social-community-social-icons" style={socialContainerStyle}>
						<img src={Model.InstagramImgPath} />
					</div>
				</div>

			</div>
		);
	}
}