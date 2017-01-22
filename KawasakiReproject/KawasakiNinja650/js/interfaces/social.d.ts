interface ISocialHeader {
	readonly SocialText: string;
	readonly SocialHashTagText: string;
	readonly SubmissionGuidelineText: string;
	readonly TwitterImgPath: string;
	readonly InstagramImgPath: string;
}

interface ISocialHeaderModel {
	readonly Model: ISocialHeader;
}

interface ISpreadfaster {
	caption: string;
	imageUrl: string;
	network: string;
	thumbUrl: string;
	user: string;
}

interface ISocialCommunityProperties {
	readonly SocialHeaderProp: ISocialHeader;
}

interface ISocialCommunityModel {
	readonly SocialCommunityProperties: ISocialCommunityProperties;
}