var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SocialTablet = (function (_super) {
    __extends(SocialTablet, _super);
    function SocialTablet(windowWidth, windowHeight, socialSpredfasterUrl) {
        var _this = _super.call(this) || this;
        _this.windowWidth = windowWidth;
        _this.windowHeight = windowHeight;
        _this.socialSpredfasterUrl = socialSpredfasterUrl;
        _this.Common = new Kawasaki.Common();
        _this.allSpreadFasterContent = [];
        _this.calculation = function () {
            document.getElementById('socialCommunityContainer').style.display = 'block';
            $('#socialContainer').width(_this.windowWidth);
            TweenMax.set("#ninjaLifeTxt", { left: (_this.windowWidth / 2) - ($('#ninjaLifeTxt').width() / 2) });
            TweenMax.set("#socialSubmissionGuideLines", {
                left: (_this.windowWidth / 2) - ($('#socialSubmissionGuideLines').width() / 2),
            });
            var socialContainerLeftPosition = (_this.windowWidth / 2) - ($('.social-container').width() / 2);
            TweenMax.set(".social-container", { left: (socialContainerLeftPosition >= 0 ? socialContainerLeftPosition : 0) });
            var greenSocialLinePositionTop = ($('.social-gray-bg').height() + ($('.social-gray-bg').position().top / 4 * 3) - 80);
            var greenSocialLineWidth = (_this.windowWidth - $('#socialContainer').width() - 165) / 2;
            TweenMax.set(".social-left-line", { top: greenSocialLinePositionTop, width: greenSocialLineWidth });
            TweenMax.set(".social-right-line", { top: greenSocialLinePositionTop, width: greenSocialLineWidth });
            var socialIconContainerTop = $('#socialSubmissionGuideLines').position().top + ($('#socialSubmissionGuideLines').height());
            var socialIconContainerLeft = (_this.windowWidth / 2) - ($('#socialCommunityContainer').width() / 2);
            TweenMax.set("#socialCommunityContainer", { top: socialIconContainerTop + 50, left: socialIconContainerLeft });
            $('.front-social').height($('.front-social').width());
            $('.flippingContainer').height($('#flippingContainer').width());
            $('.flip-container').height($('.flip-container').width());
            var positionTopSocialIcon = ($('.front-social').height() / 2) - ($('.social-icon-grid-middle').height() / 2);
            var positionLeftSocialIcon = ($('.front-social').width() / 2) - ($('.social-icon-grid-middle').width() / 2);
            $('.social-icon-grid-middle').css({ top: positionTopSocialIcon, left: positionLeftSocialIcon });
            var positionTopSocialIconLine = ($('.front-social').height() / 2) + ($('.social-icon-grid-middle').height() / 2);
            $('.social-icon-line-grid-middle').css({ top: positionTopSocialIconLine + 10, left: positionLeftSocialIcon - 10 });
            var communityText = $('#socialCommunityText').height();
            var socialContainment = $('#socialContainer').height();
            var ninjaText = $('#ninjaLifeTxt').outerHeight();
            var socialIconContainer = $('.social-community-social-icons-container').height();
            $('#social').height(communityText + socialContainment + ninjaText + (socialIconContainer * 2)).width(_this.windowWidth);
            TweenMax.set("#ninjaLifeTxt", { y: 50 });
            TweenMax.set("#socialSubmissionGuideLines", { y: 50 });
            TweenMax.set("#twitterSocialIconId", { y: 50 });
            TweenMax.set("#instagramSocialIconId", { y: 50 });
            _this.setupSocialFeedRetrieval();
        };
        _this.setTweenMechanism = function () {
        };
        _this.eventInitialize = function () {
            var that = _this;
            $(document).on({
                mouseenter: function () {
                    var element = $(this).get(0);
                    var childElementFlipper = $(element).find('.flipper');
                    if (childElementFlipper.length > 0) {
                        var matrix = that.Common.getMatrixOfTransform(childElementFlipper[0]);
                        var transformY = matrix[13] || matrix[5];
                        if (parseInt(transformY, 10) > 0) {
                            return;
                        }
                    }
                    var currentContainerOfNetworkInfo = $(element).find('.front-social');
                    var hoverContainerForSocial = document.createElement("div");
                    var networkSpecificClass = "";
                    if (currentContainerOfNetworkInfo.length > 0) {
                        var networkInfo = currentContainerOfNetworkInfo[0];
                        var network = $(networkInfo).data('network');
                        if (network === "twitter") {
                            networkSpecificClass = "flip-container-hover-twitter";
                        }
                        else if (network === "instagram") {
                            networkSpecificClass = "flip-container-hover-instagram";
                        }
                    }
                    hoverContainerForSocial.className = "flip-container-hover" + " " + networkSpecificClass;
                    hoverContainerForSocial.id = "socialHoverId";
                    element.appendChild(hoverContainerForSocial);
                    var socialGridBackground = $(this).find('.social-grid-bkg');
                    if (socialGridBackground.length > 0) {
                        TweenMax.to(socialGridBackground[0], 0.5, { css: { className: "+=social-grid-bkg-no-opacity" } });
                    }
                    $('#socialHoverId').css('border-width', Math.round($(element).width() / 28));
                },
                mouseleave: function () {
                    $(this).children().remove("#socialHoverId");
                    var socialGridBackground = $(this).find('.social-grid-bkg');
                    if (socialGridBackground.length > 0) {
                        TweenMax.to(socialGridBackground[0], 0.5, { css: { className: "-=social-grid-bkg-no-opacity" } });
                    }
                }
            }, ".flip-container ");
            $(document).on('click', '.front-social, .flip-container-hover', function () {
                var indexOfInfo = parseInt($(this).data('index'), 10);
                if (isNaN(indexOfInfo)) {
                    var theFrontBecauseOfHover = $(this).prev().find(".front-social").get(0);
                    indexOfInfo = parseInt($(theFrontBecauseOfHover).data('index'), 10);
                }
                var socialInfo = that.allSpreadFasterContent[indexOfInfo];
                var imageContainer = document.getElementById('modalContentImage');
                imageContainer.style.cssText = "background: url('" + socialInfo.imageUrl + "') no-repeat; background-size: cover; background-position: center center";
                var userInfo = document.createElement('div');
                userInfo.id = "modalUserInfoId";
                userInfo.className = "modal-user-info";
                userInfo.innerHTML = socialInfo.user;
                var socialNetworkIcon = document.createElement('img');
                if (socialInfo.network === "twitter") {
                    socialNetworkIcon.src = "assets/slide4/icon_twitter.svg";
                }
                else if (socialInfo.network === "instagram") {
                    socialNetworkIcon.src = "assets/slide4/icon_instagram.svg";
                }
                var socialRectangle = document.createElement('div');
                socialRectangle.className = "social-rectangle";
                var textInfo = document.createElement('div');
                textInfo.id = "modalTextInfoId";
                textInfo.className = "modal-text-info";
                textInfo.innerHTML = socialInfo.caption;
                var userContentText = document.createElement('div');
                userContentText.className = "modal-social-container";
                userContentText.appendChild(userInfo);
                userContentText.appendChild(socialRectangle);
                userContentText.appendChild(textInfo);
                var userContentInfo = document.getElementById('modalContentInfo');
                while (userContentInfo.firstChild) {
                    userContentInfo.removeChild(userContentInfo.firstChild);
                }
                userContentInfo.appendChild(socialNetworkIcon);
                userContentInfo.appendChild(userContentText);
                if (socialInfo.network === "twitter") {
                    $('#modalContentContainer').addClass('twitter-color').removeClass('instagram-color');
                }
                else if (socialInfo.network === "instagram") {
                    $('#modalContentContainer').removeClass('twitter-color').addClass('instagram-color');
                }
                $('#socialModalId').removeClass('fade-out-modal');
                document.getElementById('socialModalId').style.display = 'block';
                that.Common.preventScrolling();
            });
            $('#socialSubmissionGuideLines').on('click', function () {
                document.getElementById('socialGuidelinesModalId').style.display = "block";
                $('.fixed-nav-bar').css('display', 'none');
                _this.Common.preventScrolling();
            });
            $('#socialModalId .close-btn').on('click', function () {
                _this.Common.allowScrolling();
                $('.fixed-nav-bar').css('display', 'block');
                $('#socialModalId').removeClass('fadeIn').addClass('fadeOut');
            });
            $('#socialGuidelinesModalId .close-btn').on('click', function () {
                _this.Common.allowScrolling();
                $('.fixed-nav-bar').css('display', 'block');
                document.getElementById('socialGuidelinesModalId').style.display = "none";
            });
        };
        _this.resize = function () {
        };
        _this.setScrollMagicMechanism = function () {
        };
        _this.setupSocialFeedRetrieval = function () {
            Spredfast(_this.socialSpredfasterUrl, function (result) {
                var maxShowSocial = 20;
                var currentRow = 1;
                for (var i = 0; i < maxShowSocial; i++) {
                    var socialInfo = result[i];
                    _this.allSpreadFasterContent.push(socialInfo);
                    var flipFront = document.createElement("div");
                    flipFront.className = "front-social";
                    flipFront.style.cssText = "background: url('" + socialInfo.imageUrl + "') no-repeat; background-size: cover;";
                    flipFront.setAttribute('data-index', i.toString());
                    flipFront.setAttribute('data-network', socialInfo.network);
                    var socialIconMiddleGrid = document.createElement('img');
                    socialIconMiddleGrid.className = "social-icon-grid-middle";
                    if (socialInfo.network === "twitter") {
                        socialIconMiddleGrid.src = "assets/slide4/icon_twitter.svg";
                    }
                    else if (socialInfo.network === "instagram") {
                        socialIconMiddleGrid.src = "assets/slide4/icon_instagram.svg";
                    }
                    var backgroundSocialOpactity = document.createElement('div');
                    backgroundSocialOpactity.className = "social-grid-bkg";
                    var socialIconLineMiddleGrid = document.createElement('div');
                    socialIconLineMiddleGrid.className = "social-icon-line-grid-middle";
                    if (socialInfo.network === "twitter") {
                        socialIconLineMiddleGrid.className += " twitter-color";
                    }
                    else if (socialInfo.network === "instagram") {
                        socialIconLineMiddleGrid.className += " instagram-color";
                    }
                    flipFront.appendChild(backgroundSocialOpactity);
                    flipFront.appendChild(socialIconMiddleGrid);
                    flipFront.appendChild(socialIconLineMiddleGrid);
                    var flippingContainer = document.createElement("div");
                    flippingContainer.className = "flipper";
                    flippingContainer.id = "flippingContainer";
                    flippingContainer.appendChild(flipFront);
                    var flipContainer = document.createElement("div");
                    flipContainer.className = "flip-container";
                    flipContainer.setAttribute('data-rowIndex', currentRow.toString());
                    if ((i + 1) % 4 == 0) {
                        currentRow += 1;
                    }
                    flipContainer.appendChild(flippingContainer);
                    var socialContainerDiv = document.getElementById('socialContainer');
                    socialContainerDiv.appendChild(flipContainer);
                }
                $('.front-social').height($('.front-social').width());
                $('.flippingContainer').height($('#flippingContainer').width());
                $('.flip-container').height($('.flip-container').width());
                var positionTopSocialIcon = ($('.front-social').height() / 2) - ($('.social-icon-grid-middle').height() / 2);
                var positionLeftSocialIcon = ($('.front-social').width() / 2) - ($('.social-icon-grid-middle').width() / 2);
                $('.social-icon-grid-middle').css({ top: positionTopSocialIcon, left: positionLeftSocialIcon });
                var positionTopSocialIconLine = ($('.front-social').height() / 2) + ($('.social-icon-grid-middle').height() / 2);
                $('.social-icon-line-grid-middle').css({ top: positionTopSocialIconLine + 10, left: positionLeftSocialIcon - 10 });
                var communityText = $('#socialCommunityText').height();
                var socialContainment = $('#socialContainer').height();
                var ninjaText = $('#ninjaLifeTxt').outerHeight();
                var socialIconContainer = $('.social-community-social-icons-container').height();
                var bkgGrey = $('.social-gray-bg');
                $('#social').height(bkgGrey.position().top + bkgGrey.height() + socialContainment + ninjaText).width(_this.windowWidth);
            });
        };
        return _this;
    }
    return SocialTablet;
}(ExperienceSlide));
