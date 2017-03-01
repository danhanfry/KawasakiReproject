var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommercialVideo = (function (_super) {
        __extends(CommercialVideo, _super);
        function CommercialVideo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommercialVideo.prototype.render = function () {
            var Model = this.props.Model;
            var Common = new Kawasaki.Common();
            var IsMobile = Common.isMobile();
            var IsTablet = Common.isTablet();
            var IsTouchDevice = IsMobile || IsTablet;
            return (React.createElement("div", null,
                React.createElement("div", { className: "close-button-container hide", id: "firstSlideCloseContainerId" },
                    React.createElement("img", { src: Model.CloseImg, alt: "close button" })),
                React.createElement("div", { className: "video_contain" },
                    React.createElement("video", { id: "videoPlayer", className: "video-container video_main", poster: "", src: Model.VideoUrl, loop: true, width: "100%", height: "auto" })),
                IsTouchDevice &&
                    React.createElement("div", { id: "mobileTabletStaticImgId", className: "mobile-tablet-static-img" },
                        React.createElement("img", { src: IsMobile ? Model.FallbackMobileUrl : (IsTablet ? Model.FallbackTabletUrl : '') }))));
        };
        return CommercialVideo;
    }(React.Component));
    exports.CommercialVideo = CommercialVideo;
});
