/// <reference path="../../commonjs.ts" />
/// <reference path="../../../../scripts/typings/tweenmax.d.ts" />

namespace Kawasaki.NinjaSixFifty {
	export class Commercial {

		private Common: Kawasaki.Common = new Kawasaki.Common();

		constructor(public windowWidth: number, public windowHeight: number) {

		}

		public calculation = (): void => {
			const thirdOfWindowHeight = this.windowHeight / 3;
			const fourthOfWindowHeight = this. windowHeight / 4;

			//const thirdOfWindowWidth = this.windowWidth / 3;
			//const halfOfWindowWidth = this.windowWidth / 2;
			//const commercialNinjaNameHeight = this.Common.elementDimensions(document.getElementById('commericalNinjaNameId')).height;
			//const commercialNinjaHrOuterHeight = this.Common.elementDimensions(document.getElementById('commericalNinjaLifeGreenHrId')).outerHeight;
			//const commercialNinjaNameWidth = this.Common.elementDimensions(document.getElementById('commericalNinjaNameId')).width;

			//TweenMax.set("#firstSlideCloseContainerId", {
			//	left: (this.windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
			//});

			//document.getElementById('commercial').style.height = this.windowHeight.toString() + 'px';
			//document.getElementById('commercial').style.width = this.windowWidth.toString() + 'px';

			//TweenMax.set("#commericalNinjaNameYearId", {
			//	top: topOfHeightToUse, left: (this.windowWidth / 2) - ($('#commericalNinjaNameYearId').width() / 2)
			//});

		}
	}
}


/*var slideOneCalculation = function (windowWidth, windowHeight) {

		var thirdOfWindowHeight = windowHeight / 3;
		var fourthOfWindowHeight = windowHeight / 4;

		var thirdOfWindowWidth = windowWidth / 3;
		var halfOfWindowWidth = windowWidth / 2;
		var commercialNinjaNameHeight = $('#commericalNinjaNameId').height();
		var commercialNinjaHrOuterHeight = $('#commericalNinjaLifeGreenHrId').outerHeight();
		var commercialNinjaNameWidth = $('#commericalNinjaNameId').width();

		TweenMax.set("#firstSlideCloseContainerId", {
			left: (windowWidth / 2) - ($('#firstSlideCloseContainerId').width() / 2)
		});


$('#commercial').height(windowHeight).width(windowWidth);


var scaledVideo = {};
if (Kawasaki.Common.isTablet()) {
	scaledVideo = Kawasaki.Common.scaleProportionally(1388, 780, windowWidth, windowHeight, false);
}
else {
	scaledVideo = Kawasaki.Common.scaleProportionally(1388, 780, windowWidth, windowHeight, false);
}
$('#videoPlayer').height(scaledVideo.height).width(scaledVideo.width);


var topOfHeightToUse = thirdOfWindowHeight;
if (Kawasaki.Common.isTablet() || windowHeight < 750) {
	topOfHeightToUse = fourthOfWindowHeight;
}




TweenMax.set("#commericalNinjaNameYearId", {
	top: topOfHeightToUse, left: (windowWidth / 2) - ($('#commericalNinjaNameYearId').width() / 2)
});

if (isSafari && !Kawasaki.Common.isMobileBrowser()) {
	TweenMax.set("#commericalNinjaNameYearId img", {
		width: '135%'
	});
}


TweenMax.set("#commericalNinjaNameId", {
	top: $('#commericalNinjaNameYearId').position().top + $('#commericalNinjaNameYearId').height(),
	left: (windowWidth / 2) - ($('#commericalNinjaNameId').width() / 2)
});

var leftGreenHr = halfOfWindowWidth - 10;
if (!Kawasaki.Common.isTablet() && windowWidth < 1280) {
	leftGreenHr = leftGreenHr - ($('#commericalNinjaLifeGreenHrId').width() / 2);
}

TweenMax.set("#commericalNinjaLifeGreenHrId", {
	top: $('#commericalNinjaNameId').position().top + $('#commericalNinjaNameId').height(),
	left: leftGreenHr
});

var leftDescription = halfOfWindowWidth - 10;
if (!Kawasaki.Common.isTablet() && windowWidth < 1280) {
	leftDescription = leftDescription - ($('#commericalNinjaLifeDescriptionId').width() / 2);
}

TweenMax.set("#commericalNinjaLifeDescriptionId", {
	top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
	left: leftDescription
});


TweenMax.set("#commericalNinjaLifePlayArrow", {
	top: $('#commericalNinjaLifeGreenHrId').position().top + commercialNinjaHrOuterHeight,
	left: ($('#commericalNinjaLifeDescriptionId').position().left + $('#commericalNinjaLifeDescriptionId').width() + 50)
});

if (!Kawasaki.Common.isTablet()) {

	TweenMax.set("#commercialGreenPageTransition", {
		top: windowHeight - 100
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