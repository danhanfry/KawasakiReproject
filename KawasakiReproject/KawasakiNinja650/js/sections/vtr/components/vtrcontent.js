var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var VTRContent = (function (_super) {
        __extends(VTRContent, _super);
        function VTRContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VTRContent.prototype.render = function () {
            var Model = this.props.Model;
            var Common = new Kawasaki.Common();
            var IsLessThanIE11 = Common.isIELessThanEleven();
            var xmlSerializer = new XMLSerializer();
            var svgLeftPlayButton = xmlSerializer.serializeToString(Model.VirtualRideLeft);
            var svgRightPlayButton = xmlSerializer.serializeToString(Model.VirtualRideRight);
            return (React.createElement("div", null, !IsLessThanIE11 &&
                React.createElement("div", null,
                    React.createElement("div", { id: "testVRContainerId", className: "textvr-container" },
                        React.createElement("div", { id: "testVRExperience", className: "testvr-experience" },
                            React.createElement("div", null,
                                React.createElement("span", { dangerouslySetInnerHTML: { __html: Model.GreenExperienceText } }))),
                        React.createElement("div", { id: "testVRTestRide", className: "testvr-testride" },
                            React.createElement("div", null,
                                React.createElement("span", { id: "testVRTestRideBackgroundId" }, Model.MainTextDisplay))),
                        React.createElement("div", { id: "testVRDescription", className: "testvr-description" },
                            React.createElement("div", null,
                                React.createElement("span", { dangerouslySetInnerHTML: { __html: Model.Description } }))),
                        React.createElement("div", { id: "vrTestRideSelection", className: "vr-test-ride-selection" },
                            React.createElement("div", { id: "leftTextForVRVideoHoverId", className: "text-vr-hover-txt" },
                                React.createElement("div", { className: "vr-video-green-line" }),
                                React.createElement("div", { className: "interactive-ride-img" },
                                    React.createElement("span", { className: "", dangerouslySetInnerHTML: { __html: svgLeftPlayButton } })),
                                React.createElement("span", null, "INTERACTIVE RIDE")),
                            React.createElement("div", { id: "rightTextForVRVideoHoverId", className: "text-vr-hover-txt" },
                                React.createElement("div", { className: "vr-video-green-line" }),
                                React.createElement("div", { className: "free-ride-img" },
                                    React.createElement("span", { className: "", dangerouslySetInnerHTML: { __html: svgRightPlayButton } })),
                                React.createElement("span", null, "FREE RIDE")))),
                    React.createElement("div", { id: "slideTwoScroller", className: "scroll-indicator" },
                        React.createElement("div", null,
                            React.createElement("img", { src: "assets/green_arrow_down.svg" }))))));
        };
        return VTRContent;
    }(React.Component));
    exports.VTRContent = VTRContent;
});
