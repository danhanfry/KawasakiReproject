"use strict";
var BasePage_1 = require("../../shared/BasePage");
var FileReader_1 = require("../../shared/FileReader");
var observable_1 = require("data/observable");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLHNEQUFtRDtBQUNuRCw4Q0FBc0Q7QUFPdEQsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLENBQUM7QUFFVDtJQUEyQixnQ0FBUTtJQUFuQztRQUFBLHFFQTJCQztRQXpCRyxZQUFNLEdBQUcsVUFBQyxJQUFjO1lBQ3BCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVPLHlCQUFtQixHQUFHO1lBRTFCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUVuRCx1QkFBVSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQVMsUUFBc0I7Z0JBQ2pDLHdDQUF3QztnQkFFeEMscURBQXFEO2dCQUNyRCxRQUFRLENBQUMsY0FBYyxHQUFHO29CQUN0QixpQkFBaUIsRUFBRSxRQUFRLENBQUMsWUFBWTtpQkFDM0MsQ0FBQztZQUVOLENBQUMsRUFBRSxVQUFTLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUE7O0lBRUwsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUEyQixtQkFBUSxHQTJCbEM7QUFDRCxpQkFBUyxJQUFJLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9CYXNlUGFnZVwiO1xuaW1wb3J0IHtGaWxlUmVhZGVyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0ZpbGVSZWFkZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHt0b3Btb3N0fSBmcm9tIFwidWkvZnJhbWVcIjtcblxuaW1wb3J0IHtJUmVzZWFyY2hQYWdlLCBJUmVzZWFyY2hMaW5rLCBJUmVzZWFyY2hQYWdlTGlua30gZnJvbSBcIi4uLy4uL21vZGVscy9JS2F3aUludGVyZmFjZXNcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmxldCBwYWdlO1xuXG5jbGFzcyBSZXNlYXJjaFBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG5cbiAgICBsb2FkZWQgPSAoYXJnczpFdmVudERhdGEpID0+IHtcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwicmVzZWFyY2hcIik7XG4gICAgICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgIFxuICAgICAgICB0aGlzLmdldFJlc2VhcmNoVG9vbERhdGEoKTsgICBcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVzZWFyY2hUb29sRGF0YSA9ICgpOnZvaWQgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IG15TGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInRvb2xzUmVwZWF0ZXJJZFwiKTtcblxuICAgICAgICBGaWxlUmVhZGVyLlJlYWRKU09OKFwiL2RhdGEvcmVzZWFyY2hkYXRhLmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlOklSZXNlYXJjaFBhZ2Upe1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuUmVzZWFyY2hQYWdlKSk7XG4gICAgICAgICAgICAgICAgbXlMYXlvdXQuYmluZGluZ0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2VhcmNoVG9vbHNEYXRhOiByZXNwb25zZS5SZXNlYXJjaFBhZ2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuZXhwb3J0ID0gbmV3IFJlc2VhcmNoUGFnZSgpOyJdfQ==