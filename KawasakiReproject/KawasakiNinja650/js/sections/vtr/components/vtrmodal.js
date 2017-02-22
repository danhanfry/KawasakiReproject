var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var VTRModal = (function (_super) {
        __extends(VTRModal, _super);
        function VTRModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VTRModal.prototype.render = function () {
            return (React.createElement("div", { id: "testVRContent", className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("span", { className: "close-btn" },
                        React.createElement("img", { src: "assets/close_green_btn.svg", alt: "close button" }))),
                React.createElement("div", { className: "modal-body" },
                    React.createElement("div", { id: "modalContentVTRContainer", className: "modal-vtr-content-container" },
                        React.createElement("div", { id: "modalVTRContentInfo", className: "modal-vtr-content-info" })))));
        };
        return VTRModal;
    }(React.Component));
    exports.VTRModal = VTRModal;
});
