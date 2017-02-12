var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var SocialModal = (function (_super) {
        __extends(SocialModal, _super);
        function SocialModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SocialModal.prototype.render = function () {
            return (React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("span", { className: "close-btn" },
                        React.createElement("img", { src: "assets/close_green_btn.svg", alt: "close button" }))),
                React.createElement("div", { className: "modal-body" },
                    React.createElement("div", { id: "modalContentImage", className: "modal-content-image" }),
                    React.createElement("div", { id: "modalContentContainer", className: "modal-content-container" },
                        React.createElement("div", { id: "modalContentInfo", className: "modal-content-info" })))));
        };
        return SocialModal;
    }(React.Component));
    exports.SocialModal = SocialModal;
});
