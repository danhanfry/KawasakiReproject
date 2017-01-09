/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />

class VTRDesktop extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		/*slide two height and width*/
		$('#virtual').height(this.windowHeight).width(this.windowWidth);

		if (navigator.userAgent.indexOf("MSIE") >= 0) {

			var scaledStaticImage = this.Common.scaleProportionally(3840, 1400, this.windowWidth, 700, false);
			$('#desktopFailOverId').height(scaledStaticImage.height);
			$('#desktopFailOverId img').height(scaledStaticImage.height);

			TweenMax.set('#desktopFailOverId', {
				top: ($('#virtual').height() / 5.5) - 40
			});

			TweenMax.set("#failOverNinjaName", {
				top: $('#desktopFailOverId').position().top + ($('#desktopFailOverId').height() / 2) - ($('#failOverNinjaName').height()),
				left: (this.windowWidth / 2) - ($('#failOverNinjaName').width() / 2)
			});

			TweenMax.set("#failOverMessage", {
				top: $('#failOverNinjaName').position().top + $('#failOverNinjaName').height(),
				left: (this.windowWidth / 2) - ($('#failOverMessage').width() / 2)
			});
		}
		else {

			TweenMax.set('#videoPlayerVR', {
				top: ($('#virtual').height() / 5.5) - 40
			});

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
				top: $('#testVRDescription').position().top + $('#testVRDescription').height() + 60
			});

			$('#leftTextForVRVideoHoverId').css({
				'left': ($(window).width() / 2) - $('#leftTextForVRVideoHoverId').width() - 100
			});

			$('#rightTextForVRVideoHoverId').css({
				'left': ($(window).width() / 2) + 75
			});

			/*modal iframe content*/
			if (this.windowWidth < (1280 + 40) || this.windowHeight < 801) {
				var scaledVRVideo = this.Common.scaleProportionally(1280, 720, (this.windowWidth / 2), 550, false);

				$('#modalContentVTRContainer').height(scaledVRVideo.height).width(scaledVRVideo.width);
				$('#modalVTRContentInfo').height(scaledVRVideo.height).width(scaledVRVideo.width);
			}

			TweenMax.set("#modalVTRContentInfo", {
				left: (this.windowWidth / 2) - ($('#modalVTRContentInfo').width() / 2)
			});

			TweenMax.set(".testvr-experience", { y: 50 });
			TweenMax.set(".testvr-description", { y: 50 });
			TweenMax.set("#leftTextForVRVideoHoverId", { y: 100 });
			TweenMax.set("#rightTextForVRVideoHoverId", { y: 100 });
		}

		/*green scroll indicator*/
		TweenMax.set("#slideTwoScroller", {
			top: this.windowHeight - $('#slideTwoScroller').height() - 25,
			left: (this.windowWidth / 2) - ($('#slideTwoScroller').width() / 2)
		});

		this.setTweenMechanism();
	}

	setTweenMechanism = (): void => {
		new TimelineMax()
			.to('.testvr-experience', 0.5, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.6")
			.to(".testvr-description", 0.5, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.4")
			.to("#leftTextForVRVideoHoverId", 0.4, { y: 0, autoAlpha: 1, ease: Linear.easeOut })
			.to('#rightTextForVRVideoHoverId', 0.4, { y: 0, autoAlpha: 1, ease: Linear.easeOut }, "-=0.1");

		new TimelineMax()
			.to("#testVRTestRide", 1.5, { opacity: 1 })
			.to("#testVRTestRideBackgroundId", 1.5, { scrambleText: { text: "TAKE A VIRTUAL TEST RIDE", chars: "upperCase", revealDelay: 0.5, tweenLength: false, ease: Linear.easeNone } }, "-=2.0");

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
			this.setupTestVRModal(0);
		});


		$('#rightTestVRVideoSVGId, #rightTextForVRVideoHoverId').on('tap longtap', function () {
			this.setupTestVRModal(1);
		});

		$('#testVRModal .close-btn').on('click', function () {

			(<any>(<HTMLIFrameElement>window.frames[0].frameElement).contentWindow).getEdgeApp().destroy();

			/*allow scrolling again*/
			this.Common.allowScrolling();

			document.getElementById('testVRModal').style.display = 'none';
		});

		$("#slideTwoScroller").on('click', function () {
			TweenMax.to(window, 1, { scrollTo: { y: $('#explore').offset().top - 65 } });
		});

	}

	resize = (): void => {
		this.calculation();
	}

	private prepareIFrameVRTestRide = (): void => {
		var vrIFrame: HTMLIFrameElement = document.createElement('iframe');
		vrIFrame.width = "100%";
		vrIFrame.height = "100%";
		vrIFrame.frameBorder = "0";
		vrIFrame.marginWidth = "0";
		vrIFrame.marginHeight = "0";
		vrIFrame.name = "inlineframe";
		vrIFrame.style.marginLeft = "0";
		vrIFrame.setAttribute('seamless', 'true');

		document.getElementById('modalVTRContentInfo').appendChild(vrIFrame);
	}

	private setupTestVRModal = (videoId: number): void => {
		(<HTMLIFrameElement>window.frames[0].frameElement).src = "vtr/index.html?videoId=" + videoId;
		document.getElementById('testVRModal').style.display = 'block';

		/*prevent scrolling*/
		this.Common.preventScrolling();
	};
}