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
