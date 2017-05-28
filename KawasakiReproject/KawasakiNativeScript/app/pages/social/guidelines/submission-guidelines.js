"use strict";
var BasePage_1 = require("../../../shared/BasePage");
var observable_array_1 = require("data/observable-array");
var page;
var context;
var closeCallback;
var guidelineRulesArray = new observable_array_1.ObservableArray();
var SubmissionGuidelines = (function (_super) {
    __extends(SubmissionGuidelines, _super);
    function SubmissionGuidelines() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
            page = args.object;
            guidelineRulesArray.push("Please wear a helmet and proper rider attire when in motion");
            guidelineRulesArray.push("Please do not allow anyone without a motorcycle license to operate the vehicle");
            guidelineRulesArray.push("Please ride on paved roads. The Ninja® 650 is not designed for off-road use");
            guidelineRulesArray.push("Never ride under the influence of drugs or alcohol");
            guidelineRulesArray.push("Please keep both hands on the handlebars and focus on the road");
            guidelineRulesArray.push("Please make sure operators are able to reach all vehicle controls");
            guidelineRulesArray.push("If you ride with a passenger, please make sure they wear proper helmets and motorcycle riding attire");
            guidelineRulesArray.push("Please make sure to read and follow the Ninja 650 Owners Manual");
            var myLayout = page.getViewById("rulesListViewId");
            myLayout.bindingContext = {
                socialRulesArray: guidelineRulesArray
            };
        };
        _this.onShownModally = function (args) {
            context = args.context;
            closeCallback = args.closeCallback;
        };
        _this.closeGuidelineModal = function () {
            closeCallback();
        };
        return _this;
    }
    return SubmissionGuidelines;
}(BasePage_1.BasePage));
module.exports = new SubmissionGuidelines();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbi1ndWlkZWxpbmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibWlzc2lvbi1ndWlkZWxpbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxREFBa0Q7QUFFbEQsMERBQXFEO0FBR3JELElBQUksSUFBSSxDQUFDO0FBQ1QsSUFBSSxPQUFZLENBQUM7QUFDakIsSUFBSSxhQUF1QixDQUFDO0FBRTVCLElBQUksbUJBQW1CLEdBQTJCLElBQUksa0NBQWUsRUFBVSxDQUFDO0FBRWhGO0lBQW1DLHdDQUFRO0lBQTNDO1FBQUEscUVBNkJDO1FBM0JHLFlBQU0sR0FBRyxVQUFDLElBQWM7WUFDcEIsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFekIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7WUFDeEYsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdGQUFnRixDQUFDLENBQUM7WUFDM0csbUJBQW1CLENBQUMsSUFBSSxDQUFDLDZFQUE2RSxDQUFDLENBQUM7WUFDeEcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDL0UsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdFQUFnRSxDQUFDLENBQUM7WUFDM0YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDOUYsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHNHQUFzRyxDQUFDLENBQUM7WUFDakksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxDQUFDLENBQUM7WUFFNUYsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxjQUFjLEdBQUc7Z0JBQ3ZCLGdCQUFnQixFQUFFLG1CQUFtQjthQUN4QyxDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBRUQsb0JBQWMsR0FBRyxVQUFDLElBQXNCO1lBQ3BDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQTtRQUVELHlCQUFtQixHQUFHO1lBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTs7SUFFTCxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBN0JELENBQW1DLG1CQUFRLEdBNkIxQztBQUNELGlCQUFTLElBQUksb0JBQW9CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIlxyXG5pbXBvcnQgeyBQYWdlLCBTaG93bk1vZGFsbHlEYXRhIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmxldCBwYWdlO1xyXG52YXIgY29udGV4dDogYW55O1xyXG52YXIgY2xvc2VDYWxsYmFjazogRnVuY3Rpb247XHJcblxyXG5sZXQgZ3VpZGVsaW5lUnVsZXNBcnJheTpPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuY2xhc3MgU3VibWlzc2lvbkd1aWRlbGluZXMgZXh0ZW5kcyBCYXNlUGFnZSB7XHJcblxyXG4gICAgbG9hZGVkID0gKGFyZ3M6RXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJQbGVhc2Ugd2VhciBhIGhlbG1ldCBhbmQgcHJvcGVyIHJpZGVyIGF0dGlyZSB3aGVuIGluIG1vdGlvblwiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJQbGVhc2UgZG8gbm90IGFsbG93IGFueW9uZSB3aXRob3V0IGEgbW90b3JjeWNsZSBsaWNlbnNlIHRvIG9wZXJhdGUgdGhlIHZlaGljbGVcIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiUGxlYXNlIHJpZGUgb24gcGF2ZWQgcm9hZHMuIFRoZSBOaW5qYcKuIDY1MCBpcyBub3QgZGVzaWduZWQgZm9yIG9mZi1yb2FkIHVzZVwiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJOZXZlciByaWRlIHVuZGVyIHRoZSBpbmZsdWVuY2Ugb2YgZHJ1Z3Mgb3IgYWxjb2hvbFwiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJQbGVhc2Uga2VlcCBib3RoIGhhbmRzIG9uIHRoZSBoYW5kbGViYXJzIGFuZCBmb2N1cyBvbiB0aGUgcm9hZFwiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJQbGVhc2UgbWFrZSBzdXJlIG9wZXJhdG9ycyBhcmUgYWJsZSB0byByZWFjaCBhbGwgdmVoaWNsZSBjb250cm9sc1wiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJJZiB5b3UgcmlkZSB3aXRoIGEgcGFzc2VuZ2VyLCBwbGVhc2UgbWFrZSBzdXJlIHRoZXkgd2VhciBwcm9wZXIgaGVsbWV0cyBhbmQgbW90b3JjeWNsZSByaWRpbmcgYXR0aXJlXCIpO1xyXG4gICAgICAgIGd1aWRlbGluZVJ1bGVzQXJyYXkucHVzaChcIlBsZWFzZSBtYWtlIHN1cmUgdG8gcmVhZCBhbmQgZm9sbG93IHRoZSBOaW5qYSA2NTAgT3duZXJzIE1hbnVhbFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG15TGF5b3V0ID0gcGFnZS5nZXRWaWV3QnlJZChcInJ1bGVzTGlzdFZpZXdJZFwiKTtcclxuICAgICAgICAgbXlMYXlvdXQuYmluZGluZ0NvbnRleHQgPSB7XHJcbiAgICAgICAgICAgIHNvY2lhbFJ1bGVzQXJyYXk6IGd1aWRlbGluZVJ1bGVzQXJyYXlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd25Nb2RhbGx5ID0gKGFyZ3M6IFNob3duTW9kYWxseURhdGEpOnZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XHJcbiAgICAgICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUd1aWRlbGluZU1vZGFsID0gKCk6dm9pZCA9PiB7XHJcbiAgICAgICAgY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgPSBuZXcgU3VibWlzc2lvbkd1aWRlbGluZXMoKTsiXX0=