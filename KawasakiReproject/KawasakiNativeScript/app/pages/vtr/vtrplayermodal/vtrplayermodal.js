"use strict";
var BasePage_1 = require("../../../shared/BasePage");
var page;
var context;
var vtrVideoId = "1";
var closeCallback;
var VTRPlayerModal = (function (_super) {
    __extends(VTRPlayerModal, _super);
    function VTRPlayerModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onShownModally = function (args) {
            page = args.object;
            context = args.context;
            vtrVideoId = args.context.videoId;
            closeCallback = args.closeCallback;
            _this.setupVTRVideoPlayer();
        };
        _this.closeGuidelineModal = function () {
            closeCallback();
        };
        _this.setupVTRVideoPlayer = function () {
            var webViewVTR = page.getViewById("vtrWebViewId");
            webViewVTR.src = "http://kawasaki.com/ninja650experience/vtr/index.html?videoId=" + vtrVideoId;
        };
        return _this;
    }
    return VTRPlayerModal;
}(BasePage_1.BasePage));
module.exports = new VTRPlayerModal();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnRycGxheWVybW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2dHJwbGF5ZXJtb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscURBQWtEO0FBS2xELElBQUksSUFBSSxDQUFDO0FBQ1QsSUFBSSxPQUFZLENBQUM7QUFDakIsSUFBSSxVQUFVLEdBQVUsR0FBRyxDQUFDO0FBQzVCLElBQUksYUFBdUIsQ0FBQztBQUU1QjtJQUE2QixrQ0FBUTtJQUFyQztRQUFBLHFFQW9CQztRQWxCRyxvQkFBYyxHQUFHLFVBQUMsSUFBc0I7WUFFckMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUVELHlCQUFtQixHQUFHO1lBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQTtRQUVPLHlCQUFtQixHQUFHO1lBQzFCLElBQUksVUFBVSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDMUQsVUFBVSxDQUFDLEdBQUcsR0FBRyxnRUFBZ0UsR0FBRyxVQUFVLENBQUM7UUFDbkcsQ0FBQyxDQUFBOztJQUVMLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBNkIsbUJBQVEsR0FvQnBDO0FBQ0QsaUJBQVMsSUFBSSxjQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQmFzZVBhZ2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBFdmVudERhdGF9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZSwgU2hvd25Nb2RhbGx5RGF0YSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5cclxubGV0IHBhZ2U7XHJcbnZhciBjb250ZXh0OiBhbnk7XHJcbmxldCB2dHJWaWRlb0lkOnN0cmluZyA9IFwiMVwiO1xyXG52YXIgY2xvc2VDYWxsYmFjazogRnVuY3Rpb247XHJcblxyXG5jbGFzcyBWVFJQbGF5ZXJNb2RhbCBleHRlbmRzIEJhc2VQYWdlIHtcclxuXHJcbiAgICBvblNob3duTW9kYWxseSA9IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKTp2b2lkID0+IHtcclxuXHJcbiAgICAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29udGV4dCA9IGFyZ3MuY29udGV4dDtcclxuICAgICAgICB2dHJWaWRlb0lkID0gYXJncy5jb250ZXh0LnZpZGVvSWQ7XHJcbiAgICAgICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnNldHVwVlRSVmlkZW9QbGF5ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUd1aWRlbGluZU1vZGFsID0gKCk6dm9pZCA9PiB7XHJcbiAgICAgICAgY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBWVFJWaWRlb1BsYXllciA9ICgpOnZvaWQgPT4ge1xyXG4gICAgICAgIGxldCB3ZWJWaWV3VlRSOldlYlZpZXcgPSBwYWdlLmdldFZpZXdCeUlkKFwidnRyV2ViVmlld0lkXCIpO1xyXG4gICAgICAgIHdlYlZpZXdWVFIuc3JjID0gXCJodHRwOi8va2F3YXNha2kuY29tL25pbmphNjUwZXhwZXJpZW5jZS92dHIvaW5kZXguaHRtbD92aWRlb0lkPVwiICsgdnRyVmlkZW9JZDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0ID0gbmV3IFZUUlBsYXllck1vZGFsKCk7Il19