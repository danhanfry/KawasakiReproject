var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var SocialCommunity = (function () {
            function SocialCommunity() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.NinjaCommon = new Kawasaki.NinjaCommon();
                this.socialSpredfasterUrl = "";
                this.calculation = function () {
                    if (_this.Common.isMobile()) {
                        _this.deviceLayout = new SocialMobile(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    else if (_this.Common.isTablet()) {
                        _this.deviceLayout = new SocialTablet(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    else {
                        _this.deviceLayout = new SocialDesktop(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    _this.deviceLayout.calculation();
                    _this.deviceLayout.eventInitialize();
                    _this.deviceLayout.setScrollMagicMechanism();
                };
                this.recalculation = function () {
                    _this.deviceLayout.calculation();
                };
                this.windowDimensions = this.NinjaCommon.elementDimensions(window);
                this.socialSpredfasterUrl = location.protocol + "//app.feedspear.com/Campaign/16/Feed";
            }
            return SocialCommunity;
        }());
        NinjaSixFifty.SocialCommunity = SocialCommunity;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
