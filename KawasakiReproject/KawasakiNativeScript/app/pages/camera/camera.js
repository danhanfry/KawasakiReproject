"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var permissions = require("nativescript-permissions");
var imageSourceModule = require("image-source");
var nativescript_camera_1 = require("nativescript-camera");
var vm = new observable_1.Observable();
var KCamera = (function (_super) {
    __extends(KCamera, _super);
    function KCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "camera");
            vm.set("cameraImage", "https://placehold.it/150x150");
            var page = args.object;
            page.bindingContext = vm;
            if (!_this.hasCameraPermission()) {
                _this.grantCameraPermission();
            }
        };
        _this.tapAction = function (args) {
            var page = args.object;
            nativescript_camera_1.takePicture()
                .then(function (imageAsset) {
                var source = new imageSourceModule.ImageSource();
                source.fromAsset(imageAsset).then(function (source) {
                    console.log("Size: " + source.width + "x" + source.height);
                });
                vm.set("cameraImage", "https://img.clipartfest.com/180148656a42167cea2660a7705c919a_sample-facebook-linkedin-official-linkedin-clipart_1000-1000.png");
                var page = args.object;
                page.bindingContext = vm;
                //page.bindingContext.set("cameraImage", "https://img.clipartfest.com/180148656a42167cea2660a7705c919a_sample-facebook-linkedin-official-linkedin-clipart_1000-1000.png");
            }, function (err) {
                console.log("Error -> " + err.message);
            });
        };
        _this.hasCameraPermission = function () {
            var cameraPermissionAllowed = permissions.hasPermission(android.Manifest.permission.CAMERA);
            var accessNetworkAllowed = permissions.hasPermission(android.Manifest.permission.ACCESS_NETWORK_STATE);
            return cameraPermissionAllowed && accessNetworkAllowed;
        };
        _this.grantCameraPermission = function () {
            permissions.requestPermissions([android.Manifest.permission.CAMERA,
                android.Manifest.permission.ACCESS_NETWORK_STATE], "App Needs The Following permissions")
                .then(function () {
                console.log("Camera Permission Granted !");
            })
                .catch(function () {
                console.log("Camera Permission Denied !");
            });
        };
        return _this;
    }
    return KCamera;
}(BasePage_1.BasePage));
module.exports = new KCamera();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQXNEO0FBS3RELHNEQUF3RDtBQUN4RCxnREFBa0Q7QUFDbEQsMkRBQXFFO0FBR3JFLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTFCO0lBQXNCLDJCQUFRO0lBQTlCO1FBQUEscUVBdURDO1FBckRHLFlBQU0sR0FBRyxVQUFDLElBQWM7WUFDcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsOEJBQThCLENBQUMsQ0FBQztZQUN0RCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBRXpCLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FDL0IsQ0FBQztnQkFDRyxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsZUFBUyxHQUFHLFVBQUMsSUFBZTtZQUV4QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRTdCLGlDQUFXLEVBQUU7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDYixJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07b0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxNQUFNLENBQUMsS0FBSyxTQUFJLE1BQU0sQ0FBQyxNQUFRLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsK0hBQStILENBQUMsQ0FBQztnQkFDdkosSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLDBLQUEwSztZQUM5SyxDQUFDLEVBQ0QsVUFBQyxHQUFHO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQTtRQUVPLHlCQUFtQixHQUFHO1lBQzFCLElBQUksdUJBQXVCLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RixJQUFJLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN2RyxNQUFNLENBQUMsdUJBQXVCLElBQUksb0JBQW9CLENBQUM7UUFDM0QsQ0FBQyxDQUFBO1FBRU8sMkJBQXFCLEdBQUc7WUFDNUIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDbEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsRUFDakQscUNBQXFDLENBQUM7aUJBQ2pFLElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFFL0MsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQztnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUE7O0lBRUwsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBdkRELENBQXNCLG1CQUFRLEdBdUQ3QjtBQUVELGlCQUFTLElBQUksT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RGF0YX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge3RvcG1vc3R9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5cbmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCAqIGFzIGltYWdlU291cmNlTW9kdWxlIGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfWZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ7XG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG5jbGFzcyBLQ2FtZXJhIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKTp2b2lkID0+IHtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiY2FtZXJhXCIpO1xuICAgICAgICB2bS5zZXQoXCJjYW1lcmFJbWFnZVwiLCBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBcIik7XG4gICAgICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7IFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG5cbiAgICAgICAgaWYoIXRoaXMuaGFzQ2FtZXJhUGVybWlzc2lvbigpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdyYW50Q2FtZXJhUGVybWlzc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFwQWN0aW9uID0gKGFyZ3M6IEV2ZW50RGF0YSk6dm9pZCA9PiB7XG5cbiAgICAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAgICAgXG4gICAgICAgIHRha2VQaWN0dXJlKClcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IG5ldyBpbWFnZVNvdXJjZU1vZHVsZS5JbWFnZVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VBc3NldCkudGhlbigoc291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaXplOiAke3NvdXJjZS53aWR0aH14JHtzb3VyY2UuaGVpZ2h0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdm0uc2V0KFwiY2FtZXJhSW1hZ2VcIiwgXCJodHRwczovL2ltZy5jbGlwYXJ0ZmVzdC5jb20vMTgwMTQ4NjU2YTQyMTY3Y2VhMjY2MGE3NzA1YzkxOWFfc2FtcGxlLWZhY2Vib29rLWxpbmtlZGluLW9mZmljaWFsLWxpbmtlZGluLWNsaXBhcnRfMTAwMC0xMDAwLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0OyBcbiAgICAgICAgICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgICAgICAgICAgICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0LnNldChcImNhbWVyYUltYWdlXCIsIFwiaHR0cHM6Ly9pbWcuY2xpcGFydGZlc3QuY29tLzE4MDE0ODY1NmE0MjE2N2NlYTI2NjBhNzcwNWM5MTlhX3NhbXBsZS1mYWNlYm9vay1saW5rZWRpbi1vZmZpY2lhbC1saW5rZWRpbi1jbGlwYXJ0XzEwMDAtMTAwMC5wbmdcIik7XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzQ2FtZXJhUGVybWlzc2lvbiA9ICgpOmJvb2xlYW4gPT4ge1xuICAgICAgICB2YXIgY2FtZXJhUGVybWlzc2lvbkFsbG93ZWQgPSBwZXJtaXNzaW9ucy5oYXNQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQU1FUkEpO1xuICAgICAgICB2YXIgYWNjZXNzTmV0d29ya0FsbG93ZWQgPSBwZXJtaXNzaW9ucy5oYXNQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5BQ0NFU1NfTkVUV09SS19TVEFURSk7XG4gICAgICAgIHJldHVybiBjYW1lcmFQZXJtaXNzaW9uQWxsb3dlZCAmJiBhY2Nlc3NOZXR3b3JrQWxsb3dlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdyYW50Q2FtZXJhUGVybWlzc2lvbiA9ICgpOnZvaWQgPT4ge1xuICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbnMoW2FuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQU1FUkEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLkFDQ0VTU19ORVRXT1JLX1NUQVRFXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHAgTmVlZHMgVGhlIEZvbGxvd2luZyBwZXJtaXNzaW9uc1wiKVxuICAgICAgICAgICAgLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBQZXJtaXNzaW9uIEdyYW50ZWQgIVwiKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FtZXJhIFBlcm1pc3Npb24gRGVuaWVkICFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0ID0gbmV3IEtDYW1lcmEoKTsiXX0=