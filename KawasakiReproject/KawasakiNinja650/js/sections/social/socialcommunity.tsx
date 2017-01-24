/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/social.d.ts" />
/// <reference path="../../models/socialmodel.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="social-index.ts" />

import { SocialHeader } from './components/socialheader';
import { SocialModal } from './components/socialmodal';
import { SocialSubmissionGuidelines } from './components/socialSubmissionModal';

export class SocialCommunity extends React.Component<ISocialCommunityModel, any> {

	private SocialIndex: Kawasaki.NinjaSixFifty.SocialCommunity = new Kawasaki.NinjaSixFifty.SocialCommunity();

	/*before the render*/
	public componentWillMount() {
	}

	/*after the render*/
	public componentDidMount() {
		window.addEventListener("resize", this.socialResizeEvent);
		this.socialResizeEvent();
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.socialResizeEvent);
	}

	render() {

		var { SocialHeaderProp } = this.props.SocialCommunityProperties;

		return (
			<div>
				<SocialHeader Model={SocialHeaderProp} />
				<div id="socialContainer" className="social-container"></div>
				<SocialModal />
				<SocialSubmissionGuidelines />
			</div>
		);
	}

	private socialResizeEvent() {
		this.SocialIndex.calculation();
	}

}

var socialCommunityHeaderModel = new SocialHeaderViewModel('community', '#NINJALIFE', 'submission guidelines',
	'assets/slide4/icon_twitter.svg', 'assets/slide4/icon_instagram.svg');


var socialCommunityModel = new SocialCommunityProperties(socialCommunityHeaderModel);

ReactDOM.render(<SocialCommunity SocialCommunityProperties={socialCommunityModel} />, document.getElementById('social'));