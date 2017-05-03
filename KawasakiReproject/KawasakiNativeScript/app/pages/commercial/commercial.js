var Common = require("../../shared/Common");
var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

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

var HomePage = HomePage || {};
(function (homepage) {

  __extends(homepage, BasePage);
  homepage.viewModel.set("playButtonClicked", false);

  var playCommercial = function() {
      homepage.viewModel.set("playButtonClicked", true);
  };

  var gotoslidetwo = function() {
   homepage.viewModel.set("selectedPage", "vtr");
    topmost().navigate("pages/vtr/vtr");
  };

  homepage.playCommercial = playCommercial;
  homepage.gotoslidetwo = gotoslidetwo;

})(HomePage);

module.exports = HomePage;
