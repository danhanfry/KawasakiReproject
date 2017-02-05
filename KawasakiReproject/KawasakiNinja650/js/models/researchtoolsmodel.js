var ResearchToolsHeaderModel = (function () {
    function ResearchToolsHeaderModel(YearLogoImgUrl, YearModelImgUrl, ResearchToolText, ResearchDealership) {
        this.YearLogoImgUrl = YearLogoImgUrl;
        this.YearModelImgUrl = YearModelImgUrl;
        this.ResearchToolText = ResearchToolText;
        this.ResearchDealership = ResearchDealership;
    }
    return ResearchToolsHeaderModel;
}());
var ResearchToolsLinksModel = (function () {
    function ResearchToolsLinksModel(HeaderText, HeaderId, Links) {
        this.HeaderText = HeaderText;
        this.HeaderId = HeaderId;
        this.Links = Links;
    }
    return ResearchToolsLinksModel;
}());
var ResearchToolsStartStopModel = (function () {
    function ResearchToolsStartStopModel(RestartImgPath, RestartText, ExitExperienceImgPath, ExitExperienceText) {
        this.RestartImgPath = RestartImgPath;
        this.RestartText = RestartText;
        this.ExitExperienceImgPath = ExitExperienceImgPath;
        this.ExitExperienceText = ExitExperienceText;
    }
    return ResearchToolsStartStopModel;
}());
var ResearchToolsProperties = (function () {
    function ResearchToolsProperties(ResearchToolsHeaderProp, ResearchToolsStartStopProp) {
        this.ResearchToolsHeaderProp = ResearchToolsHeaderProp;
        this.ResearchToolsStartStopProp = ResearchToolsStartStopProp;
    }
    return ResearchToolsProperties;
}());
