"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var FileReader_1 = require("../../shared/FileReader");
var stack_layout_1 = require("ui/layouts/stack-layout");
var vm = new observable_1.Observable();
var page;
var ExplorePage = (function (_super) {
    __extends(ExplorePage, _super);
    function ExplorePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "explore");
            page = args.object;
            _this.getExploreTileData();
            page.bindingContext = vm;
        };
        _this.openexploretiles = function (args) {
            var context = {
                tileUid: args.object["data-name"]
            };
            page.showModal("pages/explore/modaltiles/modal-tile", context, function () { }, true);
        };
        _this.getExploreTileData = function () {
            var myLayout = page.getViewById("exploreRepeaterId");
            FileReader_1.FileReader.ReadJSON("/data/exploredata.json")
                .then(function (response) {
                myLayout.bindingContext = {
                    exploreTiles: response.Tiles
                };
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        };
        _this.setTilesToGridView = function (tiles) {
            var exploreRepeaterId = page.getViewById("exploreRepeaterId");
            tiles.forEach(function (tile) {
                var currentStackLayout = new stack_layout_1.StackLayout();
                currentStackLayout.backgroundImage = tile.ImagePath;
                currentStackLayout.set("data-tech", tile.Name);
                currentStackLayout.className = "non-tech-image " + tile.ClassName;
                exploreRepeaterId.addChild(currentStackLayout);
            });
        };
        return _this;
    }
    return ExplorePage;
}(BasePage_1.BasePage));
module.exports = new ExplorePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4cGxvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtEQUErQztBQUMvQyw4Q0FBc0Q7QUFDdEQsc0RBQW1EO0FBRW5ELHdEQUFzRDtBQUt0RCxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLElBQVMsQ0FBQztBQUVkO0lBQTBCLCtCQUFRO0lBQWxDO1FBQUEscUVBZ0RDO1FBOUNHLFlBQU0sR0FBRyxVQUFDLElBQWM7WUFDcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFBO1FBRUQsc0JBQWdCLEdBQUcsVUFBQyxJQUFjO1lBQzlCLElBQUksT0FBTyxHQUFHO2dCQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNwQyxDQUFDO1lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQ0FBcUMsRUFBRSxPQUFPLEVBQUUsY0FBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFBO1FBRU8sd0JBQWtCLEdBQUc7WUFFekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRXJELHVCQUFVLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO2lCQUN4QyxJQUFJLENBQUMsVUFBQyxRQUFxQjtnQkFFeEIsUUFBUSxDQUFDLGNBQWMsR0FBRztvQkFDdEIsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLO2lCQUMvQixDQUFDO1lBRU4sQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQUVPLHdCQUFrQixHQUFHLFVBQUMsS0FBcUI7WUFFL0MsSUFBSSxpQkFBaUIsR0FBMEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRXJGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFtQjtnQkFFOUIsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztnQkFDM0Msa0JBQWtCLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3BELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFFakUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7O0lBRUwsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQWhERCxDQUEwQixtQkFBUSxHQWdEakM7QUFDRCxpQkFBUyxJQUFJLFdBQVcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7RmlsZVJlYWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9GaWxlUmVhZGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcblxuaW1wb3J0IHtJRXhwbG9yZVBhZ2UsIElFeHBsb3JlVGlsZXMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0lLYXdpSW50ZXJmYWNlc1wiO1xuXG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xubGV0IHBhZ2U6UGFnZTtcblxuY2xhc3MgRXhwbG9yZVBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cbiAgICBsb2FkZWQgPSAoYXJnczpFdmVudERhdGEpID0+IHtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiZXhwbG9yZVwiKTtcbiAgICAgICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0OyBcbiAgICAgICAgdGhpcy5nZXRFeHBsb3JlVGlsZURhdGEoKTsgICBcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuICAgIH1cblxuICAgIG9wZW5leHBsb3JldGlsZXMgPSAoYXJnczpFdmVudERhdGEpOnZvaWQgPT4ge1xuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRpbGVVaWQ6IGFyZ3Mub2JqZWN0W1wiZGF0YS1uYW1lXCJdXG4gICAgICAgIH07XG5cbiAgICAgICAgcGFnZS5zaG93TW9kYWwoXCJwYWdlcy9leHBsb3JlL21vZGFsdGlsZXMvbW9kYWwtdGlsZVwiLCBjb250ZXh0LCBmdW5jdGlvbiAoKSB7fSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRFeHBsb3JlVGlsZURhdGEgPSAoKTp2b2lkID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBteUxheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJleHBsb3JlUmVwZWF0ZXJJZFwiKTtcblxuICAgICAgICBGaWxlUmVhZGVyLlJlYWRKU09OKFwiL2RhdGEvZXhwbG9yZWRhdGEuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOklFeHBsb3JlUGFnZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbXlMYXlvdXQuYmluZGluZ0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGxvcmVUaWxlczogcmVzcG9uc2UuVGlsZXNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUaWxlc1RvR3JpZFZpZXcgPSAodGlsZXM6SUV4cGxvcmVUaWxlc1tdKTp2b2lkID0+IHtcblxuICAgICAgICBsZXQgZXhwbG9yZVJlcGVhdGVySWQ6R3JpZExheW91dCA9IDxHcmlkTGF5b3V0PnBhZ2UuZ2V0Vmlld0J5SWQoXCJleHBsb3JlUmVwZWF0ZXJJZFwiKTtcblxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlOiBJRXhwbG9yZVRpbGVzKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhY2tMYXlvdXQgPSBuZXcgU3RhY2tMYXlvdXQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdGFja0xheW91dC5iYWNrZ3JvdW5kSW1hZ2UgPSB0aWxlLkltYWdlUGF0aDtcbiAgICAgICAgICAgIGN1cnJlbnRTdGFja0xheW91dC5zZXQoXCJkYXRhLXRlY2hcIiwgdGlsZS5OYW1lKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdGFja0xheW91dC5jbGFzc05hbWU9IFwibm9uLXRlY2gtaW1hZ2UgXCIgKyB0aWxlLkNsYXNzTmFtZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhwbG9yZVJlcGVhdGVySWQuYWRkQ2hpbGQoY3VycmVudFN0YWNrTGF5b3V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5leHBvcnQgPSBuZXcgRXhwbG9yZVBhZ2UoKTsiXX0=