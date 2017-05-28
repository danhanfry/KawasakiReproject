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
        _this.opensubmissionguidelines = function () {
            page.showModal("pages/social/guidelines/submission-guidelines", "context", function () { }, true);
        };
        _this.gotoslidethree = function () {
            vm.set("selectedPage", "settings");
            frame_1.topmost().navigate("pages/settings/settings");
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
        return _this;
    }
    return SocialPage;
}(BasePage_1.BasePage));
module.exports = new SocialPage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrREFBK0M7QUFDL0MsOENBQTJDO0FBQzNDLDhDQUFzRDtBQUd0RCxrQ0FBaUM7QUFFakMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLENBQUM7QUFFVDtJQUF5Qiw4QkFBUTtJQUFqQztRQUFBLHFFQWlDQztRQS9CRyxZQUFNLEdBQUcsVUFBQyxJQUFjO1lBQ3BCLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQTtRQUVELDhCQUF3QixHQUFHO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsK0NBQStDLEVBQUUsU0FBUyxFQUFFLGNBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JHLENBQUMsQ0FBQTtRQUVELG9CQUFjLEdBQUc7WUFDYixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuQyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUE7UUFFTyx5QkFBbUIsR0FBRztZQUcxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFcEQsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUU3RyxJQUFJLFNBQVMsR0FBRyxlQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFN0QsUUFBUSxDQUFDLGNBQWMsR0FBRztvQkFDdEIsV0FBVyxFQUFFLFNBQVM7aUJBQ3pCLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTs7SUFFTCxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBakNELENBQXlCLG1CQUFRLEdBaUNoQztBQUNELGlCQUFTLElBQUksVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XG5pbXBvcnQge0NvbW1vbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21tb25cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7SW1hZ2V9IGZyb20gXCJ1aS9pbWFnZVwiO1xuaW1wb3J0IHt0b3Btb3N0fSBmcm9tIFwidWkvZnJhbWVcIjtcblxubGV0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbmxldCBwYWdlO1xuXG5jbGFzcyBTb2NpYWxQYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XG4gICAgICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDsgICBcbiAgICAgICAgdm0uc2V0KFwic2VsZWN0ZWRQYWdlXCIsIFwic29jaWFsXCIpO1xuICAgICAgICB0aGlzLnNvY2lhbEZlZWRSZXRyaWV2YWwoKTsgIFxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgfVxuXG4gICAgb3BlbnN1Ym1pc3Npb25ndWlkZWxpbmVzID0gKCk6dm9pZCA9PiB7XG4gICAgICAgIHBhZ2Uuc2hvd01vZGFsKFwicGFnZXMvc29jaWFsL2d1aWRlbGluZXMvc3VibWlzc2lvbi1ndWlkZWxpbmVzXCIsIFwiY29udGV4dFwiLCBmdW5jdGlvbiAoKSB7fSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ290b3NsaWRldGhyZWUgPSAoKSA9PiB7XG4gICAgICAgIHZtLnNldChcInNlbGVjdGVkUGFnZVwiLCBcInNldHRpbmdzXCIpO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoXCJwYWdlcy9zZXR0aW5ncy9zZXR0aW5nc1wiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvY2lhbEZlZWRSZXRyaWV2YWwgPSAoKTp2b2lkID0+IHtcblxuXG4gICAgICAgIGxldCBteUxheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2NpYWxSZXBlYXRlcklkXCIpO1xuXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2FwcC5mZWVkc3BlYXIuY29tL0NhbXBhaWduLzE2L0ZlZWRcIikudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcblxuICAgICAgICAgICAgdmFyIGFsbFNvY2lhbCA9IENvbW1vbi5zcHJlYWRmYXN0ZXJOb3JtYWxpemVyKHIpLnNsaWNlKDAsIDUpO1xuXG4gICAgICAgICAgICBteUxheW91dC5iaW5kaW5nQ29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBzb2NpYWxUaWxlczogYWxsU29jaWFsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbmV4cG9ydCA9IG5ldyBTb2NpYWxQYWdlKCk7Il19