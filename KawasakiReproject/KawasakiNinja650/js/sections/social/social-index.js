var Kawasaki;
(function (Kawasaki) {
    var NinjaSixFifty;
    (function (NinjaSixFifty) {
        var SocialCommunity = (function () {
            function SocialCommunity() {
                var _this = this;
                this.Common = new Kawasaki.Common();
                this.socialSpredfasterUrl = "";
                this.calculation = function () {
                    var deviceLayout;
                    if (_this.Common.isMobile()) {
                        deviceLayout = new SocialMobile(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    else if (_this.Common.isTablet()) {
                        deviceLayout = new SocialTablet(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    else {
                        deviceLayout = new SocialDesktop(_this.windowDimensions.width, _this.windowDimensions.height, _this.socialSpredfasterUrl);
                    }
                    deviceLayout.calculation();
                    deviceLayout.eventInitialize();
                    deviceLayout.setScrollMagicMechanism();
                };
                this.windowDimensions = this.Common.elementDimensions(window);
                this.socialSpredfasterUrl = location.protocol + "//app.feedspear.com/Campaign/16/Feed";
            }
            return SocialCommunity;
        }());
        NinjaSixFifty.SocialCommunity = SocialCommunity;
    })(NinjaSixFifty = Kawasaki.NinjaSixFifty || (Kawasaki.NinjaSixFifty = {}));
})(Kawasaki || (Kawasaki = {}));
