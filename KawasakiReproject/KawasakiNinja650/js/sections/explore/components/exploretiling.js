var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ExploreTiling = (function (_super) {
        __extends(ExploreTiling, _super);
        function ExploreTiling() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExploreTiling.prototype.render = function () {
            var Tiles = this.props.Tiles;
            var Common = new Kawasaki.Common();
            var IsMobile = Common.isMobile();
            var IsTablet = Common.isTablet();
            var IsTouchDevice = IsMobile || IsTablet;
            return (React.createElement("div", null,
                !IsTouchDevice &&
                    React.createElement("div", { id: "techAnimationId", className: "tech-demo-bike" },
                        React.createElement("div", { id: "ninjaLogo", className: "tech-ninjalogo" }),
                        React.createElement("div", { id: "bikeId", className: "main-tech-img  " }),
                        React.createElement("div", { id: "techTilesId" }, Tiles.map(function (tile, index) {
                            var classToUse = "tech-image " + tile.TileSize;
                            return (React.createElement("div", { key: index, id: tile.TileId, "data-tech": tile.TileName, className: classToUse },
                                React.createElement("img", { src: tile.TileImgPath })));
                        })),
                        React.createElement("div", { id: "horizontalWhiteLine", className: "tech-image horiz-white-tile" }),
                        React.createElement("div", { id: "verticalWhiteLine", className: "tech-image vert-white-tile" })),
                IsTouchDevice &&
                    React.createElement("div", { id: "nonTechAnimationId" },
                        React.createElement("div", { className: "non-explore-ninja" },
                            React.createElement("div", null,
                                React.createElement("span", null,
                                    "explore ninja",
                                    React.createElement("span", { className: "sup" }, "\u00AE"),
                                    "650"))),
                        React.createElement("div", { className: "spec-ninja-logo" },
                            React.createElement("div", null,
                                React.createElement("img", { id: "ninjaLogoExploreId", src: "" }))),
                        React.createElement("div", { className: "spec-ninja-bike" },
                            React.createElement("div", null,
                                React.createElement("img", { src: "assets/slide3/bike.png" }))),
                        React.createElement("div", { className: "non-spec-container" }, Tiles.map(function (tile, index) {
                            var classToUse = "tech-image " + tile.TileSize;
                            return (React.createElement("div", { key: index, className: "spec-parts" },
                                React.createElement("div", { "data-tech": tile.TileName, className: classToUse })));
                        }))),
                React.createElement("div", { id: "slideThreeScroller", className: "scroll-indicator" },
                    React.createElement("div", null,
                        React.createElement("img", { src: "assets/green_arrow_down.svg" })))));
        };
        return ExploreTiling;
    }(React.Component));
    exports.ExploreTiling = ExploreTiling;
});
