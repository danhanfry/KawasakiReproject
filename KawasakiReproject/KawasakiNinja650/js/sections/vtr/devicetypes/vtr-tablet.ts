/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class VTRTablet extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		/*slide two height and width*/
		$('#virtual').height(this.windowHeight).width(this.windowWidth);

		/**/
		var scaledStaticImage = this.Common.scaleProportionally(2048, 1070, this.windowWidth, 150, false);
		$('#mobileTabletVRStaticImgId').height(scaledStaticImage.height + 15);

		TweenMax.set('#testVRContainerId', {
			top: ($('#virtual').height() / 5.5) - 80
		});

		/*experience*/
		TweenMax.set("#testVRExperience", {
			left: (this.windowWidth / 2) - ($('#testVRExperience').width() / 2)
		});

		/*virtual test ride text positioning only desktop, tablet and mobile are via css since this is unreliable on those devices*/
		var vrTestRideTxtHalfWidth = $('#testVRTestRide').width() / 2;
		TweenMax.set(".testvr-testride", {
			top: $('#testVRExperience').position().top + $('#testVRExperience').height(),
			left: (this.windowWidth / 2) - vrTestRideTxtHalfWidth
		});


		/*description*/
		TweenMax.set("#testVRDescription", {
			top: $('#testVRTestRide').position().top + $('#testVRTestRide').height(),
			left: (this.windowWidth / 2) - ($('#testVRDescription').width() / 2)
		});

		TweenMax.set('#vrTestRideSelection', {
			top: $('#testVRDescription').position().top + $('#testVRDescription').height() + 40
		});

		$('#leftTextForVRVideoHoverId').css({
			'left': ($(window).width() / 2) - $('#leftTextForVRVideoHoverId').width() - 60
		});

		$('#rightTextForVRVideoHoverId').css({
			'left': ($(window).width() / 2) + 75
		});

		/*green scroll indicator*/
		TweenMax.set("#slideTwoScroller", {
			bottom: "110px",
			left: (this.windowWidth / 2) - ($('#slideTwoScroller img').width() / 2)
		});
	}

	setTweenMechanism = (): void => {

	}

	eventInitialize = (): void => {
		$('#leftTextForVRVideoHoverId').on({
			mouseover: function () {
				TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#66cc33' });
				TweenMax.to("#interactiveBoxId", 0.5, { fill: '#66cc33' });
				TweenMax.to("#interactivePlayId", 0.5, { stroke: '#66cc33' });


				TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });
			},
			mouseleave: function () {
				TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });

				TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });
			}
		});

		$('#rightTextForVRVideoHoverId').on({
			mouseover: function () {
				TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });

				TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#66cc33' });
				TweenMax.to("#freeBoxId", 0.5, { fill: '#66cc33' });
				TweenMax.to("#freePlayId", 0.5, { stroke: '#66cc33' });
			},
			mouseleave: function () {
				TweenMax.to("#rightTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#freeBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#freePlayId", 0.5, { stroke: '#fff' });

				TweenMax.to("#leftTextForVRVideoHoverId", 0.5, { color: '#fff' });
				TweenMax.to("#interactiveBoxId", 0.5, { fill: '#fff' });
				TweenMax.to("#interactivePlayId", 0.5, { stroke: '#fff' });
			}
		});

		$('#leftTestVRVideoSVGId, #leftTextForVRVideoHoverId').on('tap longtap', function () {
			window.location.href = 'vtr/index.html?videoId=0';
		});

		$('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('tap longtap', function () {
			window.location.href = 'vtr/index.html?videoId=1';
		});

		$("#slideTwoScroller").on('click', function () {
			TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top - 65 } });
		});
	}

	resize = (): void => {

	}
}