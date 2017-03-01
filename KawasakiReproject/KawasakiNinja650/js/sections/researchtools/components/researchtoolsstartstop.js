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
    var ResearchToolsStartStop = (function (_super) {
        __extends(ResearchToolsStartStop, _super);
        function ResearchToolsStartStop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResearchToolsStartStop.prototype.render = function () {
            var Model = this.props.Model;
            return (React.createElement("div", null,
                React.createElement("div", { id: "restartExperienceId", className: "restart-experience-indicator" },
                    React.createElement("div", { className: "research-restart-btn" },
                        React.createElement("img", { id: "restartAnimation", src: Model.RestartImgPath })),
                    React.createElement("div", { className: "restart-experience-txt" },
                        React.createElement("span", null, Model.RestartText))),
                React.createElement("div", { id: "exitExperienceId", className: "exit-experience-indicator" },
                    React.createElement("div", { className: "research-exit-btn" },
                        React.createElement("img", { id: "restartAnimation", src: Model.ExitExperienceImgPath })),
                    React.createElement("div", { className: "exit-experience-txt" },
                        React.createElement("span", null, Model.ExitExperienceText)))));
        };
        return ResearchToolsStartStop;
    }(React.Component));
    exports.ResearchToolsStartStop = ResearchToolsStartStop;
});
