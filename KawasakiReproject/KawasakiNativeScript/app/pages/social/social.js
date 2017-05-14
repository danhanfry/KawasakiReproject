"use strict";
var BasePage_1 = require("../../shared/BasePage");
var Common_1 = require("../../shared/Common");
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var vm = new observable_1.Observable();
var page;
var SocialPage = (function (_super) {
    __extends(SocialPage, _super);
    function SocialPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            page = args.object;
            vm.set("selectedPage", "social");
            _this.socialFeedRetrieval();
            page.bindingContext = vm;
        };
        _this.socialFeedRetrieval = function () {
            var myLayout = page.getViewById("socialRepeaterId");
            fetch("http://app.feedspear.com/Campaign/16/Feed").then(function (response) { return response.json(); }).then(function (r) {
                var allSocial = Common_1.Common.spreadfasterNormalizer(r).slice(0, 5);
                myLayout.bindingContext = {
                    socialTiles: allSocial
                };
            });
        };
        _this.gotoslidethree = function () {
            vm.set("selectedPage", "settings");
            frame_1.topmost().navigate("pages/settings/settings");
        };
        return _this;
    }
    return SocialPage;
}(BasePage_1.BasePage));
module.exports = new SocialPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQTJDO0FBQzNDLDhDQUFzRDtBQUd0RCxrQ0FBaUM7QUFFakMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLENBQUM7QUFFVDtJQUF5Qiw4QkFBUTtJQUFqQztRQUFBLHFFQTZCQztRQTNCRyxZQUFNLEdBQUcsVUFBQyxJQUFjO1lBQ3BCLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVELHlCQUFtQixHQUFHO1lBR2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUVwRCxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRTdHLElBQUksU0FBUyxHQUFHLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUU3RCxRQUFRLENBQUMsY0FBYyxHQUFHO29CQUN0QixXQUFXLEVBQUUsU0FBUztpQkFDekIsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBO1FBRUQsb0JBQWMsR0FBRztZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQTs7SUFFTCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBN0JELENBQXlCLG1CQUFRLEdBNkJoQztBQUNELGlCQUFTLElBQUksVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge0NvbW1vbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21tb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHt0b3Btb3N0fSBmcm9tIFwidWkvZnJhbWVcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmxldCBwYWdlO1xuXG5jbGFzcyBTb2NpYWxQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XG4gICAgICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICBcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwic29jaWFsXCIpO1xuICAgICAgICB0aGlzLnNvY2lhbEZlZWRSZXRyaWV2YWwoKTsgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgc29jaWFsRmVlZFJldHJpZXZhbCA9ICgpOnZvaWQgPT4ge1xuXG5cbiAgICAgICAgbGV0IG15TGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInNvY2lhbFJlcGVhdGVySWRcIik7XG5cbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBwLmZlZWRzcGVhci5jb20vQ2FtcGFpZ24vMTYvRmVlZFwiKS50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSkudGhlbihmdW5jdGlvbiAocikge1xuXG4gICAgICAgICAgICB2YXIgYWxsU29jaWFsID0gQ29tbW9uLnNwcmVhZGZhc3Rlck5vcm1hbGl6ZXIocikuc2xpY2UoMCwgNSk7XG5cbiAgICAgICAgICAgIG15TGF5b3V0LmJpbmRpbmdDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIHNvY2lhbFRpbGVzOiBhbGxTb2NpYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvdG9zbGlkZXRocmVlID0gKCkgPT4ge1xuICAgICAgICB2bS5zZXQoXCJzZWxlY3RlZFBhZ2VcIiwgXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKFwicGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3NcIik7XG4gICAgfVxuXG59XG5leHBvcnQgPSBuZXcgU29jaWFsUGFnZSgpOyJdfQ==