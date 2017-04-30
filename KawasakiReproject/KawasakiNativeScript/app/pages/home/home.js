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

  var basePage = __extends(homepage, BasePage);

  var contentLoaded = function() {

  };

  var gotoslidetwo = function() {
    topmost().navigate("pages/about/about");
  };

	homepage.contentLoaded = contentLoaded;
  homepage.gotoslidetwo = gotoslidetwo;

})(HomePage);

module.exports = HomePage;
