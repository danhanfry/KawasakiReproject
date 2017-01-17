var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ResearchTools = (function (_super) {
        __extends(ResearchTools, _super);
        function ResearchTools() {
            _super.apply(this, arguments);
            this.researchLinks = [];
        }
        ResearchTools.prototype.componentWillMount = function () {
            var request = new XMLHttpRequest();
            request.open('GET', './data/researchdata.json', true);
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    console.log('found the json file');
                    var researchData = JSON.parse(this.responseText);
                    if (researchData !== undefined && researchData !== null && researchData.ResearchPage.length > 0) {
                        var allResearchLinks = [];
                        var listOfResearchItem = researchData.ResearchPage;
                        for (var _i = 0, listOfResearchItem_1 = listOfResearchItem; _i < listOfResearchItem_1.length; _i++) {
                            var researchItem = listOfResearchItem_1[_i];
                            var headerText = researchItem.Title;
                            var currentResearchLinks = [];
                            for (var _a = 0, _b = researchItem.Links; _a < _b.length; _a++) {
                                var researchLink = _b[_a];
                                var link = { Text: researchLink.Title, Href: researchLink.Href };
                                currentResearchLinks.push(link);
                            }
                            var researchItemPage = {
                                HeaderText: headerText,
                                Links: currentResearchLinks
                            };
                            allResearchLinks.push(researchItemPage);
                        }
                    }
                }
                else {
                    console.log('reach server, but error');
                }
            };
            request.onerror = function () {
                console.log('cannot connect to server');
            };
            request.send();
        };
        ResearchTools.prototype.componentDidMount = function () {
        };
        ResearchTools.prototype.componentWillUnmount = function () {
        };
        ResearchTools.prototype.render = function () {
            return (React.createElement("div", null));
        };
        return ResearchTools;
    }(React.Component));
    exports.ResearchTools = ResearchTools;
    ReactDOM.render(React.createElement(ResearchTools, {ResearchToolsProperties: null}), document.getElementById('researchtools'));
});
