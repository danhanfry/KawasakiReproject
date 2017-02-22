/// <reference path="../../../../../scripts/core/commonjs.ts" />
/// <reference path="../../../ninjacommonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="../../../../../scripts/typings/scrollmagic.d.ts" />

class ResearchDesktop extends ExperienceSlide {

	private Common: Kawasaki.Common = new Kawasaki.Common();
	private NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {

		$('#researchtools').width(this.windowWidth);

		/*mostly everything below is setting positioning based on window dimensions and other containers*/

		/*2017 Year Image*/
		TweenMax.set("#researchYear", { left: ((this.windowWidth / 2)) - ($('#researchYear').width() / 2) });
		if (this.Common.isSafari()) {
			TweenMax.set("#researchYear img", {
				width: '85%'
			});
		}

		/*NINJA Product Image*/
		TweenMax.set("#researchNinja", {
			left: ((this.windowWidth / 2)) - ($('#researchNinja').width() / 2),
			top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3)
		});

		if (this.Common.isSafari()) {
			if (this.windowWidth > 1910) {
				TweenMax.set("#researchNinja", {
					top: $('#researchToolText').position().top + ($('#researchToolText').height() / 3) + 15
				});
			}
		}

		/*In Dealership Text Image*/
		TweenMax.set("#researchInDealership", {
			left: ((this.windowWidth / 2)) - ($('#researchInDealership').width() / 2),
			top: $('#researchToolContainerId').outerHeight() - $('#researchYear').height() + $('#researchNinja').height()
		});

		/*Research Tools Image only desktop since this is text and calculation is unreliable, tablet and mobile is done via css*/
		var researchToolTxtHalfWidth = $('#researchToolText').width() / 2;
		TweenMax.set(".research-research-txt", { left: (this.windowWidth / 2) - researchToolTxtHalfWidth });

		/*The columns for research, shop and finance*/
		TweenMax.set(".footer-tiles", { height: $('#researchtools').height() - 160 - 21 - 220 - 100 });
		var researchToolsColumnsLeftPosition = (this.windowWidth / 2) - ($('#researchListing').width() / 2);
		TweenMax.set("#researchListing", {
			left: researchToolsColumnsLeftPosition > 5 ? researchToolsColumnsLeftPosition : 5,
			top: $('#researchToolContainerId').outerHeight() - $('#researchYear').height() + $('#researchNinja').height() + $('#researchInDealership').height()
		});

		/*the links*/
		var researchListingHeight = $('#researchListing').height();
		var restartExperienceLeftPosition = (this.windowWidth / 2) - ($('#researchListing').width() / 2) - ($('.research-restart-btn img').height() / 2);
		TweenMax.set("#restartExperienceId", {
			left: restartExperienceLeftPosition > 0 ? restartExperienceLeftPosition : 0,
			top: ($('#researchtools').height() - researchListingHeight) + (researchListingHeight / 2)
		});

		if (this.windowWidth < 950) {
			TweenMax.set("#exitExperienceId", {
				left: $('#researchToolText').position().left + ($('#researchToolText').width() / 2),
				top: $('#restartExperienceId').position().top
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

		this.setTweenMechanism();
	}

	setTweenMechanism = (): void => {
		TweenMax.set(".research-in-dealership", { y: 50 });
	}

	eventInitialize = (): void => {
		document.getElementById('restartExperienceId').addEventListener('click', (event: MouseEvent) => {

			let body = document.body;
			body.classList.add("scroll-to-top");
			body.style.webkitTransform = "translate(0, 0)";
			body.style.transform = "translate(0, 0)";

			window.setTimeout(function () {
				body.classList.remove("scroll-to-top");
				body.style.cssText = "";
				window.scrollTo(0, 0);
			}, 900);

			event.preventDefault();

		}, false);

		document.getElementById('exitExperienceId').addEventListener('click', () => {
			window.location.href = '/Products/2017-Ninja-650-ABS-KRT-Edition';
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#researchtools",
			offset: 0,
		})
		.setTween(this.getFadeTween())
		.addTo(controller);

		var scrambleScene = new ScrollMagic.Scene({
			triggerElement: "#researchtools",
			offset: 0,
		})
		.setTween(this.getScrambleText())
		.addTo(controller);
	}

	private getFadeTween = (): Timeline => {
		return new TimelineMax()
			.to(".research-text-year", 1, { autoAlpha: 1, ease: Linear.easeInOut })
			.to('.research-logo', 1, { autoAlpha: 1, ease: Linear.easeInOut }, "-=1")
			.to('.research-in-dealership', 0.7, { y: 0, autoAlpha: 1, ease: Linear.easeInOut }, "-=1")
			.to('#researchNumberedContainer', 0.5, { autoAlpha: 1, ease: Linear.easeInOut }, "-=0.5")
			.to('#restartExperienceId', 1, { autoAlpha: 1, ease: Linear.easeInOut });
	}

	private getScrambleText = (): Timeline => {
		return new TimelineMax()
			.to("#researchToolText", 1.5, { opacity: 1 })
			.to("#researchToolsBackgroundId", 1.5, { scrambleText: { text: "RESEARCH TOOLS", chars: "upperCase", revealDelay: 0.5, tweenLength: false, ease: Linear.easeNone } }, "-=2.0")
	}

}