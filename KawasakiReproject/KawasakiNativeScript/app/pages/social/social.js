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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQTJDO0FBQzNDLDhDQUFzRDtBQUd0RCxrQ0FBaUM7QUFFakMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLENBQUM7QUFFVDtJQUF5Qiw4QkFBUTtJQUFqQztRQUFBLHFFQTZCQztRQTNCRyxZQUFNLEdBQUcsVUFBQyxJQUFjO1lBQ3BCLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVPLHlCQUFtQixHQUFHO1lBRzFCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUVwRCxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRTdHLElBQUksU0FBUyxHQUFHLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUU3RCxRQUFRLENBQUMsY0FBYyxHQUFHO29CQUN0QixXQUFXLEVBQUUsU0FBUztpQkFDekIsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBO1FBRUQsb0JBQWMsR0FBRztZQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQTs7SUFFTCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBN0JELENBQXlCLG1CQUFRLEdBNkJoQztBQUNELGlCQUFTLElBQUksVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge0NvbW1vbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21tb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHt0b3Btb3N0fSBmcm9tIFwidWkvZnJhbWVcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmxldCBwYWdlO1xuXG5jbGFzcyBTb2NpYWxQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XG4gICAgICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICBcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwic29jaWFsXCIpO1xuICAgICAgICB0aGlzLnNvY2lhbEZlZWRSZXRyaWV2YWwoKTsgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb2NpYWxGZWVkUmV0cmlldmFsID0gKCk6dm9pZCA9PiB7XG5cblxuICAgICAgICBsZXQgbXlMYXlvdXQgPSBwYWdlLmdldFZpZXdCeUlkKFwic29jaWFsUmVwZWF0ZXJJZFwiKTtcblxuICAgICAgICBmZXRjaChcImh0dHA6Ly9hcHAuZmVlZHNwZWFyLmNvbS9DYW1wYWlnbi8xNi9GZWVkXCIpLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG5cbiAgICAgICAgICAgIHZhciBhbGxTb2NpYWwgPSBDb21tb24uc3ByZWFkZmFzdGVyTm9ybWFsaXplcihyKS5zbGljZSgwLCA1KTtcblxuICAgICAgICAgICAgbXlMYXlvdXQuYmluZGluZ0NvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgc29jaWFsVGlsZXM6IGFsbFNvY2lhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ290b3NsaWRldGhyZWUgPSAoKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInNldHRpbmdzXCIpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5nc1wiKTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBTb2NpYWxQYWdlKCk7Il19