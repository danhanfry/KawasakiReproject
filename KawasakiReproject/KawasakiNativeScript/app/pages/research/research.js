"use strict";
var BasePage_1 = require("../../shared/BasePage");
var FileReader_1 = require("../../shared/FileReader");
var observable_1 = require("data/observable");
var utilities = require("utils/utils");
var vm = new observable_1.Observable();
var page;
var ResearchPage = (function (_super) {
    __extends(ResearchPage, _super);
    function ResearchPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            vm.set("selectedPage", "research");
            page = args.object;
            _this.getResearchToolData();
            page.bindingContext = vm;
        };
        _this.openLinkToBrowser = function (args) {
            var currentResearchLink = args.object;
            utilities.openUrl(currentResearchLink["data-href"]);
        };
        _this.getResearchToolData = function () {
            var myLayout = page.getViewById("toolsRepeaterId");
            FileReader_1.FileReader.ReadJSON("/data/researchdata.json")
                .then(function (response) {
                //console.log(JSON.stringify(response));
                //console.log(JSON.stringify(response.ResearchPage));
                myLayout.bindingContext = {
                    researchToolsData: response.ResearchPage
                };
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        };
        return _this;
    }
    return ResearchPage;
}(BasePage_1.BasePage));
module.exports = new ResearchPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLHNEQUFtRDtBQUNuRCw4Q0FBc0Q7QUFJdEQsdUNBQXlDO0FBSXpDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksSUFBSSxDQUFDO0FBRVQ7SUFBMkIsZ0NBQVE7SUFBbkM7UUFBQSxxRUFnQ0M7UUE5QkcsWUFBTSxHQUFHLFVBQUMsSUFBYztZQUNwQixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUE7UUFFRCx1QkFBaUIsR0FBRyxVQUFDLElBQUk7WUFDckIsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RDLFNBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUE7UUFFTyx5QkFBbUIsR0FBRztZQUUxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFbkQsdUJBQVUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxVQUFTLFFBQXNCO2dCQUNqQyx3Q0FBd0M7Z0JBRXhDLHFEQUFxRDtnQkFDckQsUUFBUSxDQUFDLGNBQWMsR0FBRztvQkFDdEIsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLFlBQVk7aUJBQzNDLENBQUM7WUFFTixDQUFDLEVBQUUsVUFBUyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFBOztJQUVMLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBMkIsbUJBQVEsR0FnQ2xDO0FBQ0QsaUJBQVMsSUFBSSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcbmltcG9ydCB7RmlsZVJlYWRlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9GaWxlUmVhZGVyXCI7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RGF0YX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7dG9wbW9zdH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5cbmltcG9ydCB7SVJlc2VhcmNoUGFnZSwgSVJlc2VhcmNoTGluaywgSVJlc2VhcmNoUGFnZUxpbmt9IGZyb20gXCIuLi8uLi9tb2RlbHMvSUthd2lJbnRlcmZhY2VzXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5sZXQgcGFnZTtcblxuY2xhc3MgUmVzZWFyY2hQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInJlc2VhcmNoXCIpO1xuICAgICAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7ICBcbiAgICAgICAgdGhpcy5nZXRSZXNlYXJjaFRvb2xEYXRhKCk7ICAgXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbiAgICB9XG5cbiAgICBvcGVuTGlua1RvQnJvd3NlciA9IChhcmdzKTp2b2lkID0+IHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNlYXJjaExpbmsgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgdXRpbGl0aWVzLm9wZW5VcmwoY3VycmVudFJlc2VhcmNoTGlua1tcImRhdGEtaHJlZlwiXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNlYXJjaFRvb2xEYXRhID0gKCk6dm9pZCA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbXlMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwidG9vbHNSZXBlYXRlcklkXCIpO1xuXG4gICAgICAgIEZpbGVSZWFkZXIuUmVhZEpTT04oXCIvZGF0YS9yZXNlYXJjaGRhdGEuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2U6SVJlc2VhcmNoUGFnZSl7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5SZXNlYXJjaFBhZ2UpKTtcbiAgICAgICAgICAgICAgICBteUxheW91dC5iaW5kaW5nQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2hUb29sc0RhdGE6IHJlc3BvbnNlLlJlc2VhcmNoUGFnZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG5leHBvcnQgPSBuZXcgUmVzZWFyY2hQYWdlKCk7Il19