"use strict";
var BasePage_1 = require("../../shared/BasePage");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var vm = new observable_1.Observable();
var Commercial = (function (_super) {
    __extends(Commercial, _super);
    function Commercial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "commercial");
            vm.set("text", "This is the home page");
            var page = args.object;
            page.bindingContext = vm;
        };
        _this.gotoslidetwo = function () {
            vm.set("selectedPage", "vtr");
            frame_1.topmost().navigate("pages/vtr/vtr");
        };
        return _this;
    }
    return Commercial;
}(BasePage_1.BasePage));
module.exports = new Commercial();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVyY2lhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lcmNpYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtEQUErQztBQUUvQyw4Q0FBc0Q7QUFHdEQsa0NBQWlDO0FBRWpDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTFCO0lBQXlCLDhCQUFRO0lBQWpDO1FBQUEscUVBY0M7UUFaRyxZQUFNLEdBQUcsVUFBQyxJQUFjO1lBQ3BCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUE7UUFFRCxrQkFBWSxHQUFHO1lBQ1gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQTs7SUFFTCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBeUIsbUJBQVEsR0FjaEM7QUFDRCxpQkFBUyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtDb21tb259IGZyb20gXCIuLi8uLi9zaGFyZWQvQ29tbW9uXCI7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RGF0YX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7dG9wbW9zdH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbmNsYXNzIENvbW1lcmNpYWwgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cbiAgICBsb2FkZWQgPSAoYXJnczpFdmVudERhdGEpID0+IHtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwiY29tbWVyY2lhbFwiKTtcbiAgICAgICAgdm0uc2V0KFwidGV4dFwiLCBcIlRoaXMgaXMgdGhlIGhvbWUgcGFnZVwiKTtcbiAgICAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICAgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgZ290b3NsaWRldHdvID0gKCk6dm9pZCA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInZ0clwiKTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKFwicGFnZXMvdnRyL3Z0clwiKTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBDb21tZXJjaWFsKCk7Il19