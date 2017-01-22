/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../interfaces/social.d.ts" />

class SocialHeader implements ISocialHeader {

	constructor(public SocialText: string, public SocialHashTagText: string,
		public SubmissionGuidelineText: string, public TwitterImgPath: string, public InstagramImgPath:string) {

	}
}