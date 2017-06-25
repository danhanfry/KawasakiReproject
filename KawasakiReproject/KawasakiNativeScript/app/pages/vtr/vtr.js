"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var vm = new observable_1.Observable();
var page;
var VTRPage = (function (_super) {
    __extends(VTRPage, _super);
    function VTRPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "vtr");
            page = args.object;
            page.bindingContext = vm;
        };
        _this.gotoslidethree = function () {
            vm.set("selectedPage", "settings");
            frame_1.topmost().navigate("pages/settings/settings");
        };
        _this.vtrinteractive = function () {
            var context = {
                videoId: 1
            };
            page.showModal("pages/vtr/vtrplayermodal/vtrplayermodal", context, function () { }, true);
        };
        _this.vtrfreeride = function () {
            var context = {
                videoId: 0
            };
            page.showModal("pages/vtr/vtrplayermodal/vtrplayermodal", context, function () { }, true);
        };
        return _this;
    }
    return VTRPage;
}(BasePage_1.BasePage));
module.exports = new VTRPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnRyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnRyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQXNEO0FBR3RELGtDQUFpQztBQUVqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLElBQVMsQ0FBQztBQUVkO0lBQXNCLDJCQUFRO0lBQTlCO1FBQUEscUVBNkJDO1FBM0JHLFlBQU0sR0FBRyxVQUFDLElBQWM7WUFDcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFBO1FBRUQsb0JBQWMsR0FBRztZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQTtRQUVELG9CQUFjLEdBQUc7WUFDYixJQUFJLE9BQU8sR0FBRztnQkFDVixPQUFPLEVBQUUsQ0FBQzthQUNiLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLHlDQUF5QyxFQUFFLE9BQU8sRUFBRSxjQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUE7UUFFRCxpQkFBVyxHQUFHO1lBQ1gsSUFBSSxPQUFPLEdBQUc7Z0JBQ1QsT0FBTyxFQUFFLENBQUM7YUFDYixDQUFDO1lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUUsY0FBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsQ0FBQyxDQUFBOztJQUVMLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUFzQixtQkFBUSxHQTZCN0I7QUFDRCxpQkFBUyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQge3RvcG1vc3R9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xubGV0IHBhZ2U6UGFnZTtcblxuY2xhc3MgVlRSUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcblxuICAgIGxvYWRlZCA9IChhcmdzOkV2ZW50RGF0YSkgPT4ge1xuICAgICAgICB2bS5zZXQoXCJzZWxlY3RlZFBhZ2VcIiwgXCJ2dHJcIik7XG4gICAgICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICAgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgZ290b3NsaWRldGhyZWUgPSAoKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInNldHRpbmdzXCIpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICB2dHJpbnRlcmFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB2aWRlb0lkOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgcGFnZS5zaG93TW9kYWwoXCJwYWdlcy92dHIvdnRycGxheWVybW9kYWwvdnRycGxheWVybW9kYWxcIiwgY29udGV4dCwgZnVuY3Rpb24gKCkge30sIHRydWUpO1xuICAgIH1cblxuICAgIHZ0cmZyZWVyaWRlID0gKCkgPT4ge1xuICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdmlkZW9JZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHBhZ2Uuc2hvd01vZGFsKFwicGFnZXMvdnRyL3Z0cnBsYXllcm1vZGFsL3Z0cnBsYXllcm1vZGFsXCIsIGNvbnRleHQsIGZ1bmN0aW9uICgpIHt9LCB0cnVlKTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBWVFJQYWdlKCk7Il19