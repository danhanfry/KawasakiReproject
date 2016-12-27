var CommercialVideoModel = (function () {
    function CommercialVideoModel(videoUrl, fallbackMobileUrl, fallbackTabletUrl, closeImg) {
        this.VideoUrl = "";
        this.FallbackMobileUrl = "";
        this.FallbackTabletUrl = "";
        this.CloseImg = "";
        this.VideoUrl = videoUrl;
        this.FallbackMobileUrl = fallbackMobileUrl;
        this.FallbackTabletUrl = fallbackTabletUrl;
        this.CloseImg = closeImg;
    }
    return CommercialVideoModel;
}());
var CommercialContentModel = (function () {
    function CommercialContentModel(yearLogoImgUrl, yearModelImgUrl, greenHrImgUrl, description, playBtnGlossImgUrl, playBtnImgSvg) {
        this.YearLogoImgUrl = yearLogoImgUrl;
        this.YearModelImgUrl = yearModelImgUrl;
        this.GreenHorizontalLineImgUrl = greenHrImgUrl;
        this.Description = description;
        this.PlayButtonGlossImgUrl = playBtnGlossImgUrl;
        this.PlayButtonImgSvg = playBtnImgSvg;
    }
    return CommercialContentModel;
}());
var CommercialProperties = (function () {
    function CommercialProperties(CommercialVideoProp, CommercialContentProp) {
        this.CommercialVideoProp = CommercialVideoProp;
        this.CommercialContentProp = CommercialContentProp;
    }
    return CommercialProperties;
}());
