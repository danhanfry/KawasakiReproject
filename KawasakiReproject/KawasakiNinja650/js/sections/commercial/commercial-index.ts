/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class Commercial {

		private Common: Kawasaki.Common = new Kawasaki.Common();
		private windowDimensions: IDimensionPosition;

		constructor() {
			this.windowDimensions = this.Common.elementDimensions(window);
		}

		public calculation = (): void => {

			const videoPlay: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('videoPlayer'));
			videoPlay.controls = false;
			videoPlay.play();
			videoPlay.style.display = 'block';

			const thirdOfWindowHeight = this.windowDimensions.height / 3;
			const fourthOfWindowHeight = this.windowDimensions.height / 4;

			const thirdOfWindowWidth = this.windowDimensions.width / 3;
			const halfOfWindowWidth = this.windowDimensions.width / 2;

			const ninjaYearDimensions = this.Common.elementDimensions(document.getElementById('commericalNinjaNameYearId'));
			const commercialNinjaHrDimension = this.Common.elementDimensions(document.getElementById('commericalNinjaLifeGreenHrId'));
			const commericalNinjaLifeDescDimension = this.Common.elementDimensions(document.getElementById('commericalNinjaLifeDescriptionId'));
			const commericalNinjaNameDimension = this.Common.elementDimensions(document.getElementById('commericalNinjaNameId'));

			const commercialNinjaNameHeight = commericalNinjaNameDimension.height;
			const commercialNinjaNameWidth = commericalNinjaNameDimension.width;

			TweenMax.set("#firstSlideCloseContainerId", {
				left: (this.windowDimensions.width / 2) - (this.Common.elementDimensions(document.getElementById('firstSlideCloseContainerId')).width / 2)
			});

			document.getElementById('commercial').style.height = this.windowDimensions.height + 'px';
			document.getElementById('commercial').style.width = this.windowDimensions.width + 'px';


			let scaledVideo = this.Common.scaleProportionally(1388, 780, this.windowDimensions.width, this.windowDimensions.height, false);
			document.getElementById('videoPlayer').style.height = scaledVideo.height + 'px';
			document.getElementById('videoPlayer').style.width = scaledVideo.width + 'px';

			let topOfHeightToUse = thirdOfWindowHeight;
			if (this.windowDimensions.height < 750) {
				topOfHeightToUse = fourthOfWindowHeight;
			}

			TweenMax.set("#commericalNinjaNameYearId", {
				top: topOfHeightToUse, left: (this.windowDimensions.width / 2) - (ninjaYearDimensions.width / 2)
			});

			TweenMax.set("#commericalNinjaNameId", {
				top: ninjaYearDimensions.positionTop + ninjaYearDimensions.height,
				left: (this.windowDimensions.width / 2) - (commericalNinjaNameDimension.width / 2)
			});

			let leftGreenHr = halfOfWindowWidth - 10;
			if (this.windowDimensions.width < 1280) {
				leftGreenHr = leftGreenHr - (commercialNinjaHrDimension.width / 2);
			}

			TweenMax.set("#commericalNinjaLifeGreenHrId", {
				top: commericalNinjaNameDimension.positionTop + commericalNinjaNameDimension.height,
				left: leftGreenHr
			});

			let leftDescription = halfOfWindowWidth - 10;
			if (this.windowDimensions.width < 1280) {
				leftDescription = leftDescription - (commericalNinjaLifeDescDimension.width / 2);
			}

			TweenMax.set("#commericalNinjaLifeDescriptionId", {
				top: commercialNinjaHrDimension.positionTop + commercialNinjaHrDimension.outerHeight,
				left: leftDescription
			});

			TweenMax.set("#commericalNinjaLifePlayArrow", {
				top: commercialNinjaHrDimension.positionTop + commercialNinjaHrDimension.outerHeight,
				left: (commericalNinjaLifeDescDimension.positionLeft + commericalNinjaLifeDescDimension.width + 50)
			});
		}
	}
}


/*var slideOneCalculation = function (windowWidth, windowHeight) {


if (isSafari && !Kawasaki.Common.isMobileBrowser()) {
	TweenMax.set("#commericalNinjaNameYearId img", {
		width: '135%'
	});
}

var $el = $('#commericalNinjaLifeDescriptionId');

var value = $('#commercial').height() / 15;
var floatingBottom = $('#commercial').height() / 10 * 9;
var bottom = $el.offset().top + $el.outerHeight() + 100; //

if (floatingBottom < bottom) {
	floatingBottom = bottom
}


TweenMax.set("#slideOneScroller", {
	top: floatingBottom,
	left: (windowWidth / 2) - ($('#slideOneScroller').width() / 2)
});
	};*/