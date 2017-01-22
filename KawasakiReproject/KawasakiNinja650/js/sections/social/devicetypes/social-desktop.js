var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SocialDesktop = (function (_super) {
    __extends(SocialDesktop, _super);
    function SocialDesktop(windowWidth, windowHeight) {
        var _this = this;
        _super.call(this);
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.Common = new Kawasaki.Common();
        this.allSpreadFasterContent = [];
        this.calculation = function () {
            document.getElementById('socialCommunityContainer').style.display = 'block';
            if (_this.windowWidth < 1440) {
                $('#socialContainer').width(_this.windowWidth);
            }
            else {
                var maxTiles = Math.floor(_this.windowWidth / 360);
                $('#socialContainer').width(360 * (maxTiles > 4 ? 4 : maxTiles));
            }
            var communityTxtHalfWidth = $('#socialCommunityText').width() / 2;
            TweenMax.set(".social-community-txt", { left: (_this.windowWidth / 2) - communityTxtHalfWidth });
            TweenMax.set("#ninjaLifeTxt", { left: (_this.windowWidth / 2) - ($('#ninjaLifeTxt').width() / 2) });
            TweenMax.set("#socialSubmissionGuideLines", {
                left: (_this.windowWidth / 2) - ($('#socialSubmissionGuideLines').width() / 2),
            });
            var socialContainerLeftPosition = (_this.windowWidth / 2) - ($('.social-container').width() / 2);
            TweenMax.set(".social-container", { left: (socialContainerLeftPosition >= 0 ? socialContainerLeftPosition : 0) });
            var greenSocialLinePositionTop = ($('.social-gray-bg').height() + ($('.social-gray-bg').position().top / 4 * 3));
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
            _this.setTweenMechanism();
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
            var scene = new ScrollMagic.Scene({
                triggerElement: "#social",
                offset: 100
            })
                .setTween(_this.getSocialTween())
                .addTo(controller);
            var scene = new ScrollMagic.Scene({
                triggerElement: ".social-gray-bg",
                triggerHook: 1,
                duration: 1
            })
                .setTween(_this.getSocialBkgTween())
                .addTo(controller);
            var scrambleScene = new ScrollMagic.Scene({
                triggerElement: "#social",
                offset: 100
            })
                .setTween(_this.getSocialScramble())
                .addTo(controller);
        };
        this.getSocialTween = function () {
            return new TimelineMax()
                .to('#ninjaLifeTxt', 1, { y: 0, autoAlpha: 1, ease: Linear.easeInOut })
                .to('#socialSubmissionGuideLines', 1, { y: 0, autoAlpha: 1, ease: Linear.easeInOut }, "-=1")
                .to("#twitterSocialIconId", 0.7, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.7")
                .to("#instagramSocialIconId", 0.7, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.6");
        };
        this.getSocialBkgTween = function () {
            return new TimelineMax()
                .to('.social-gray-bg', 0.5, { y: -150, ease: Linear.easeOut });
        };
        this.getSocialScramble = function () {
            return new TimelineMax()
                .to("#socialCommunityText", 1.5, { opacity: 0.5 })
                .to("#communitySocialBackgroundId", 1.5, { scrambleText: { text: "COMMUNITY", chars: "upperCase", revealDelay: 0.5, tweenLength: false, ease: Linear.easeNone } }, "-=2.0");
        };
    }
    return SocialDesktop;
}(ExperienceSlide));
