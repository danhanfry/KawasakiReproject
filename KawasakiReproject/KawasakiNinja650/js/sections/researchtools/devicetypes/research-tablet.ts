/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="../../../../../scripts/typings/scrollmagic.d.ts" />

class ResearchTablet extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		$('#researchtools').width(this.windowWidth);

		/*mostly everything below is setting positioning based on window dimensions and other containers*/

		/*2017 Year Image*/
		TweenMax.set("#researchYear", { left: ((this.windowWidth / 2)) - ($('#researchYear').width() / 2) });
		if (this.Common.isSafari() && !this.Common.isMobile()) {
			TweenMax.set("#researchYear img", {
				width: '85%'
			});
		}

		/*NINJA Product Image*/
		TweenMax.set("#researchNinja", {
			left: ((this.windowWidth / 2)) - ($('#researchNinja').width() / 2),
			top: $('#researchYear').position().top + $('#researchYear').height() + 20
		});

		if (this.Common.isSafari() && !this.Common.isMobile()) {
			if (this.windowWidth > 1910) {
				TweenMax.set("#researchNinja", {
					top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3) + 15
				});
			}
		}

		/*In Dealership Text Image*/
		TweenMax.set("#researchInDealership", {
			left: ((this.windowWidth / 2)) - ($('#researchInDealership').width() / 2),
			top: $('#researchToolText').position().top + $('#researchToolText').height() - 10
		});

		/*Research Tools Image only desktop since this is text and calculation is unreliable, tablet and mobile is done via css*/
		if (!this.Common.isTablet()) {
			var researchToolTxtHalfWidth = $('#researchToolText').width() / 2;
			TweenMax.set(".research-research-txt", { left: (this.windowWidth / 2) - researchToolTxtHalfWidth });
		}

		/*The columns for research, shop and finance*/
		TweenMax.set(".footer-tiles", { height: $('#researchtools').height() / 2 });
		var researchToolsColumnsLeftPosition = (this.windowWidth / 2) - ($('#researchListing').width() / 2);
		TweenMax.set("#researchListing", {
			left: researchToolsColumnsLeftPosition > 5 ? researchToolsColumnsLeftPosition : 5,
			top: $('#researchInDealership').position().top + $('#researchInDealership').height() - 50
		});

		/*the links*/
		var researchListingHeight = $('#researchListing').height();
		var restartExperienceLeftPosition = (this.windowWidth / 2) - ($('#researchListing').width() / 2) - ($('.research-restart-btn img').height() / 2);
		TweenMax.set("#restartExperienceId", {
			left: restartExperienceLeftPosition > 0 ? restartExperienceLeftPosition : 0,
			top: $('#researchListing').position().top + ($('#researchListing').height())
		});

		if (this.windowWidth < 950) {
			TweenMax.set("#exitExperienceId", {
				left: $('#researchToolText').position().left + ($('#researchToolText').width() / 2),
				top: $('#researchListing').position().top + ($('#researchListing').height())
			});
		}
		else {
			TweenMax.set("#exitExperienceId", {
				left: $('#researchToolText').position().left + ($('#researchToolText').width() / 3 * 2),
				top: $('#restartExperienceId').position().top
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
			TweenMax.to(window, 2, { scrollTo: { y: 0, x: 0 } });
		});

		document.getElementById('exitExperienceId').addEventListener('click', () => {
			window.location.href = '/Products/2017-Ninja-650-ABS-KRT-Edition';
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {

	}

}