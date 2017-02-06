/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class VTRMobile extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {
		$('#mobileTabletVRStaticImgId img').prop('src', 'assets/slide2/mobile-vtr-failover.jpg');

		$('#virtual').height(this.windowHeight).width(this.windowWidth);

		var scaledStaticImage = this.Common.scaleProportionally(1125, 2001, this.windowWidth, this.windowHeight, false);
		$('#mobileTabletVRStaticImgId').width(scaledStaticImage.width);

		if (this.windowHeight <= 570) {
			$('#mobileTabletVRStaticImgId').height(scaledStaticImage.height / 2 + 20);
		}

		if (this.windowHeight > 570 && this.windowHeight <= 680) {
			$('#mobileTabletVRStaticImgId').height(scaledStaticImage.width - 5);
		}

		if (this.windowHeight > 680) {
			$('#mobileTabletVRStaticImgId').height(scaledStaticImage.width);
		}

		TweenMax.set('#testVRContainerId', {
			top: ($('#virtual').height() / 5.5) - 80
		});

		/*description*/
		TweenMax.set("#testVRDescription", {
			width: $(window).width() - 40
		});

		$('#leftTextForVRVideoHoverId').css({

		});

		$('#rightTextForVRVideoHoverId').css({
			'left': ($(window).width() / 2) + 2
		});

		if (this.Common.isAndroid()) {
			$('#vrTestRideSelection').css({ "top": "400px" });
			$('.text-vr-hover-txt').css({ "width": "170px" });
		}

		TweenMax.set("#slideTwoScroller", {
			bottom: 0,
			left: (this.windowWidth / 2) - ($('#slideTwoScroller img').width() / 2) - 40
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

		$('#leftTestVRVideoSVGId, #leftTextForVRVideoHoverId').on('click', function () {
			window.location.href = '//kawasaki.com/ninja650experience/vtr/index.html?videoId=0';
		});

		$('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('click', function () {
			window.location.href = '//kawasaki.com/ninja650experience/vtr/index.html?videoId=1';
		});

		$("#slideTwoScroller").on('click', function () {
			TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top } });
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {

	}
}