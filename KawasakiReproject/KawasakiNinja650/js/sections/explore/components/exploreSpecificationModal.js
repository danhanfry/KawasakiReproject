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
    var ExploreSpecificationModal = (function (_super) {
        __extends(ExploreSpecificationModal, _super);
        function ExploreSpecificationModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExploreSpecificationModal.prototype.render = function () {
            return (React.createElement("div", { id: "specificationContent", className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("span", { id: "s3ModalCloseBtn", className: "close-btn" },
                        React.createElement("img", { src: "assets/close_green_btn.svg", alt: "close button" }))),
                React.createElement("div", { className: "modal-body" },
                    React.createElement("div", { id: "modalContentSpecContainer", className: "modal-spec-content-container" },
                        React.createElement("div", { id: "modalSpecContentInfo", className: "modal-spec-content-info" })))));
        };
        return ExploreSpecificationModal;
    }(React.Component));
    exports.ExploreSpecificationModal = ExploreSpecificationModal;
});
