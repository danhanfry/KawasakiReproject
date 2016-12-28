var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var CommercialScroller = (function (_super) {
        __extends(CommercialScroller, _super);
        function CommercialScroller() {
            _super.apply(this, arguments);
        }
        CommercialScroller.prototype.render = function () {
            return (React.createElement("div", {id: "slideOneScroller", className: "scroll-indicator"}, 
                React.createElement("div", {id: "scrollIndicatorMask", className: "scroll-indicator-mask"}, 
                    React.createElement("div", {id: "slideOneArrow", className: "arrow-down"}), 
                    React.createElement("img", {id: "slideOneGloss", className: "slide-one-gloss", src: "assets/slide1/scrollIndicator_gloss.svg"}))
            ));
        };
        return CommercialScroller;
    }(React.Component));
    exports.CommercialScroller = CommercialScroller;
});
