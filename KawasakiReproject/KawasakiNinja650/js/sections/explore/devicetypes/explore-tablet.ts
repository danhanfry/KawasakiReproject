/// <reference path="../../../commonjs.ts" />
/// <reference path="../../../abstractions/slide.abstraction.ts" />
/// <reference path="../../../../../scripts/typings/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/tweenmax.d.ts" />
/// <reference path="../../../../../scripts/typings/scrollmagic.d.ts" />

class ExploreTablet extends ExperienceSlide {

	private tiles: ICapturedTilesDimension[] = [
		{ elm: "#stylingId", x: -100, y: -100, imgX: -900, imgY: -100, imgScale: 0.23 },
		{ elm: "#comfortId", x: 0, y: -130, imgX: -1320, imgY: 200, imgScale: 0.4 },
		{ elm: "#convenienceId", x: -180, y: -40, imgX: -870, imgY: -700, imgScale: 0.5 },
		{ elm: "#powerId", x: 230, y: -190, imgX: -900, imgY: -730, imgScale: 0.5 },
		{ elm: "#handlingId", x: 120, y: -0, imgX: -500, imgY: 0, imgScale: 0.25 },
		{ elm: "#racingHeritageId", x: 0, y: 120, imgX: -300, imgY: -800, imgScale: 0.5 }
	];

	private tabletTiles: ICapturedTabletTilesDimension[] = [
		{ elm: "styling", x: -510, y: -300, width: 0, height: 0 },
		{ elm: "comfort", x: -300, y: -150, width: 0, height: 0 },
		{ elm: "convenience", x: -400, y: -355, width: 0, height: 0 },
		{ elm: "power", x: -650, y: -630, width: 0, height: 0 },
		{ elm: "handling", x: -155, y: -50, width: 0, height: 0 },
		{ elm: "racingHeritage", x: -400, y: -300, width: 0, height: 0 }
	];

	private specOriginalDimensions = { width: 1920, height: 1080 };

	/* Saves s3 Animated State*/
	private s3Animated: boolean = false;
	private s3AlreadyTriggerHoverOnInit: boolean = false;
	/* Capture current selected s3 image tile*/
	private s3CurrentSelectedTile: number = -1;
	private s3CurrentSelectedTabletTile: number = -1;
	private s3CapturedTile: ICapturedTile;
	private s3ModalExapnded: boolean = false;
	private specModalClicked: boolean = false;

	private currentTileImage;
	private clonedElement;
	private clonedElementImage;
	private currentImageInTileDimensions = { width: 0, height: 0 };
	private currentTileTabletData: ICapturedTabletTilesDimension;

	private Common: Kawasaki.Common = new Kawasaki.Common();

	constructor(public windowWidth: number, public windowHeight: number) {
		super();
	}

	calculation = (): void => {
		var bikeCoordinates = $('#bikeId').position().top + $('#bikeId').height();
		if (this.windowWidth <= 1290) {
			TweenMax.set("#techAnimationId", { left: 0 });
		}
		else {
			TweenMax.set("#techAnimationId", { left: (this.windowWidth / 2) - (1290 / 2) });
		}

		TweenMax.set("#bikeId", { left: (1215 / 2) - ($('#bikeId').width() / 2) });
		var expectedTechAnimationExploreYCoord = 0;

		TweenMax.set("#techAnimationExploreId", {
			left: (this.windowWidth / 2) - ($('.explore-ninja-content').width() / 2),
		});

		var currentWindowHeight = this.windowHeight;
		var currentHeightOfSlideContent = $('#techAnimationExploreId').position().top + $('#techAnimationExploreId').height();
		if (currentWindowHeight < currentHeightOfSlideContent) {
			currentWindowHeight = currentHeightOfSlideContent;
		}

		$('#explore').height(currentWindowHeight).width(this.windowWidth);

		TweenMax.set("#slideThreeScroller", { bottom: 0, left: (this.windowWidth / 2) - ($('#slideThreeScroller').width() / 2) });

		$('#ninjaLogoExploreId').prop('src', 'assets/slide3/ninja_650_logo_tablet.png');
		$('#ninjaLogoExploreId').width("100%");
		$('.spec-parts').height($('.spec-parts').width() / 2);
		TweenMax.set(".non-spec-container", { top: $('.spec-ninja-bike').position().top + ($('.spec-ninja-bike').height() / 3) - 15 });
		$('#explore').height(this.windowHeight).width(this.windowWidth);

		TweenMax.set("#slideThreeScroller", { bottom: "70px", left: (this.windowWidth / 2) - ($('#slideThreeScroller').width() / 2) });

		$('.spec-parts .non-tech-image').each((index, element) => {

			let currentTile = $(this);
			let tileImage:HTMLImageElement;
			let dataTech = currentTile.data('tech');
			let elementDimension: IElementDimension;

			switch (dataTech) {

				case 'power': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/power.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(1.35, this.specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}
				case 'handling': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/handling.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(4, this.specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}
				case 'comfort': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/comfort.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(3, this.specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}
				case 'racingheritage': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/heritage.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(2, this.specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}
				case 'styling': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/styling.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(2, this. specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}
				case 'convenience': {
					tileImage = this.tabletAttachImageToContainer(currentTile, "assets/slide3/convenience.jpg");
					elementDimension = this.Common.scaleByFactorProportionally(2, this.specOriginalDimensions.width, this.specOriginalDimensions.height);
					break;
				}

			};

			$(tileImage).width(elementDimension.width);
			$(tileImage).height(elementDimension.height);

			var tabletTile = this.tabletTiles.filter(function (x) { return x.elm == dataTech; });
			if (tabletTile.length > 0) {
				tabletTile[0].width = $(tileImage).width();
				tabletTile[0].height = $(tileImage).height();
			}
		});
	}

