"use strict";
var BasePage_1 = require("../../../shared/BasePage");
var page;
var context;
var closeCallback;
var SubmissionGuidelines = (function (_super) {
    __extends(SubmissionGuidelines, _super);
    function SubmissionGuidelines() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = function (args) {
        };
        _this.onShownModally = function (args) {
            page = args.object;
            context = args.context;
            var guidelineRulesArray = new Array();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbi1ndWlkZWxpbmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibWlzc2lvbi1ndWlkZWxpbmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxREFBa0Q7QUFJbEQsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLE9BQVksQ0FBQztBQUNqQixJQUFJLGFBQXVCLENBQUM7QUFFNUI7SUFBbUMsd0NBQVE7SUFBM0M7UUFBQSxxRUFpQ0M7UUEvQkcsWUFBTSxHQUFHLFVBQUMsSUFBYztRQUV4QixDQUFDLENBQUE7UUFFRCxvQkFBYyxHQUFHLFVBQUMsSUFBc0I7WUFFcEMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFdkIsSUFBSSxtQkFBbUIsR0FBaUIsSUFBSSxLQUFLLEVBQVUsQ0FBQztZQUM1RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsNkRBQTZELENBQUMsQ0FBQztZQUN4RixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztZQUMzRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsNkVBQTZFLENBQUMsQ0FBQztZQUN4RyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUMvRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztZQUMzRixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztZQUM5RixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsc0dBQXNHLENBQUMsQ0FBQztZQUNqSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsaUVBQWlFLENBQUMsQ0FBQztZQUU1RixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLGNBQWMsR0FBRztnQkFDdkIsZ0JBQWdCLEVBQUUsbUJBQW1CO2FBQ3hDLENBQUM7WUFFRixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDLENBQUE7UUFFRCx5QkFBbUIsR0FBRztZQUNsQixhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUE7O0lBRUwsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUFtQyxtQkFBUSxHQWlDMUM7QUFDRCxpQkFBUyxJQUFJLG9CQUFvQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0Jhc2VQYWdlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgRXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2UsIFNob3duTW9kYWxseURhdGEgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxubGV0IHBhZ2U7XHJcbnZhciBjb250ZXh0OiBhbnk7XHJcbnZhciBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbjtcclxuXHJcbmNsYXNzIFN1Ym1pc3Npb25HdWlkZWxpbmVzIGV4dGVuZHMgQmFzZVBhZ2Uge1xyXG5cclxuICAgIGxvYWRlZCA9IChhcmdzOkV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd25Nb2RhbGx5ID0gKGFyZ3M6IFNob3duTW9kYWxseURhdGEpOnZvaWQgPT4ge1xyXG5cclxuICAgICAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29udGV4dCA9IGFyZ3MuY29udGV4dDtcclxuXHJcbiAgICAgICAgbGV0IGd1aWRlbGluZVJ1bGVzQXJyYXk6QXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiUGxlYXNlIHdlYXIgYSBoZWxtZXQgYW5kIHByb3BlciByaWRlciBhdHRpcmUgd2hlbiBpbiBtb3Rpb25cIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiUGxlYXNlIGRvIG5vdCBhbGxvdyBhbnlvbmUgd2l0aG91dCBhIG1vdG9yY3ljbGUgbGljZW5zZSB0byBvcGVyYXRlIHRoZSB2ZWhpY2xlXCIpO1xyXG4gICAgICAgIGd1aWRlbGluZVJ1bGVzQXJyYXkucHVzaChcIlBsZWFzZSByaWRlIG9uIHBhdmVkIHJvYWRzLiBUaGUgTmluamHCriA2NTAgaXMgbm90IGRlc2lnbmVkIGZvciBvZmYtcm9hZCB1c2VcIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiTmV2ZXIgcmlkZSB1bmRlciB0aGUgaW5mbHVlbmNlIG9mIGRydWdzIG9yIGFsY29ob2xcIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiUGxlYXNlIGtlZXAgYm90aCBoYW5kcyBvbiB0aGUgaGFuZGxlYmFycyBhbmQgZm9jdXMgb24gdGhlIHJvYWRcIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiUGxlYXNlIG1ha2Ugc3VyZSBvcGVyYXRvcnMgYXJlIGFibGUgdG8gcmVhY2ggYWxsIHZlaGljbGUgY29udHJvbHNcIik7XHJcbiAgICAgICAgZ3VpZGVsaW5lUnVsZXNBcnJheS5wdXNoKFwiSWYgeW91IHJpZGUgd2l0aCBhIHBhc3NlbmdlciwgcGxlYXNlIG1ha2Ugc3VyZSB0aGV5IHdlYXIgcHJvcGVyIGhlbG1ldHMgYW5kIG1vdG9yY3ljbGUgcmlkaW5nIGF0dGlyZVwiKTtcclxuICAgICAgICBndWlkZWxpbmVSdWxlc0FycmF5LnB1c2goXCJQbGVhc2UgbWFrZSBzdXJlIHRvIHJlYWQgYW5kIGZvbGxvdyB0aGUgTmluamEgNjUwIE93bmVycyBNYW51YWxcIik7XHJcblxyXG4gICAgICAgIGxldCBteUxheW91dCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJydWxlc0xpc3RWaWV3SWRcIik7XHJcbiAgICAgICAgIG15TGF5b3V0LmJpbmRpbmdDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICBzb2NpYWxSdWxlc0FycmF5OiBndWlkZWxpbmVSdWxlc0FycmF5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUd1aWRlbGluZU1vZGFsID0gKCk6dm9pZCA9PiB7XHJcbiAgICAgICAgY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgPSBuZXcgU3VibWlzc2lvbkd1aWRlbGluZXMoKTsiXX0=