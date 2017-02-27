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
    var SocialSubmissionGuidelines = (function (_super) {
        __extends(SocialSubmissionGuidelines, _super);
        function SocialSubmissionGuidelines() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SocialSubmissionGuidelines.prototype.render = function () {
            return (React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("span", { className: "close-btn" },
                        React.createElement("img", { src: "assets/close_green_btn.svg", alt: "close button" }))),
                React.createElement("div", { className: "modal-body" },
                    React.createElement("div", { id: "modalGuidelinesContentContainer", className: "modal-guidelines-container" },
                        React.createElement("div", { className: "guidelines-header" }, "Submission Guidelines"),
                        React.createElement("div", { id: "modalGuidelinesContentInfo", className: "modal-guidelines-info" },
                            React.createElement("div", { className: "guidelines-blurb" }, "We can\u2019t wait to see all the ways you represent #NINJALIFE. In order to feature your submission on our website, we ask that you please follow our submission guidelines."),
                            React.createElement("div", { className: "guidelines-rules" },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("span", null, "Please wear proper riding gear when in motion, including a helmet, eye protection, gloves and proper apparel")),
                                    React.createElement("li", null,
                                        React.createElement("span", null, "Never ride under the influence of drugs or alcohol")),
                                    React.createElement("li", null,
                                        React.createElement("span", null, "Please keep both hands on the handlebars and focus on the road or track")),
                                    React.createElement("li", null,
                                        React.createElement("span", null, "Please make sure operators are able to reach all vehicle controls"))))),
                        React.createElement("div", { className: "guidelines-disclaimer" }, "By submitting a photo you agree that you own all copyright in and to the photo submitted; you have authorization from all individual(s) featured in your photo to allow you to submit a photo bearing their name, image and likeness; and all photos submitted become the property of Kawasaki Motors Corp., U.S.A., and may be used by KMC in any and all forms of media, for any lawful purpose, without further permission or compensation.")))));
        };
        return SocialSubmissionGuidelines;
    }(React.Component));
    exports.SocialSubmissionGuidelines = SocialSubmissionGuidelines;
});
