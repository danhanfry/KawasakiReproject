"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var vm = new observable_1.Observable();
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gotoslidetwo = function () {
            vm.set("selectedPage", "settings");
            frame_1.topmost().navigate("pages/settings/settings");
        };
        return _this;
    }
    HomePage.prototype.loaded = function (args) {
        vm.set("selectedPage", "home");
        vm.set("text", "This is the home page");
        var page = args.object;
        page.bindingContext = vm;
    };
    return HomePage;
}(BasePage_1.BasePage));
module.exports = new HomePage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW9sb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDhDQUFzRDtBQUd0RCxrQ0FBaUM7QUFFakMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFMUI7SUFBdUIsNEJBQVE7SUFBL0I7UUFBQSxxRUFjQztRQUxHLGtCQUFZLEdBQUc7WUFDWCxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuQyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUE7O0lBRUwsQ0FBQztJQVpHLHlCQUFNLEdBQU4sVUFBTyxJQUFjO1FBQ2pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBT0wsZUFBQztBQUFELENBQUMsQUFkRCxDQUF1QixtQkFBUSxHQWM5QjtBQUNELGlCQUFTLElBQUksUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RGF0YX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7dG9wbW9zdH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkKGFyZ3M6RXZlbnREYXRhKXtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiaG9tZVwiKTtcbiAgICAgICAgdm0uc2V0KFwidGV4dFwiLCBcIlRoaXMgaXMgdGhlIGhvbWUgcGFnZVwiKTtcbiAgICAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICAgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgZ290b3NsaWRldHdvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInNldHRpbmdzXCIpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5nc1wiKTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBIb21lUGFnZSgpOyJdfQ==