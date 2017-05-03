var BasePage = require("../../shared/BasePage");
var cameraModule = require("camera");
var permissions = require( "nativescript-permissions" );

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

var CameraPage = CameraPage || {};
(function (cameraPage) {

  __extends(cameraPage, BasePage);

  cameraPage.pageLoaded = function(args) {
    var page = args.object;
    myImage = page.getViewById("myImage");
    myImage.src = "https://placehold.it/150x150";
    page.bindingContext = cameraPage.viewModel;
    grantCameraPermission();
  };

  var init = function() {

  };

  var tapAction = function() {
    cameraModule.takePicture().then(function(picture) {
        myImage.imageSource = picture;
    });
  };

  var grantCameraPermission = function() {
        permissions.requestPermissions([android.Manifest.permission.CAMERA,
                                        android.Manifest.permission.ACCESS_NETWORK_STATE], 
                                        "App Needs The Following permissions")
            .then(()=>{
                console.log("Permission Granted !");
               
            })
            .catch(()=>{
                console.log("Permission Denied !");
            });
  };

    cameraPage.init = init;
    cameraPage.tapAction = tapAction;

})(CameraPage);

module.exports = CameraPage;
