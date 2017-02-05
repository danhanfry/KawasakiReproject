var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./components/researchtoolsheader", "./components/researchtoolslinks", "./components/researchtoolsstartstop"], function (require, exports, researchtoolsheader_1, researchtoolslinks_1, researchtoolsstartstop_1) {
    "use strict";
    var ResearchTools = (function (_super) {
        __extends(ResearchTools, _super);
        function ResearchTools(props) {
            var _this = _super.call(this, props) || this;
            _this.ResearchIndex = new Kawasaki.NinjaSixFifty.ResearchTools();
            _this.researchLinks = [];
            _this.Common = new Kawasaki.Common();
            _this.state = {
                LinksState: new Array()
            };
            return _this;
        }
        ResearchTools.prototype.componentWillMount = function () {
            var that = this;
            var request = new XMLHttpRequest();
            request.open('GET', './data/researchdata.json', true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    var researchData = JSON.parse(request.responseText);
                    if (researchData !== undefined && researchData !== null && researchData.ResearchPage.length > 0) {
                        var allResearchLinks = [];
                        var listOfResearchItem = researchData.ResearchPage;
                        for (var _i = 0, listOfResearchItem_1 = listOfResearchItem; _i < listOfResearchItem_1.length; _i++) {
                            var researchItem = listOfResearchItem_1[_i];
                            var headerText = researchItem.Title;
                            var headerId = researchItem.Id;
                            var currentResearchLinks = [];
                            for (var _a = 0, _b = researchItem.Links; _a < _b.length; _a++) {
                                var researchLink = _b[_a];
                                var link = { Text: researchLink.Title, Href: researchLink.Href };
                                currentResearchLinks.push(link);
                            }
                            var researchItemPage = {
                                HeaderText: headerText,
                                HeaderId: headerId,
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
            window.addEventListener("resize", this.researchResizeEvent);
        };
        ResearchTools.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.researchResizeEvent);
        };
        ResearchTools.prototype.componentDidUpdate = function (prevProps) {
            if (!this.Common.isMobile() && !this.Common.isTablet()) {
                var researchLinkContainer = document.getElementById('researchListing');
                if (researchLinkContainer.children.length > 0) {
                    this.researchCalculation();
                }
            }
            else {
                this.researchCalculation();
            }
        };
        ResearchTools.prototype.render = function () {
            var _a = this.props.ResearchToolsProperties, ResearchToolsHeaderProp = _a.ResearchToolsHeaderProp, ResearchToolsStartStopProp = _a.ResearchToolsStartStopProp;
            return (React.createElement("div", null,
                React.createElement("div", { id: "researchToolContainerId", className: "research-container" },
                    React.createElement(researchtoolsheader_1.ResearchToolsHeader, { Model: ResearchToolsHeaderProp }),
                    React.createElement("div", { id: "researchNumberedContainer", className: "row research-numbered-container" },
                        React.createElement("div", { className: "footer-tiles-container", id: "researchListing" }, this.state.LinksState.map(function (researchLink, index) {
                            return (React.createElement(researchtoolslinks_1.ResearchToolsLinks, { key: index, Model: researchLink }));
                        }))),
                    React.createElement(researchtoolsstartstop_1.ResearchToolsStartStop, { Model: ResearchToolsStartStopProp })),
                React.createElement("div", { className: "research-grey-bkg" }),
                React.createElement("div", { className: "restart-black-bkg" })));
        };
        ResearchTools.prototype.researchCalculation = function () {
            this.ResearchIndex.calculation();
        };
        ResearchTools.prototype.researchResizeEvent = function () {
            this.ResearchIndex.recalculation();
        };
        return ResearchTools;
    }(React.Component));
    exports.ResearchTools = ResearchTools;
    var researchHeaderModel = new ResearchToolsHeaderModel('assets/logo_2017.svg', 'assets/logo_ninja.svg', 'research tools', 'in dealerships soon');
    var researchStartStopModel = new ResearchToolsStartStopModel('assets/slide5/restart_experience.svg', 'RESTART EXPERIENCE', 'assets/slide5/icon_exit.svg', 'EXIT EXPERIENCE');
    var researchProperties = new ResearchToolsProperties(researchHeaderModel, researchStartStopModel);
    ReactDOM.render(React.createElement(ResearchTools, { ResearchToolsProperties: researchProperties }), document.getElementById('researchtools'));
});
