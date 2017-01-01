/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/commercial.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class CommercialDesktop extends CommercialSlide {

	private desktopCommercialSplitVideoUrl = "https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4";
	private desktopCommercialVideoUrl = "https://media.kawasaki.com/contentstorage/6f857fc4-d143-4a2f-b4d8-7b00a2578df4_H264_1080.mp4";

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor() {
		super();
	}

	calculation = (windowWidth: number, windowHeight: number): void => {

		const videoPlay: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
		videoPlay.controls = false;
		videoPlay.play();
		videoPlay.style.display = 'block';

		let thirdOfWindowHeight = windowHeight / 3;
		let fourthOfWindowHeight = windowHeight / 4;

		let thirdOfWindowWidth = windowWidth / 3;
		let halfOfWindowWidth = windowWidth / 2;

		const ninjaLogoYear: JQuery = $('#commericalNinjaNameYearId');
		const ninjaLogoName: JQuery = $('#commericalNinjaNameId');
		const ninjaDescriptionElement: JQuery = $('#commericalNinjaLifeDescriptionId');

		let commercialNinjaNameHeight: number = ninjaLogoName.height();
		let commercialNinjaHrOuterHeight: number = $('#commericalNinjaLifeGreenHrId').outerHeight();
		let commercialNinjaNameWidth: number = ninjaLogoName.width();

		TweenMax.set("#firstSlideCloseContainerId", {
			left: (windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
		});

		/*set first slide width and height*/
		$('#commercial').height(windowHeight).width(windowWidth);

		/*calculate scaled video and set the width and height, 550 is a number and just put any number to make it look good*/
		var scaledVideo = this.Common.scaleProportionally(1388, 780, windowWidth, windowHeight, false);

		$('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);

		/*use height for desktop and tablet use a different height*/
		var topOfHeightToUse = thirdOfWindowHeight;
		if (windowHeight < 750) {
			topOfHeightToUse = fourthOfWindowHeight;
		}

		/*mostly everything below is setting positioning based on window dimensions and other containers*/

		/*2017 image*/
		TweenMax.set("#commericalNinjaNameYearId", {
			top: topOfHeightToUse, left: (windowWidth / 2) - (ninjaLogoYear.width() / 2)
		});

		if (this.Common.isSafari() && !this.Common.isMobile()) {
			TweenMax.set("#commericalNinjaNameYearId img", {
				width: '135%'
			});
		}

		/*ninja 650 image*/
		TweenMax.set("#commericalNinjaNameId", {
			top: ninjaLogoYear.position().top + ninjaLogoYear.height(),
			left: (windowWidth / 2) - (ninjaLogoName.width() / 2)
		});

		var leftGreenHr = halfOfWindowWidth - 10;
		if (windowWidth < 1280) {
			leftGreenHr = leftGreenHr - ($('#commericalNinjaLifeGreenHrId').width() / 2);
		}
		/*green line image under ninja image*/
		TweenMax.set("#commericalNinjaLifeGreenHrId", {
			top: ninjaLogoName.position().top + ninjaLogoName.height(),
			left: leftGreenHr
		});

		var leftDescription = halfOfWindowWidth - 10;
		if (windowWidth < 1280) {
			leftDescription = leftDescription - (ninjaDescriptionElement.width() / 2);
		}
		/*the description*/
		TweenMax.set("#commericalNinjaLifeDescriptionId", {
			top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
			left: leftDescription
		});

		/*the play image icon*/
		TweenMax.set("#commericalNinjaLifePlayArrow", {
			top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
			left: (ninjaDescriptionElement.position().left + ninjaDescriptionElement.width() + 50)
		});

		var floatingBottom = $('#commercial').height() / 10 * 9;
		var bottom = ninjaDescriptionElement.offset().top + ninjaDescriptionElement.outerHeight() + 100;

		if (floatingBottom < bottom) {
			floatingBottom = bottom
		}

		/*scroll image at the bottom*/
		TweenMax.set("#slideOneScroller", {
			top: floatingBottom,
			left: (windowWidth / 2) - ($('#slideOneScroller').width() / 2)
		});
	}
}
