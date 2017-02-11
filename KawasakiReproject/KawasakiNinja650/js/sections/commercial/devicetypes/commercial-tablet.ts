/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class CommercialTablet extends ExperienceSlide {

	private tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		const ninjaLogoYear: JQuery = $('#commericalNinjaNameYearId');
		const ninjaLogoName: JQuery = $('#commericalNinjaNameId');
		const ninjaDescriptionElement: JQuery = $('#commericalNinjaLifeDescriptionId');
		const ninjaGreenLine: JQuery = $('#commericalNinjaLifeGreenHrId');
		const ninjaPlayArrow: JQuery = $('#commericalNinjaLifePlayArrow');
		const ninjaPlayButtonSvg: JQuery = $('#PlayButtonAction');

		const mobileTabletStaticImgContainer: HTMLElement = document.getElementById('mobileTabletStaticImgId');
		const videoPlay: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));

		videoPlay.controls = false;
		videoPlay.pause();
		videoPlay.style.display = 'none';

		mobileTabletStaticImgContainer.style.display = 'block';

		var mobileContainerImage = mobileTabletStaticImgContainer.querySelectorAll('img');
		if (mobileContainerImage.length > 0) {
			mobileContainerImage[0].src = 'assets/slide1/tablet-landing-bkgd.jpg';
		}

		var scaledStaticImage = this.Common.scaleProportionally(1920, 1080, this.windowWidth, 150, false);
		$(mobileTabletStaticImgContainer).width(scaledStaticImage.width).height(scaledStaticImage.height + 60);

		document.getElementById('PlayButtonGloss').style.display = 'none';
		document.getElementById('slideOneGloss').style.display = 'none';

		let thirdOfWindowHeight = this.windowHeight / 3;
		let fourthOfWindowHeight = this.windowHeight / 4;

		let thirdOfWindowWidth = this.windowWidth / 3;
		let halfOfWindowWidth = this.windowWidth / 2;

		TweenMax.set("#firstSlideCloseContainerId", {
			left: (this.windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
		});

		/*set first slide width and height*/
		$('#commercial').height(this.windowHeight).width(this.windowWidth);

		/*calculate scaled video and set the width and height, 550 is a number and just put any number to make it look good*/
		var scaledVideo = this.Common.scaleProportionally(1388, 780, this.windowWidth, this.windowHeight, false);

		$('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);

		/*use height for desktop and tablet use a different height*/
		var topOfHeightToUse = fourthOfWindowHeight;

		/*mostly everything below is setting positioning based on window dimensions and other containers*/

		/*2017 image*/
		TweenMax.set("#commericalNinjaNameYearId", {
			top: topOfHeightToUse, left: (this.windowWidth / 2) - (ninjaLogoYear.width() / 2)
		});

		if (this.Common.isSafari() && !this.Common.isMobile()) {
			TweenMax.set("#commericalNinjaNameYearId img", {
				width: '135%'
			});
		}

		/*ninja 650 image*/
		TweenMax.set("#commericalNinjaNameId", {
			top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
			left: (this.windowWidth / 2) - (ninjaLogoName.width() / 2)
		});

		var leftGreenHr = halfOfWindowWidth - 10;
		leftGreenHr = leftGreenHr - (ninjaGreenLine.width() / 2);
		
		/*green line image under ninja image*/
		TweenMax.set("#commericalNinjaLifeGreenHrId", {
			top: ninjaLogoName.position().top + ninjaLogoName.height(),
			left: leftGreenHr
		});

		var leftDescription = halfOfWindowWidth - 10;
		leftDescription = leftDescription - (ninjaDescriptionElement.width() / 2);
		
		/*the description*/
		TweenMax.set("#commericalNinjaLifeDescriptionId", {
			top: ninjaGreenLine.position().top + ninjaGreenLine.outerHeight() - 10,
			left: leftDescription
		});

		/*the play image icon*/
		TweenMax.set("#commericalNinjaLifePlayArrow", {
			top: ninjaGreenLine.position().top + ninjaGreenLine.outerHeight(),
			left: (ninjaDescriptionElement.position().left + ninjaDescriptionElement.width() + 50)
		});

		var floatingBottom = $('#commercial').height() / 10 * 9;
		var bottom = ninjaDescriptionElement.offset().top + ninjaDescriptionElement.outerHeight() + 100;

		if (floatingBottom < bottom) {
			floatingBottom = bottom
		}

		TweenMax.set("#PlayButtonAction", {
			top: (ninjaPlayArrow.height() / 2) - (ninjaPlayButtonSvg.height() / 2) - 10,
			left: (ninjaPlayArrow.width() / 2) - (ninjaPlayButtonSvg.width() / 2) - 15
		});

		TweenMax.set("#slideOneArrow", {
			top: ($('#scrollIndicatorMask').height() / 2) - ($('#slideOneArrow').height() / 2)
		});

		/*scroll image at the bottom*/
		TweenMax.set("#slideOneScroller", {
			top: floatingBottom,
			left: (this.windowWidth / 2) - ($('#slideOneScroller').width() / 2)
		});

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
	}

	resize = (): void => {
		this.calculation();
		let videoElement: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
		const isCommercialPlaying = (videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2);
		if (isCommercialPlaying) {
			this.commercialResize(videoElement, $(window).width(), $(window).height());
		}
	}

	setScrollMagicMechanism = (): void => {

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
}