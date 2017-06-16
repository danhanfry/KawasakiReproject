"use strict";
var BasePage_1 = require("../../../shared/BasePage");
var builder = require("ui/builder");
var FileReader_1 = require("../../../shared/FileReader");
var Enumerable_1 = require("../../../shared/Enumerable");
var page;
var context;
var uidTile = "styling";
var closeCallback;
var ModalTiles = (function (_super) {
    __extends(ModalTiles, _super);
    function ModalTiles() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onShownModally = function (args) {
            page = args.object;
            context = args.context;
            uidTile = args.context.tileUid;
            _this.getExploreTileData();
            closeCallback = args.closeCallback;
        };
        _this.closeGuidelineModal = function () {
            closeCallback();
        };
        _this.getExploreTileData = function () {
            FileReader_1.FileReader.ReadJSON("/data/exploredata.json")
                .then(function (response) {
                var myLayout = page.getViewById("scrollModalId");
                var enumerableTiles = new Enumerable_1.Enumberable(response.Tiles);
                var foundTiles = enumerableTiles.Where(function (x) { return x.Name == uidTile; });
                if (foundTiles.Any()) {
                    var explorePartialView = builder.load({
                        path: "~/pages/explore/partials",
                        name: foundTiles.FirstOrDefault().Name.toLowerCase(),
                        page: page
                    });
                    myLayout.addChild(explorePartialView);
                }
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        };
        return _this;
    }
    return ModalTiles;
}(BasePage_1.BasePage));
module.exports = new ModalTiles();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXRpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUFrRDtBQUVsRCxvQ0FBc0M7QUFDdEMseURBQXNEO0FBRXRELHlEQUF1RDtBQUV2RCxJQUFJLElBQUksQ0FBQztBQUNULElBQUksT0FBWSxDQUFDO0FBQ2pCLElBQUksT0FBTyxHQUFVLFNBQVMsQ0FBQztBQUMvQixJQUFJLGFBQXVCLENBQUM7QUFFNUI7SUFBeUIsOEJBQVE7SUFBakM7UUFBQSxxRUF3Q0M7UUF0Q0csb0JBQWMsR0FBRyxVQUFDLElBQXNCO1lBQ3BDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDLENBQUE7UUFFRCx5QkFBbUIsR0FBRztZQUNsQixhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUE7UUFFUSx3QkFBa0IsR0FBRztZQUUxQix1QkFBVSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDeEMsSUFBSSxDQUFDLFVBQUMsUUFBcUI7Z0JBRXhCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRWpELElBQUksZUFBZSxHQUFHLElBQUksd0JBQVcsQ0FBZ0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLEVBQWpCLENBQWlCLENBQUMsQ0FBQztnQkFDL0QsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ3BCLENBQUM7b0JBRUUsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNqQyxJQUFJLEVBQUUsMEJBQTBCO3dCQUNoQyxJQUFJLEVBQUUsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3BELElBQUksRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQztvQkFFSCxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFFTCxDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFBOztJQUVMLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBeUIsbUJBQVEsR0F3Q2hDO0FBQ0QsaUJBQVMsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcclxuaW1wb3J0IHsgUGFnZSwgU2hvd25Nb2RhbGx5RGF0YSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGJ1aWxkZXIgZnJvbSBcInVpL2J1aWxkZXJcIjtcclxuaW1wb3J0IHtGaWxlUmVhZGVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0ZpbGVSZWFkZXJcIjtcclxuaW1wb3J0IHtJRXhwbG9yZVBhZ2UsIElFeHBsb3JlVGlsZXMgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL0lLYXdpSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge0VudW1iZXJhYmxlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0VudW1lcmFibGVcIjtcclxuXHJcbmxldCBwYWdlO1xyXG52YXIgY29udGV4dDogYW55O1xyXG5sZXQgdWlkVGlsZTpzdHJpbmcgPSBcInN0eWxpbmdcIjtcclxudmFyIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuY2xhc3MgTW9kYWxUaWxlcyBleHRlbmRzIEJhc2VQYWdlIHtcclxuXHJcbiAgICBvblNob3duTW9kYWxseSA9IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKTp2b2lkID0+IHtcclxuICAgICAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29udGV4dCA9IGFyZ3MuY29udGV4dDtcclxuICAgICAgICB1aWRUaWxlID0gYXJncy5jb250ZXh0LnRpbGVVaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRFeHBsb3JlVGlsZURhdGEoKTtcclxuICAgICAgICBjbG9zZUNhbGxiYWNrID0gYXJncy5jbG9zZUNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlR3VpZGVsaW5lTW9kYWwgPSAoKTp2b2lkID0+IHtcclxuICAgICAgICBjbG9zZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgIHByaXZhdGUgZ2V0RXhwbG9yZVRpbGVEYXRhID0gKCk6dm9pZCA9PiB7XHJcblxyXG4gICAgICAgIEZpbGVSZWFkZXIuUmVhZEpTT04oXCIvZGF0YS9leHBsb3JlZGF0YS5qc29uXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTpJRXhwbG9yZVBhZ2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbXlMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwic2Nyb2xsTW9kYWxJZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZW51bWVyYWJsZVRpbGVzID0gbmV3IEVudW1iZXJhYmxlPElFeHBsb3JlVGlsZXM+KHJlc3BvbnNlLlRpbGVzKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZFRpbGVzID0gZW51bWVyYWJsZVRpbGVzLldoZXJlKHggPT4geC5OYW1lID09IHVpZFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoZm91bmRUaWxlcy5BbnkoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICB2YXIgZXhwbG9yZVBhcnRpYWxWaWV3ID0gYnVpbGRlci5sb2FkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCJ+L3BhZ2VzL2V4cGxvcmUvcGFydGlhbHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZm91bmRUaWxlcy5GaXJzdE9yRGVmYXVsdCgpLk5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBteUxheW91dC5hZGRDaGlsZChleHBsb3JlUGFydGlhbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gXHJcblxyXG59XHJcbmV4cG9ydCA9IG5ldyBNb2RhbFRpbGVzKCk7Il19