	setTweenMechanism = (): void => {

	}

	eventInitialize = (): void => {

		$('.tech-image:not(.horiz-white-tile):not(.vert-white-tile)').each(function (index, element) {
			$(this).on('mouseover', function () {
				TweenMax.to($(this), .2, { scaleX: 1.05, scaleY: 1.05, ease: Linear.easeInOut, repeat: 0 });
				TweenMax.to($(this), .2, { boxShadow: "rgba(0, 0, 0, 0.078) 10px 10px 30px 30px" });
			});

			$(this).on('mouseout', function () {
				TweenMax.to($(this), .2, { scaleX: 1, scaleY: 1, ease: Linear.easeInOut, repeat: 0 });
				TweenMax.to($(this), .2, { boxShadow: "rgba(0, 0, 0, 0.0470588) 10px 10px 30px 30px" });
			});

		});

		$('.tech-image, .non-tech-image').on('click', (event) => {

			let currentId: string = $(this).attr('id');
			if (currentId === "verticalWhiteLine" || currentId === "horizontalWhiteLine") {
				return;
			}

			this.s3ModalExapnded = true;
			this.currentTileImage = $(this)[0];
			this.specModalClicked = true;
			this.clonedElement = this.Common.createCloneOfElement(this.currentTileImage, { positionTop: 0, positionLeft: 0 });

			document.body.appendChild(this.clonedElement);

			this.s3CurrentSelectedTile = $(this).data('tile-index');
			this.s3CurrentSelectedTabletTile = $(this).data('tech');
			this.s3CapturedTile = { width: "0", height: "0", top: "0", left: "0" };
			this.s3CapturedTile.width = $(this.clonedElement).width().toString();
			this.s3CapturedTile.height = $(this.clonedElement).height().toString();
			this.s3CapturedTile.top = $(this.clonedElement).position().top.toString();
			this.s3CapturedTile.left = $(this.clonedElement).position().left.toString();

			var time = 0.65;
			var ease = Power3.easeOut;
			var delay = 0.08
			var imgWrapper = $(this.clonedElement).children()[0];
			var img = $(imgWrapper).children()[0];
			var windowW = $(window).width();
			var windowH = $(window).height();
			var results = this.Common.scaleProportionally(1920, 1080, windowW, windowH, false);

			TweenMax.to(this.clonedElement, time, { delay: delay, x: 0, y: 0, width: '100%', height: '100%', ease: ease });
			if (imgWrapper) {
				if ($(imgWrapper).is('div')) {
					TweenMax.to(imgWrapper, time, { delay: delay, scale: 1, ease: ease });
				}
				else if ($(imgWrapper).is('img')) {
					this.currentImageInTileDimensions.width = $(imgWrapper).width();
					this.currentImageInTileDimensions.height = $(imgWrapper).height();
					TweenMax.to(imgWrapper, time, { delay: delay, ease: ease, width: "100%", height: "100%", position: 'static' });
				}
			}
			if (img) {
				TweenMax.to(img, time, { delay: delay, x: results.targetleft, y: results.targettop, ease: ease, width: results.width, height: results.height });
			}

			var ypad = 50;

			var specHtml = $(this.currentTileImage).data('tech');
			TweenMax.set('#specificationModal', { x: 0 });

			TweenMax.set('#s3ModalCloseBtn img', { scale: 0, transformOrigin: '50% 70%' });


			$('#modalSpecContentInfo').load("partials/" + specHtml + ".html", function () {
				TweenMax.set('.spec-details-container', { minHeight: $('#specificationModal.modal').outerHeight() * (0.85) });
				this.timelineForExpandingSpecs = new TimelineMax({ paused: true });
				var backing = "<div class='spec-details-backing'></div>"
				var copyArr = [];
				var hardDelay = 0.3;

				TweenMax.set('.spec-details-container', { scaleX: 0, autoAlpha: 1, transformOrigin: '0% 00%' })
				this.timelineForExpandingSpecs.to('.spec-details-container', 0.5, { scaleX: 1, delay: hardDelay, ease: Power3.easeOut });

				TweenMax.set('.spec-title', { opacity: 0, y: ypad });

				copyArr.push(TweenMax.to('.spec-title', 0.9, { delay: hardDelay, y: 0, opacity: 1, ease: Power3.easeOut }));

				$('.spec-details-text-container').find('div').each(function (i, e) {
					TweenMax.set(e, { opacity: 0, y: ypad });
					var d = (i + 1) * (0.02);
					copyArr.push(TweenMax.to(e, 0.9, { delay: hardDelay + d, y: 0, opacity: 1, ease: Power3.easeOut }));
				});
				this.timelineForExpandingSpecs.add(copyArr)
				this.timelineForExpandingSpecs.play();

				TweenMax.to('#s3ModalCloseBtn img', 0.5, { scale: 1, delay: hardDelay + 0.7, ease: Power3.easeOut, overwrite: 'all' });
			});

			/*show modal*/
			document.getElementById('specificationModal').style.display = "block";

			/*prevent scrolling*/
			this.Common.preventScrolling();

		});

		$('#specificationModal .close-btn').on('click', () => {
			var currentTileData = this.tiles[this.s3CurrentSelectedTile];
			var currentTileTabletDataArr = this.tabletTiles.filter(function (x) { return x.elm == this.s3CurrentSelectedTabletTile; });
			this.currentTileTabletData = currentTileTabletDataArr.length > 0 ? currentTileTabletDataArr[0] : <ICapturedTabletTilesDimension>{};
			var time = 0.85;
			var ease = Power4.easeInOut;
			var delay = 0.78
			var imgWrapper = $(this.clonedElement).children()[0];
			var img = $(imgWrapper).children()[0];

			/*animate out copy first*/
			var ypad = 50;
			var d = 0;
			$('.spec-details-text-container').find('div').each(function (i, e) {
				var d = (i + 1) * (0.02);
				TweenMax.to(e, 0.4, { delay: 0, y: ypad, opacity: 0, ease: Power3.easeOut });
			});
			TweenMax.to('.spec-title', 0.4, { delay: d, y: ypad, opacity: 0, ease: Power3.easeOut });

			TweenMax.to('#s3ModalCloseBtn img', 0.35, { scale: 0, delay: 0, overwrite: 'all' });

			TweenMax.to('.spec-details-container', 0.5, { scaleX: 0, delay: 0.65, ease: Power3.easeOut });

			/*animate tile back*/
			TweenMax.to(this.clonedElement, time, { delay: delay, x: this.s3CapturedTile.left, y: this.s3CapturedTile.top, width: this.s3CapturedTile.width, height: this.s3CapturedTile.height, ease: ease });
			if (imgWrapper) {
				if ($(imgWrapper).is('div')) {
					TweenMax.to(imgWrapper, time, { delay: delay, scale: currentTileData.imgScale, ease: ease });
				}
				else if ($(imgWrapper).is('img')) {

					TweenMax.to(imgWrapper, time, {
						delay: delay, ease: ease, x: this.currentTileTabletData.x, y: this.currentTileTabletData.y,
						width: this.currentTileTabletData.width, height: this.currentTileTabletData.height, onComplete: function () {

							document.body.removeChild($('.cloned-element')[0]);
							this.Common.allowScrolling();
							document.getElementById('specificationModal').style.display = "none";

							this.s3CapturedTile = null;
							this.s3CurrentSelectedTile = -1;
							this.s3ModalExapnded = false;
							this.specModalClicked = false;
						}
					});

				}
			}

			if (img) {
				TweenMax.to(img, time, {
					delay: delay, x: currentTileData.imgX, y: currentTileData.imgY, ease: ease, width: 1920, height: 1080, onComplete: function () {

						document.body.removeChild($('.cloned-element')[0]);
						this.Common.allowScrolling();
						document.getElementById('specificationModal').style.display = "none";

						this.s3CapturedTile = null;
						this.s3CurrentSelectedTile = -1;
						this.s3ModalExapnded = false;
						this.specModalClicked = false;
					}
				});
			}
		});

		$("#slideThreeScroller").on('click', function () {
			TweenMax.to(window, 1, { scrollTo: { y: $('#social').offset().top - 65 } });
		});
	}

	resize = (): void => {

	}

	setScrollMagicMechanism = (): void => {

	}

	private tabletAttachImageToContainer = (parent: JQuery, childImgSrc: string): HTMLImageElement => {

		var tileImage = document.createElement('img');
		tileImage.src = childImgSrc;
		parent.append(tileImage);

		return tileImage;
	}
}