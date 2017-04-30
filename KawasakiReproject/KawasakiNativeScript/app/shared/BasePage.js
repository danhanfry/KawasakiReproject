var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;

var BasePage = BasePage || {};
(function (basepage) {

  var viewModel = new Observable();
  viewModel.selectedPage = "home";

  var init = function() {

  };

  var pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = viewModel;
  };

  var toggleDrawer = function() {
    var page = topmost().currentPage;
    page.getViewById("drawer").toggleDrawerState();
  };

  var navigate = function(args) {
    var pageName = args.view.text.toLowerCase();
    viewModel.set("selectedPage", pageName);
    topmost().navigate("pages/" + pageName + "/" + pageName);
  };

  basepage.viewModel = viewModel;

  basepage.init= init;
	basepage.pageLoaded = pageLoaded;
  basepage.toggleDrawer = toggleDrawer;
  basepage.navigate = navigate;

})(BasePage);

module.exports = BasePage;
