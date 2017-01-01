/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="devicetypes/commercial-desktop.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class Commercial {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;

		private desktopCommercialSplitVideoUrl = "https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4";
		private desktopCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_1080.mp4";
		private tabletMobileCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_720.mp4";

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			let deviceLayout: CommercialSlide;
			if (this.Common.isMobile()) {

			}
			else if (this.Common.isTablet()) {

			}
			else {
				deviceLayout = new CommercialDesktop();
			}

			deviceLayout.calculation(this.windowDimensions.width, this.windowDimensions.height);

			this.setTweenMechanism();
			this.commercialEventInitialize();
		}

		public commercialEventInitialize = (): void => {

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
				TweenMax.to("#commercialGreenPageTransition", 1, { opacity: 0, display: "none" });

				var video = (<HTMLVideoElement>document.getElementById('videoPlayer'));
				video.src = this.desktopCommercialVideoUrl;
				video.removeAttribute("loop");
				video.setAttribute("controls", "controls");

				/*subtract the video height due to needing to show the video controls*/
				if (!this.Common.isTablet() && !this.Common.isMobile()) {

					var newScaledVideo = this.Common.scaleProportionally(1920, 1080, this.windowDimensions.width, this.windowDimensions.height, false);
					var finalNewScaledVideo = newScaledVideo.height;
					if (this.Common.isFirefoxBrowser()) {
						finalNewScaledVideo -= 30;
					}

					this.commercialResize(video, this.windowDimensions.width, this.windowDimensions.height);
				}

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
				video.src = this.desktopCommercialSplitVideoUrl;
				video.removeAttribute("controls");
				video.setAttribute('loop', 'true');
				video.play();

				/*allow scrolling again*/
				this.Common.allowScrolling();

				this.slideOneResize();
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

			document.getElementById('slideOneScroller').addEventListener('click', () => {
				TweenMax.to(window, 1, { scrollTo: { y: $('#virtual').offset().top - 65 } });
			});
		}

		private commercialResize = (video:HTMLVideoElement, windowWidth:number, windowHeight:number): void => {
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

		private repeatPlayButtonGlossAnimation = (): void => {
			TweenMax.set(".play-button-gloss", { x: -120, opacity: .6, scaleX: .3 });
			new TimelineMax().to(".play-button-gloss", .5, { x: 120, ease: Linear.easeInOut, scaleX: .3, autoAlpha: .6, repeat: 0 });
			setTimeout(this.repeatPlayButtonGlossAnimation, 4000)
		}

		private repeatScrollIndicatorAnimation = (): void => {
			TweenMax.set("#slideOneArrow", { y: 0 });
			TweenMax.set("#slideOneGloss", { y: 50 });
			TweenMax.to("#slideOneArrow", 1, { y: 50, ease: Linear.easeInOut, repeat: 0, onComplete: this.setArrow });
			TweenMax.to("#slideOneGloss", 1, { y: -100, ease: Linear.easeOut, autoAlpha: 1, repeat: 0 });
			setTimeout(this.repeatScrollIndicatorAnimation, 4500);
		}

		private setTweenMechanism = (): void => {
			TweenMax.set(".fixed-nav-bar", { y: -100 });
			TweenMax.set("#commericalNinjaNameYearId", { x: 20 });
			TweenMax.set("#commericalNinjaNameId", { x: 0 });
			TweenMax.set("#commericalNinjaLifeGreenHrId", { x: -50 });
			TweenMax.set("#commericalNinjaLifeDescriptionId", { x: -50 });
			TweenMax.set("#commercialGreenScrollImg", { y: 0 });
			TweenMax.set("#commericalNinjaLifePlayArrow", { x: -25 });
			TweenMax.set("#PlayButtonAction", { x: -50, opacity: 0 });
			TweenMax.set("#PlayButtonGloss", { x: -70, opacity: 0, scaleX: 0.1 });
			TweenMax.set("#slideOneScroller.scroll-indicator", { y: -50, opacity: 0 });
			TweenMax.set("#slideOneArrow", { y: 0 });
			TweenMax.set("#slideOneGloss", { y: 50 });

			new TimelineMax()
				.to('#commericalNinjaNameYearId', .4, { x: 0, ease: Linear.easeOut, autoAlpha: 1 })
				.to('#commericalNinjaNameId', 1, { x: 0, ease: Linear.easeOut, autoAlpha: 1, delay: -.4 })
				.to("#commericalNinjaLifeGreenHrId", .35, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 })
				.to("#commericalNinjaLifeDescriptionId", .35, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.25 })
				.to("#slideOneScroller.scroll-indicator", .5, { y: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 })
				.to("#commericalNinjaLifePlayArrow", .5, {
					x: 0, ease: Linear.easeInOut, autoAlpha: 1, onComplete: function () {
						new TimelineMax().to(".play-button-gloss", .3, { x: 120, ease: Linear.easeIn, scaleX: 1, autoAlpha: 1, repeat: 0 });
						new TimelineMax().to(".play-button-action", .3, { x: 0, ease: Linear.easeInOut, autoAlpha: 1, delay: -.5 })
					}
				});

			new TimelineMax().to("#slideOneArrow", .5, { y: 50, ease: Linear.easeInOut, repeat: 3, onComplete: this.setArrow });

			new TimelineMax().to("#slideOneGloss", .5, { y: -100, ease: Linear.easeOut, autoAlpha: .7, repeat: 3 })
				.to("#slideOneGloss", 1, { y: -100, ease: Linear.easeInOut, repeat: 0 });

			setTimeout(this.repeatScrollIndicatorAnimation, 6000);
			setTimeout(this.repeatPlayButtonGlossAnimation, 5000);
		}

		private setArrow = (): void => {
			TweenMax.set("#slideOneArrow", { y: -50 });
			new TimelineMax().to("#slideOneArrow", .4, { y: 23, ease: Linear.easeIn, repeat: 0, delay: -.5 });
		}

		private slideOneResize = (): void => {
			if (this.Common.isMobile()) {
				//Kawasaki.NinjaSixFifty.Mobile.slideOneCalculationMobile(screen.width, screen.height);
			}
			else {
				this.calculation();
			}

			let videoElement:HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
			const isCommercialPlaying = (videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2);
			if (isCommercialPlaying) {
				this.commercialResize(videoElement, $(window).width(), $(window).height());
			}
		}
	}
}