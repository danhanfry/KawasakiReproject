var Common = require("../../shared/Common");
var BasePage = require("../../shared/BasePage");
var platform = require("tns-core-modules/platform");
var topmost = require("ui/frame").topmost;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
//var platform = require("platform");

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

var Social = Social || {};
(function (social) {

  __extends(social, BasePage);

  var currentPage;

  social.pageLoaded = function(args) {

    socialFeedRetrieval();
    social.viewModel.set("test", "HI THERE"); 
    //currentPage = args.object;
    //var rightGreenLine = currentPage.getViewById("rightGreenLineId");
    // social.viewModel.set("socialLineRightPosition", platform.screen.mainScreen.widthPixels / 2);
  };

  var init = function() {

  };

    var socialFeedRetrieval = function() {
        fetch("http://app.feedspear.com/Campaign/16/Feed")
        .then(response => { 
            return response.json(); 
        }) .then(function (r) { 
            
            var allSocial = Common.spreadfasterNormalizer(r).slice(0, 20);
            social.viewModel.set("socialTiles", allSocial); 

        }).catch(failOnError);
    };

  var failOnError = function() {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
  };


  social.init = init;

})(Social);

module.exports = Social;
