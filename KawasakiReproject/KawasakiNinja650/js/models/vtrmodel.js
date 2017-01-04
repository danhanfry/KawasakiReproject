var VTRVideoModel = (function () {
    function VTRVideoModel(videoUrl, fallbackMobileUrl, fallbackTabletUrl, fallbackIEUrl, fallbackIEDescription) {
        this.VideoUrl = "";
        this.FallbackMobileUrl = "";
        this.FallbackTabletUrl = "";
        this.FallbackLessThanIE11Url = "";
        this.FallbackLessThanIE11Description = "";
        this.VideoUrl = videoUrl;
        this.FallbackMobileUrl = fallbackMobileUrl;
        this.FallbackTabletUrl = fallbackTabletUrl;
        this.FallbackLessThanIE11Url = fallbackIEUrl;
        this.FallbackLessThanIE11Description = fallbackIEDescription;
    }
    return VTRVideoModel;
}());
var VTRContentViewModel = (function () {
    function VTRContentViewModel(greenExperienceTxt, mainTxtDisplay, description, leftVRSvg, rightVRSvg) {
        this.GreenExperienceText = "";
        this.MainTextDisplay = "";
        this.Description = "";
        this.GreenExperienceText = greenExperienceTxt;
        this.MainTextDisplay = mainTxtDisplay;
        this.Description = description;
        this.VirtualRideLeft = leftVRSvg;
        this.VirtualRideRight = rightVRSvg;
    }
    return VTRContentViewModel;
}());
var VTRProperties = (function () {
    function VTRProperties(VTRVideoProp, VTRContentProp) {
        this.VTRVideoProp = VTRVideoProp;
        this.VTRContentProp = VTRContentProp;
    }
    return VTRProperties;
}());
