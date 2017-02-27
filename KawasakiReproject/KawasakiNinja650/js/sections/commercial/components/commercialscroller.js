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
    var CommercialScroller = (function (_super) {
        __extends(CommercialScroller, _super);
        function CommercialScroller() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CommercialScroller.prototype.render = function () {
            return (React.createElement("div", { id: "slideOneScroller", className: "scroll-indicator" },
                React.createElement("div", { id: "scrollIndicatorMask", className: "scroll-indicator-mask" },
                    React.createElement("div", { id: "slideOneArrow", className: "arrow-down" }),
                    React.createElement("img", { id: "slideOneGloss", className: "slide-one-gloss", src: "assets/slide1/scrollIndicator_gloss.svg" }))));
        };
        return CommercialScroller;
    }(React.Component));
    exports.CommercialScroller = CommercialScroller;
});
