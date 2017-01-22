/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="../../../../../scripts/typings/scrollmagic.d.ts" />

class SocialMobile extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		/*per tile is 360 width and by default there are 4 tiles so 1440*/
		$('#socialContainer').width(this.windowWidth);

		/*TweenMax.set("#ninjaLifeTxt", { left: (windowWidth / 2) - ($('#ninjaLifeTxt').width() / 2) });*/

		if (this.Common.isAndroid()) {
			TweenMax.set("#ninjaLifeTxt", {
				paddingLeft: "20px"
			});
		}

		var socialContainerLeftPosition = (this.windowWidth / 2) - ($('.social-container').width() / 2);
		TweenMax.set(".social-container", { left: (socialContainerLeftPosition >= 0 ? socialContainerLeftPosition : 0) });

		var bottomPositionOfSocialCommunityText = $('#socialCommunityText').position().top + $('#socialCommunityText').height();
		if (bottomPositionOfSocialCommunityText > $('#socialContainer').position().top) {
			TweenMax.set(".social-container", { top: $(".social-container").position().top + 20 });
		}

		var greenSocialLineWidth = (this.windowWidth - $('#socialContainer').width() - 165) / 2;
		TweenMax.set(".social-left-line", {
			width: greenSocialLineWidth
		});
		TweenMax.set(".social-right-line", {
			width: greenSocialLineWidth
		});

		document.getElementById('socialCommunityContainer').style.display = 'none';

		var socialIconContainerTop = $('.social-gray-bg').position().top + ($('.social-gray-bg').height() / 2) - ($('#socialCommunityContainer').height() / 2);
		var socialIconContainerLeft = (this.windowWidth / 2) - ($('#socialCommunityContainer').width() / 2);
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

	}

	setTweenMechanism = (): void => {

	}

	eventInitialize = (): void => {
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
					var network = $(networkInfo).data('network')
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

			var socialInfo = this.allSpreadFasterContent[indexOfInfo]

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

			/*show modal*/
			$('#socialModalId').removeClass('fadeOut').addClass('fadeIn');

			/*prevent scrolling*/
			this.Common.preventScrolling();
		});

		$('#socialSubmissionGuideLines').on('click', function () {
			/*show modal*/
			document.getElementById('socialGuidelinesModalId').style.display = "block";

			$('.fixed-nav-bar').css('display', 'none');

			/*prevent scrolling*/
			this.Common.preventScrolling();
		});

		$('#socialModalId .close-btn').on('click', function () {
			/*allow scrolling again*/
			this.Common.allowScrolling();

			$('.fixed-nav-bar').css('display', 'block');

			/*hide modal*/
			$('#socialModalId').removeClass('fadeIn').addClass('fadeOut');

		});

		$('#socialGuidelinesModalId .close-btn').on('click', function () {
			/*allow scrolling again*/
			this.Common.allowScrolling();
			$('.fixed-nav-bar').css('display', 'block');

			/*hide modal*/
			document.getElementById('socialGuidelinesModalId').style.display = "none";
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {

	}

}