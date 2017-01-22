var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SocialMobile = (function (_super) {
    __extends(SocialMobile, _super);
    function SocialMobile(windowWidth, windowHeight) {
        var _this = this;
        _super.call(this);
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.Common = new Kawasaki.Common();
        this.calculation = function () {
            $('#socialContainer').width(_this.windowWidth);
            if (_this.Common.isAndroid()) {
                TweenMax.set("#ninjaLifeTxt", {
                    paddingLeft: "20px"
                });
            }
            var socialContainerLeftPosition = (_this.windowWidth / 2) - ($('.social-container').width() / 2);
            TweenMax.set(".social-container", { left: (socialContainerLeftPosition >= 0 ? socialContainerLeftPosition : 0) });
            var bottomPositionOfSocialCommunityText = $('#socialCommunityText').position().top + $('#socialCommunityText').height();
            if (bottomPositionOfSocialCommunityText > $('#socialContainer').position().top) {
                TweenMax.set(".social-container", { top: $(".social-container").position().top + 20 });
            }
            var greenSocialLineWidth = (_this.windowWidth - $('#socialContainer').width() - 165) / 2;
            TweenMax.set(".social-left-line", {
                width: greenSocialLineWidth
            });
            TweenMax.set(".social-right-line", {
                width: greenSocialLineWidth
            });
            document.getElementById('socialCommunityContainer').style.display = 'none';
            var socialIconContainerTop = $('.social-gray-bg').position().top + ($('.social-gray-bg').height() / 2) - ($('#socialCommunityContainer').height() / 2);
            var socialIconContainerLeft = (_this.windowWidth / 2) - ($('#socialCommunityContainer').width() / 2);
            TweenMax.set("#socialCommunityContainer", {
                top: socialIconContainerTop, left: socialIconContainerLeft
            });
            $('.front-social').height($('.front-social').width());
            $('.flippingContainer').height($('#flippingContainer').width());
            $('.flip-container').height($('.flip-container').width());
            var positionTopSocialIcon = ($('.front-social').height() / 2) - ($('.social-icon-grid-middle').height() / 2);
            var positionLeftSocialIcon = ($('.front-social').width() / 2) - ($('.social-icon-grid-middle').width() / 2);
            $('.social-icon-grid-middle').css({
                top: positionTopSocialIcon, left: positionLeftSocialIcon
            });
            var positionTopSocialIconLine = ($('.front-social').height() / 2) + ($('.social-icon-grid-middle').height() / 2);
            $('.social-icon-line-grid-middle').css({ top: positionTopSocialIconLine + 10, left: positionLeftSocialIcon - 14 });
            var bkgGrey = $('.social-gray-bg').height();
            var socialContainment = $('#socialContainer').height();
            var ninjaText = $('#ninjaLifeTxt').outerHeight();
        };
        this.setTweenMechanism = function () {
        };
        this.eventInitialize = function () {
            $(document).on({
                mouseenter: function () {
                    var element = $(this).get(0);
                    var childElementFlipper = $(element).find('.flipper');
                    if (childElementFlipper.length > 0) {
                        var matrix = this.Common.getMatrixOfTransform(childElementFlipper[0]);
                        var transformY = matrix[13] || matrix[5];
                        if (transformY > 0) {
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
            $(document).on('tap', '.front-social, .flip-container-hover', function () {
                var indexOfInfo = parseInt($(this).data('index'), 10);
                if (isNaN(indexOfInfo)) {
                    var theFrontBecauseOfHover = $(this).prev().find(".front-social").get(0);
                    indexOfInfo = parseInt($(theFrontBecauseOfHover).data('index'), 10);
                }
                var socialInfo = this.allSpreadFasterContent[indexOfInfo];
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
                $('#socialModalId').removeClass('fadeOut').addClass('fadeIn');
                this.Common.preventScrolling();
            });
            $('#socialSubmissionGuideLines').on('click', function () {
                document.getElementById('socialGuidelinesModalId').style.display = "block";
                $('.fixed-nav-bar').css('display', 'none');
                this.Common.preventScrolling();
            });
            $('#socialModalId .close-btn').on('click', function () {
                this.Common.allowScrolling();
                $('.fixed-nav-bar').css('display', 'block');
                $('#socialModalId').removeClass('fadeIn').addClass('fadeOut');
            });
            $('#socialGuidelinesModalId .close-btn').on('click', function () {
                this.Common.allowScrolling();
                $('.fixed-nav-bar').css('display', 'block');
                document.getElementById('socialGuidelinesModalId').style.display = "none";
            });
        };
        this.resize = function () {
        };
        this.setScrollMagicMechanism = function () {
        };
    }
    return SocialMobile;
}(ExperienceSlide));
