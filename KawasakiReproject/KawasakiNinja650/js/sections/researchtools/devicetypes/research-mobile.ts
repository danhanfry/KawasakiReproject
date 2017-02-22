/// <reference path="../../../../../scripts/core/commonjs.ts" />
/// <reference path="../../../ninjacommonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="../../../../../scripts/typings/scrollmagic.d.ts" />

class ResearchMobile extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();
	private NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();
	private halfWindowWidth: number = 0;
	constructor(public windowWidth: number, public windowHeight: number) {
		super();
		this.halfWindowWidth = this.windowWidth / 2;
	}

	calculation = (): void => {

		if (this.windowHeight <= 570) {
			$('#researchtools').css('min-height', this.windowHeight + 60);
		}

		if (this.windowHeight > 570 && this.windowHeight <= 680) {
			$('#researchtools').css('min-height', this.windowHeight + 50);
		}

		if (this.windowHeight > 680) {
			$('#researchtools').css('min-height', this.windowHeight - 50);
		}
		$('#researchtools').height(this.windowHeight - 65);

		$('#researchtools').css('max-width', this.windowWidth);
		$('#researchtools').width(this.windowWidth);

		/*2017 Year Image*/
		TweenMax.set("#researchYear", { left: this.halfWindowWidth - ($('#researchYear').width() / 2) });
		if (this.Common.isAndroid()) {
			$('#researchYear img').width("130%");
		}

		/*NINJA Product Image*/
		TweenMax.set("#researchNinja", {
			left: this.halfWindowWidth - ($('#researchNinja').width() / 2),
			top: $('#researchYear').position().top + $('#researchYear').outerHeight() + 15
		});

		TweenMax.set("#researchNinjaImgId", {
			left: this.halfWindowWidth - ($('#researchNinjaImgId').width() / 2),
			top: $('#researchYear').position().top + $('#researchYear').outerHeight() + 15
		});

		/*In Dealership Text Image*/
		TweenMax.set("#researchInDealership", {
			left: this.halfWindowWidth - ($('#researchInDealership').width() / 2),
			top: $('#researchNinja').position().top + ($('#researchNinja').height()) - 20
		});

		/*The columns for research, shop and finance*/
		TweenMax.set("#researchListing", {
			left: this.halfWindowWidth - ($('#researchListing').width() / 2),
			top: $('#researchToolContainerId').outerHeight() + $('#researchNinja').height() + $('#researchInDealership').height() - 80
		});

		var researchListingHeight = $('#researchListing').height();
		if (this.windowHeight <= 570) {
			TweenMax.set("#restartExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 60
			});

			TweenMax.set("#exitExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 80,
				left: $('.restart-experience-txt').outerWidth()
			});
		}

		if (this.windowHeight > 570 && this.windowHeight <= 680) {
			TweenMax.set("#restartExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) + 20
			});

			TweenMax.set("#exitExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()),
				left: $('.restart-experience-txt').outerWidth() + 30
			});
		}

		if (this.windowHeight > 680) {
			TweenMax.set("#restartExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 20
			});

			TweenMax.set("#exitExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 40,
				left: $('.restart-experience-txt').outerWidth() + 50
			});
		}

		if (this.Common.isAndroid()) {
			TweenMax.set("#restartExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 0
			});

			TweenMax.set("#exitExperienceId", {
				top: ($('#researchListing').position().top + $('#researchListing').outerHeight()) - 20
			});
		}


		var halfWayOfResearchTool = $('#researchToolText').position().top + ($('#researchToolText').height() / 2);
		TweenMax.set(".research-grey-bkg", {
			top: halfWayOfResearchTool,
			height: $('#researchtools').height() - halfWayOfResearchTool
		});

	}

	setTweenMechanism = (): void => {

	}

	eventInitialize = (): void => {
		document.getElementById('restartExperienceId').addEventListener('click', () => {
			document.getElementById('commercial').scrollIntoView();
		});

		document.getElementById('exitExperienceId').addEventListener('click', () => {
			window.location.href = '/Product/details/2017-Ninja-650-ABS-KRT-Edition';
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {

	}

}