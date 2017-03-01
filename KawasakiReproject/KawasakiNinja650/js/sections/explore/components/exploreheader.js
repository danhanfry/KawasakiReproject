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
    var ExploreHeader = (function (_super) {
        __extends(ExploreHeader, _super);
        function ExploreHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExploreHeader.prototype.render = function () {
            var Model = this.props.Model;
            var Common = new Kawasaki.Common();
            var IsMobile = Common.isMobile();
            var IsTablet = Common.isTablet();
            var IsTouchDevice = IsMobile || IsTablet;
            return (React.createElement("div", null, !IsTouchDevice &&
                React.createElement("div", null,
                    React.createElement("div", { id: "techDemoTrigger", className: "" }),
                    React.createElement("div", { id: "techAnimationExploreId", className: "explore-ninja-content " },
                        React.createElement("div", { className: "explore-ninja-text" },
                            React.createElement("span", { dangerouslySetInnerHTML: { __html: Model.ModelName } })),
                        React.createElement("div", { className: "explore-hr-line" },
                            React.createElement("img", { src: "assets/green_hr.png" })),
                        React.createElement("div", { className: "click-bike-explore" },
                            React.createElement("span", { dangerouslySetInnerHTML: { __html: Model.ExploreText } }))))));
        };
        return ExploreHeader;
    }(React.Component));
    exports.ExploreHeader = ExploreHeader;
});
