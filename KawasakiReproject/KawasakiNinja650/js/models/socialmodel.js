var SocialHeaderViewModel = (function () {
    function SocialHeaderViewModel(SocialText, SocialHashTagText, SubmissionGuidelineText, TwitterImgPath, InstagramImgPath) {
        this.SocialText = SocialText;
        this.SocialHashTagText = SocialHashTagText;
        this.SubmissionGuidelineText = SubmissionGuidelineText;
        this.TwitterImgPath = TwitterImgPath;
        this.InstagramImgPath = InstagramImgPath;
    }
    return SocialHeaderViewModel;
}());
var SocialCommunityProperties = (function () {
    function SocialCommunityProperties(SocialHeaderProp) {
        this.SocialHeaderProp = SocialHeaderProp;
    }
    return SocialCommunityProperties;
}());
