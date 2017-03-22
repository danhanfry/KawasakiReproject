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
    var AXHeaderTabs = (function (_super) {
        __extends(AXHeaderTabs, _super);
        function AXHeaderTabs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AXHeaderTabs.prototype.render = function () {
            return (React.createElement("ul", { id: "headerTabId", className: "fit-steps small-block-grid-3" },
                React.createElement("li", { id: "packagesTabId", className: "active" },
                    React.createElement("h2", null, "1. packages")),
                React.createElement("li", { id: "customizeTabId" },
                    React.createElement("h2", null, "2. customize")),
                React.createElement("li", { id: "summaryTabId", className: "last" },
                    React.createElement("h2", null, "3. summary"))));
        };
        return AXHeaderTabs;
    }(React.Component));
    exports.AXHeaderTabs = AXHeaderTabs;
});
