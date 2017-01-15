var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var VTRVideo = (function (_super) {
        __extends(VTRVideo, _super);
        function VTRVideo() {
            _super.apply(this, arguments);
        }
        VTRVideo.prototype.render = function () {
            var Model = this.props.Model;
            var Common = new Kawasaki.Common();
            var IsMobile = Common.isMobile();
            var IsTablet = Common.isTablet();
            var IsTouchDevice = IsMobile || IsTablet;
            var IsLessThanIE11 = Common.isIELessThanEleven();
            var vtrContainerStyle = {
                position: 'absolute',
                height: '78%',
                width: '100%',
                overflow: 'hidden',
                marginTop: '3%'
            };
            return (React.createElement("div", null, 
                !IsTouchDevice && !IsLessThanIE11 &&
                    React.createElement("div", {id: "clipperIdVRVideoId", style: vtrContainerStyle}, 
                        React.createElement("div", {className: "video_contain_vtr"}, 
                            React.createElement("video", {id: "videoPlayerVR", className: "video_vtr", poster: "", src: Model.VideoUrl, loop: true})
                        )
                    ), 
                IsLessThanIE11 &&
                    React.createElement("div", null, 
                        React.createElement("div", {id: "desktopFailOverId", className: "desktop-failover-static-img"}, 
                            React.createElement("img", {src: Model.FallbackLessThanIE11Url})
                        ), 
                        React.createElement("div", {id: "failOverContainerVR", className: "vr-failover-container"}, 
                            React.createElement("div", {id: "failOverNinjaName", className: "failover-vr-logo"}, 
                                React.createElement("img", {src: "assets/logo_ninja.svg"})
                            ), 
                            React.createElement("div", {id: "failOverMessage", className: "failover-vr-message"}, 
                                React.createElement("span", {dangerouslySetInnerHTML: { __html: Model.FallbackLessThanIE11Description }})
                            ))), 
                IsTouchDevice &&
                    React.createElement("div", {id: "mobileTabletVRStaticImgId", className: "mobile-tablet-static-img"}, 
                        React.createElement("img", {src: IsMobile ? Model.FallbackMobileUrl : (IsTablet ? Model.FallbackTabletUrl : '')})
                    )));
        };
        return VTRVideo;
    }(React.Component));
    exports.VTRVideo = VTRVideo;
});
