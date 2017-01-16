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
    function ResearchToolsLinksModel(Links) {
        this.Links = Links;
    }
    return ResearchToolsLinksModel;
}());
var ResearchToolsProperties = (function () {
    function ResearchToolsProperties(ResearchToolsHeaderProp, ResearchToolsLinksProp) {
        this.ResearchToolsHeaderProp = ResearchToolsHeaderProp;
        this.ResearchToolsLinksProp = ResearchToolsLinksProp;
    }
    return ResearchToolsProperties;
}());
