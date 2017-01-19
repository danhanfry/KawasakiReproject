var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './components/researchtoolsheader', './components/researchtoolslinks'], function (require, exports, researchtoolsheader_1, researchtoolslinks_1) {
    "use strict";
    var ResearchTools = (function (_super) {
        __extends(ResearchTools, _super);
        function ResearchTools(props) {
            _super.call(this, props);
            this.researchLinks = [];
            this.state = {
                LinksState: new Array()
            };
        }
        ResearchTools.prototype.componentWillMount = function () {
            var that = this;
            var request = new XMLHttpRequest();
            request.open('GET', './data/researchdata.json', true);
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
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
                        that.setState({
                            LinksState: allResearchLinks
                        });
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
            var ResearchToolsHeaderProp = this.props.ResearchToolsProperties.ResearchToolsHeaderProp;
            return (React.createElement("div", null, 
                React.createElement(researchtoolsheader_1.ResearchToolsHeader, {Model: ResearchToolsHeaderProp}), 
                React.createElement("div", {id: "researchNumberedContainer", className: "row research-numbered-container"}, 
                    React.createElement("div", {className: "footer-tiles-container", id: "researchListing"}, this.state.LinksState.map(function (researchLink, index) {
                        return (React.createElement(researchtoolslinks_1.ResearchToolsLinks, {Model: researchLink}));
                    }))
                )));
        };
        return ResearchTools;
    }(React.Component));
    exports.ResearchTools = ResearchTools;
    ReactDOM.render(React.createElement(ResearchTools, {ResearchToolsProperties: null}), document.getElementById('researchtools'));
});
