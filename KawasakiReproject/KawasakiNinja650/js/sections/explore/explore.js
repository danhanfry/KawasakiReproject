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
define(["require", "exports", "./components/exploreheader", "./components/exploretiling", "./components/exploreSpecificationModal"], function (require, exports, exploreheader_1, exploretiling_1, exploreSpecificationModal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Explore = (function (_super) {
        __extends(Explore, _super);
        function Explore(props) {
            var _this = _super.call(this, props) || this;
            _this.ExploreIndex = new Kawasaki.NinjaSixFifty.Explore();
            _this.exploreTiles = [];
            _this.Common = new Kawasaki.Common();
            _this.state = {
                TilesState: new Array()
            };
            return _this;
        }
        Explore.prototype.componentWillMount = function () {
            var that = this;
            var request = new XMLHttpRequest();
            request.open('GET', './data/exploredata.json', true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    var exploreData = JSON.parse(request.responseText);
                    if (exploreData !== undefined && exploreData !== null) {
                        var allTiles = [];
                        var listOfTiles = exploreData.Tiles;
                        for (var _i = 0, listOfTiles_1 = listOfTiles; _i < listOfTiles_1.length; _i++) {
                            var exploreTile = listOfTiles_1[_i];
                            var exploreTileItem = {
                                TileId: exploreTile.Id,
                                TileImgPath: exploreTile.ImagePath,
                                TileName: exploreTile.Name,
                                TileSize: exploreTile.TileSize
                            };
                            allTiles.push(exploreTileItem);
                        }
                        that.setState({
                            TilesState: allTiles
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
        Explore.prototype.componentDidMount = function () {
            window.addEventListener("resize", this.exploreResizeEvent);
        };
        Explore.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.exploreResizeEvent);
        };
        Explore.prototype.componentDidUpdate = function (prevProps) {
            if (!this.Common.isMobile() && !this.Common.isTablet()) {
                var techTilesContainer = document.getElementById('techTilesId');
                if (techTilesContainer.children.length > 0) {
                    this.exploreCalculation();
                }
            }
            else {
                this.exploreCalculation();
            }
        };
        Explore.prototype.render = function () {
            var ExploreHeaderProp = this.props.ExploreProperties.ExploreHeaderProp;
            return (React.createElement("div", null,
                React.createElement(exploreheader_1.ExploreHeader, { Model: ExploreHeaderProp }),
                React.createElement(exploretiling_1.ExploreTiling, { Tiles: this.state.TilesState })));
        };
        Explore.prototype.exploreCalculation = function () {
            this.ExploreIndex.calculation();
        };
        Explore.prototype.exploreResizeEvent = function () {
            this.ExploreIndex.recalculation();
        };
        return Explore;
    }(React.Component));
    exports.Explore = Explore;
    var ExploreSpecModal = (function (_super) {
        __extends(ExploreSpecModal, _super);
        function ExploreSpecModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExploreSpecModal.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(exploreSpecificationModal_1.ExploreSpecificationModal, null)));
        };
        return ExploreSpecModal;
    }(React.Component));
    exports.ExploreSpecModal = ExploreSpecModal;
    var exploreModel = new ExploreContentModel('explore ninja<span class="sup">®</span>650', 'click on the bike to explore');
    var exploreProperties = new ExploreProperties(exploreModel);
    ReactDOM.render(React.createElement(Explore, { ExploreProperties: exploreProperties }), document.getElementById('explore'));
    ReactDOM.render(React.createElement(exploreSpecificationModal_1.ExploreSpecificationModal, null), document.getElementById('specificationModal'));
});
