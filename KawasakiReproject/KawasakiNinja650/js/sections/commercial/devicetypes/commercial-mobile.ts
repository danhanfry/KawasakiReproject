/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class CommercialMobile extends ExperienceSlide {

	private tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		const ninjaLogoYear: JQuery = $('#commericalNinjaNameYearId');
		const ninjaLogoName: JQuery = $('#commericalNinjaNameId');
		const ninjaDescriptionElement: JQuery = $('#commericalNinjaLifeDescriptionId');
		const ninjaPlayArrow: JQuery = $('#commericalNinjaLifePlayArrow');
		const ninjaGreenLine: JQuery = $('#commericalNinjaLifeGreenHrId');
		const mobileTabletStaticImgContainer: HTMLElement = document.getElementById('mobileTabletStaticImgId');
		const ninjaPlayButtonSvg: JQuery = $('#PlayButtonAction');

		const videoPlay: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
		videoPlay.controls = false;
		videoPlay.pause();
		videoPlay.style.display = 'none';

		mobileTabletStaticImgContainer.style.display = 'block';

		var mobileContainerImage = mobileTabletStaticImgContainer.querySelectorAll('img');
		if (mobileContainerImage.length > 0) {
			mobileContainerImage[0].src = 'assets/slide1/mobile-landing-bkgd.jpg';
		}

		var thirdOfWindowHeight = this.windowHeight / 3;
		var fourthOfWindowHeight = this.windowHeight / 4;

		var thirdOfWindowWidth = this.windowWidth / 3;
		var halfOfWindowWidth = this.windowWidth / 2;
		var commercialNinjaHrOuterHeight = ninjaGreenLine.outerHeight();

		$('#slideOneGloss').hide();
		$('#PlayButtonGloss').hide();

		$('#commercial').height(this.windowHeight).width(this.windowWidth);

		var scaledStaticImage = this.Common.scaleProportionally(1125, 2001, this.windowWidth, 150, false);
		$(mobileTabletStaticImgContainer).width(scaledStaticImage.width).height(scaledStaticImage.height);

		var topOfHeightToUse = (this.windowHeight / 8);
		if (this.windowHeight <= 570) {
			TweenMax.set("#commericalNinjaNameYearId", {
				top: topOfHeightToUse, left: (this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
			});
		}

		if (this.windowHeight > 570 && this.windowHeight <= 680) {
			TweenMax.set("#commericalNinjaNameYearId", {
				top: topOfHeightToUse, left: (this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
			});
		}

		if (this.windowHeight > 680) {
			TweenMax.set("#commericalNinjaNameYearId", {
				top: topOfHeightToUse + 60, left: (this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
			});
		}

		if (this.Common.isAndroid()) {
			$('#commericalNinjaNameYearId img').width("130%");
		}

		TweenMax.set("#commericalNinjaNameId", {
			top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
			left: 0
		});

		TweenMax.set("#commericalNinjaLifeGreenHrId", {
			top: ninjaLogoName.position().top + (ninjaLogoName.outerHeight() / 3 * 2),
			left: ((this.windowWidth / 2) - (ninjaGreenLine.outerWidth() / 2))
		});

		TweenMax.set("#commericalNinjaLifePlayArrow", {
			top: ninjaGreenLine.position().top + ninjaGreenLine.height() + 20,
			left: ((this.windowWidth / 2) - (ninjaPlayArrow.width() / 2) - 50)
		});

		if (this.Common.isAndroid()) {
			TweenMax.set("#PlayButtonAction", {
				top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) + 5,
				left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2)
			});
		}
		else {
			TweenMax.set("#PlayButtonAction", {
				top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) + 15,
				left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2) + 15
			});
		}

		TweenMax.set("#commericalNinjaLifeDescriptionId", {
			top: ninjaPlayArrow.position().top + (ninjaPlayArrow.height() * 2) + 10,
			left: ((this.windowWidth / 2) - (ninjaDescriptionElement.outerWidth() / 2))
		});

		TweenMax.set("#slideOneArrow", {
			top: ($('#slideOneScroller').height() / 2) - ($('#slideOneArrow').height() / 2)
		});

		if (this.windowHeight <= 570) {
			TweenMax.set("#slideOneScroller", {
				top: this.windowHeight - $('#slideOneScroller').height() + 25,
				left: (this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
			});
		}

		if (this.windowHeight > 570 && this.windowHeight <= 680) {
			TweenMax.set("#slideOneScroller", {
				top: this.windowHeight - $('#slideOneScroller').height() - 50,
				left: (this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
			});
		}

		if (this.windowHeight > 680) {
			TweenMax.set("#slideOneScroller", {
				top: this.windowHeight - $('#slideOneScroller').height() - 50,
				left: (this.windowWidth / 2) - ($('#slideOneScroller').width() / 2) - 10
			});
		}

		var scaledVideo = this.Common.scaleProportionally(1388, 780, this.windowWidth, 150, false);
		$('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);

		this.setTweenMechanism();
	}

	setTweenMechanism = (): void => {
		TweenMax.set("#commericalNinjaNameYearId", { opacity: 1 });
		TweenMax.set("#commericalNinjaNameId", { opacity: 1 });
		TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 1 });

		TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 1 });
		TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 1 });
		TweenMax.set("#slideOneScroller.scroll-indicator", { opacity: 1 });
		TweenMax.set(".fixed-nav-bar", { opacity: 1 });
	}

	eventInitialize = (): void => {
		const playButtonElement: HTMLElement = document.getElementById('playArrowMask');
		const playButtonArrowElement: HTMLElement = document.getElementById('PlayButtonAction');


		document.getElementById('commericalNinjaLifePlayArrow').addEventListener('click', () => {
			TweenMax.set("#commericalNinjaNameYearId", { opacity: 0, display: "none" });
			TweenMax.set("#commericalNinjaNameId", { opacity: 0, display: "none" });
			TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 0, display: "none" });
			TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 0, display: "none" });
			TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 0, display: "none" });

			TweenMax.to("#firstSlideCloseContainerId", 1, { opacity: 1, display: "block" });

			TweenMax.to("#slideOneScroller", 1, { opacity: 0, display: "none" });
			TweenMax.set(".fixed-nav-bar", { opacity: 0, display: "none" });

			var video = (<HTMLVideoElement>document.getElementById('videoPlayer'));
			video.style.display = 'block';
			document.getElementById('mobileTabletStaticImgId').style.display = 'none';
			video.src = this.tabletMobileCommercialVideoUrl;
			video.removeAttribute("loop");
			video.setAttribute("controls", "controls");

			/*prevent scrolling*/
			this.Common.preventScrolling();

			video.play();
		});


		document.getElementById('firstSlideCloseContainerId').addEventListener('click', () => {
			TweenMax.set("#commericalNinjaNameYearId", { opacity: 1, display: "block" });
			TweenMax.set("#commericalNinjaNameId", { opacity: 1, display: "block" });
			TweenMax.set("#commericalNinjaLifeGreenHrId", { opacity: 1, display: "block" });
			TweenMax.set("#commericalNinjaLifeDescriptionId", { opacity: 1, display: "block" });
			TweenMax.set("#commericalNinjaLifePlayArrow", { opacity: 1, display: "block" });

			TweenMax.to("#firstSlideCloseContainerId", 1, { opacity: 0, display: "none" });

			TweenMax.to("#slideOneScroller", 1, { opacity: 1, display: "block" });
			TweenMax.to(".fixed-nav-bar", 1, { opacity: 1, display: "block" });
			TweenMax.to("#commercialGreenPageTransition", 1, { opacity: 1, display: "block" });

			let video = (<HTMLVideoElement>document.getElementById('videoPlayer'));
			video.pause();
			video.style.display = 'none';
			document.getElementById('mobileTabletStaticImgId').style.display = 'block';
			video.removeAttribute("controls");
			video.setAttribute('loop', 'true');

			/*allow scrolling again*/
			this.Common.allowScrolling();

			this.resize();
		});

		playButtonElement.addEventListener('mouseenter', () => {
			playButtonElement.style.borderColor = this.Common.kawasakiGreen;
			document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
			let polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
			if (polygonInPlayBtn.length > 0) {
				let polygonInSvg = polygonInPlayBtn[0];
				polygonInSvg.style.fill = this.Common.kawasakiGreen;
				polygonInSvg.style.stroke = this.Common.kawasakiGreen;
			}
		});

		playButtonElement.addEventListener('mouseleave', () => {
			playButtonElement.style.borderColor = this.Common.kawasakiWhite;
			document.getElementById('PlayButtonAction').querySelectorAll('polygon')[0];
			let polygonInPlayBtn = playButtonArrowElement.querySelectorAll('polygon');
			if (polygonInPlayBtn.length > 0) {
				let polygonInSvg = polygonInPlayBtn[0];
				polygonInSvg.style.fill = this.Common.kawasakiWhite;
				polygonInSvg.style.stroke = this.Common.kawasakiWhite;
			}
		});

		$('#videoPlayer').bind('webkitendfullscreen', function () {
			switch (window.orientation) {
				case -90:
				case 90:
					/*landscape*/
					this.mobileLandscapeOrientationModalChange();
					break;
				case 0:
				case 180:
					/*portrait*/
					break;
			}
		});

		$("#slideOneScroller").on('tap', function () {
			TweenMax.to(window, 1, {
				scrollTo: { y: $('#virtual').offset().top }
			});
		});
	}

	resize = (): void => {
		this.calculation();
		let videoElement: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
		const isCommercialPlaying = (videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2);
		if (isCommercialPlaying) {
			this.commercialResize(videoElement, $(window).width(), $(window).height());
		}
	}

	private commercialResize = (video: HTMLVideoElement, windowWidth: number, windowHeight: number): void => {
		var newScaledVideo = this.Common.scaleProportionally(1920, 1080, windowWidth, windowHeight, false);
		var finalNewScaledVideo = newScaledVideo.height;
		if (this.Common.isFirefoxBrowser()) {
			finalNewScaledVideo -= 30;
		}

		if (windowWidth <= 1360) {
			$(video).width(windowWidth - 70);
		}
		else {
			$(video).width(newScaledVideo.width - 70);
		}

		if (windowHeight <= 770) {
			$(video).height(windowHeight);
		}
		else {
			$(video).height(finalNewScaledVideo);
		}
	}

	private mobileLandscapeOrientationModalChange = (): void => {
		TweenMax.fromTo("#imageRotateImg", 2, {
			rotation: 90, scale: 0.4
		}, {
				scale: 0.4, rotation: 0, repeat: -1
			});
		TweenMax.to(".fixed-nav-bar", 1, {
			y: -100
		});
	}
}