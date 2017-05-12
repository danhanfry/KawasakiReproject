"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var vm = new observable_1.Observable();
var VTRPage = (function (_super) {
    __extends(VTRPage, _super);
    function VTRPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "vtr");
            var page = args.object;
            page.bindingContext = vm;
        };
        _this.gotoslidethree = function () {
            vm.set("selectedPage", "settings");
            frame_1.topmost().navigate("pages/settings/settings");
        };
        return _this;
    }
    return VTRPage;
}(BasePage_1.BasePage));
module.exports = new VTRPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnRyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnRyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQXNEO0FBR3RELGtDQUFpQztBQUVqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUUxQjtJQUFzQiwyQkFBUTtJQUE5QjtRQUFBLHFFQWFDO1FBWEcsWUFBTSxHQUFHLFVBQUMsSUFBYztZQUNwQixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVELG9CQUFjLEdBQUc7WUFDYixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuQyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUE7O0lBRUwsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBc0IsbUJBQVEsR0FhN0I7QUFDRCxpQkFBUyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQge3RvcG1vc3R9IGZyb20gXCJ1aS9mcmFtZVwiO1xuXG5sZXQgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG5jbGFzcyBWVFJQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInZ0clwiKTtcbiAgICAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICAgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgZ290b3NsaWRldGhyZWUgPSAoKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInNldHRpbmdzXCIpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5nc1wiKTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBWVFJQYWdlKCk7Il19