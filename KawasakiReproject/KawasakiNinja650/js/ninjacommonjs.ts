/// <reference path="interfaces/interfaces.d.ts" />
/// <reference path="models/enums/svg-enums.d.ts" />
/// <reference path="../../scripts/core/commonjs.ts" />

namespace Kawasaki {
	export class NinjaCommon {

		public kawasakiGreen: string = '#66cc33';
		public kawasakiWhite: string = '#fff';
		private root: RegExp = new RegExp(/^(?:body|html)$/i);
		private Common: Kawasaki.Common = new Kawasaki.Common();

		constructor() {

		}

		public matches = (el: Element, selector: string) => {
			return (el.matches || (<any>el).matchesSelector || el.msMatchesSelector ||
				(<any>el).mozMatchesSelector || el.webkitMatchesSelector ||
				(<any>el).oMatchesSelector).call(el, selector);
		}

		public isSelectorMatchesArrayElements = (arrayOfElements: HTMLCollectionOf<Element>, selector: string): boolean => {

			let isFound: boolean = false;

			for (let i = 0; i < arrayOfElements.length; i++) {
				let element: Element = arrayOfElements[i];
				if (this.matches(element, selector)) {
					isFound = true;
				}
			}

			return isFound;
		}


		public showGenericModalOrientationChange = (modalId, modalContentId): void => {

			var elementModal = document.getElementById(modalId);
			elementModal.style.display = 'block';

			var deviceRotate = document.createElement('img');
			deviceRotate.id = "imageRotateImg";
			deviceRotate.className = "image-rotate-img";
			deviceRotate.src = "assets/device_rotate.svg";
			deviceRotate.width = 182;

			var deviceRotateDiv = document.createElement('div');
			deviceRotateDiv.id = "mobileRotateContainer";
			deviceRotateDiv.className = "center-items";
			deviceRotateDiv.appendChild(deviceRotate);

			var modalOrientationContent = document.createElement('p');
			modalOrientationContent.id = "modalOrientationId";
			modalOrientationContent.className = "modal-orientation";
			modalOrientationContent.innerHTML = "Please rotate device";

			document.getElementById(modalContentId).appendChild(deviceRotateDiv);
			document.getElementById(modalContentId).appendChild(modalOrientationContent);
		};

		public hideGenericModalOrientationChange = (modalId, modalContentId) => {
			var elementModal = document.getElementById(modalId);
			elementModal.style.display = 'none';
			document.getElementById(modalContentId).innerHTML = '';
		};

		public ninjaOrientationChange = (windowOrientation: string | number, deviceType: string):void => {

		let allModals: HTMLCollectionOf<Element> = document.getElementsByClassName('.modal');

		if (deviceType === "tablet") {
			switch (windowOrientation) {
				case -90:
				case 90:
					/*landscape*/

					this.hideGenericModalOrientationChange('genericUseModal', 'genericModalContent');

					TweenMax.to(".fixed-nav-bar", 1, { y: 0 });

					//if (!$('.modal').is(':visible')) {
					if (!this.isSelectorMatchesArrayElements(allModals, ':visible')) {
						this.Common.allowScrolling();
					}

					if (initOrientation == 0 || initOrientation == 180) {
						//callAllSetupMethods();
						initOrientation = windowOrientation;
					}

					break;
				case 0:
				case 180:
					/*portrait*/

					this.showGenericModalOrientationChange('genericUseModal', 'genericModalContent');
					TweenMax.fromTo("#imageRotateImg", 2, { rotation: 0 }, { rotation: 90, repeat: -1 });
					TweenMax.to(".fixed-nav-bar", 1, { y: -100 });

					//if ($('.modal').is(':visible')) {
					if (this.isSelectorMatchesArrayElements(allModals, ':visible')) {
						this.Common.preventScrolling();
					}
					break;
			}
		}
		else if (deviceType === "mobile") {
			switch (windowOrientation) {
				case -90:
				case 90:
					/*landscape*/
					if (!this.isCommericalPlaying()) {

						this.showGenericModalOrientationChange('genericUseModal', 'genericModalContent');

						TweenMax.fromTo("#imageRotateImg", 2, { rotation: 90, scale: 0.4 }, { scale: 0.4, rotation: 0, repeat: -1 });
						TweenMax.to(".fixed-nav-bar", 1, {
							y: -100
						});

						//if ($('.modal').is(':visible')) {
						if (this.isSelectorMatchesArrayElements(allModals, ':visible')) {
							this.Common.preventScrolling();
						}
					}
					break;
				case 0:
				case 180:
					/*portrait*/

					this.hideGenericModalOrientationChange('genericUseModal', 'genericModalContent');
					TweenMax.to(".fixed-nav-bar", 1, {
						y: 0
					});

					//if (!$('.modal').is(':visible')) {
					if (!this.isSelectorMatchesArrayElements(allModals, ':visible')) {
						this.Common.allowScrolling();
					}

					if (initOrientation == 90 || initOrientation == -90) {
						//callAllSetupMethods();
						initOrientation = windowOrientation;
					}

					break;
			}
		}
	}

		public isCommericalPlaying = (): boolean => {
			var videoElement: HTMLVideoElement = <HTMLVideoElement>document.getElementById('videoPlayer');
			var isCommercialCloseButtonShown: boolean = document.getElementById('firstSlideCloseContainerId').style.display === "block";
			return (videoElement.currentTime > 0 && !videoElement.paused &&
				!videoElement.ended && videoElement.readyState > 2) && isCommercialCloseButtonShown;

		};

		public createCloneOfElement = (originalNode: HTMLElement, positionLeftTop: IElementPosition): HTMLElement => {

			var originalContainment = originalNode.getBoundingClientRect();
			var clonedElement: HTMLElement = <HTMLElement>originalNode.cloneNode(true);
			clonedElement.style.width = originalContainment.width + 'px';
			clonedElement.style.height = originalContainment.height + 'px';
			clonedElement.style.transform = 'translate3d(' + originalContainment.left + 'px, ' + originalContainment.top + 'px, 0)';

			clonedElement.style.left = positionLeftTop.positionLeft.toString();
			clonedElement.style.top = positionLeftTop.positionTop.toString();
			clonedElement.style.backgroundSize = "cover";

			clonedElement.style.height = originalContainment.height + 'px';
			clonedElement.style.height = originalContainment.height + 'px';

			if (clonedElement.classList) {
				clonedElement.classList.add('cloned-element');
			}
			else {
				clonedElement.className += ' cloned-element';
			}

			return clonedElement;
		}

		public createSVGElement = (kawasakiSvgModel: IKawasakiSvgElementProperties): SVGSVGElement => {

			var xyWidthHeight: string = (kawasakiSvgModel.x.replace('px', '') + " " +
				kawasakiSvgModel.y.replace('px', '') + " " +
				kawasakiSvgModel.width.replace('px', '') + " " +
				kawasakiSvgModel.height.replace('px', ''));

			var svgElement: SVGSVGElement = <SVGSVGElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Svg.toString());
			svgElement.id = kawasakiSvgModel.id;
			if (kawasakiSvgModel.className.trim() !== "") {
				svgElement.classList.add(kawasakiSvgModel.className);
			}

			svgElement.setAttribute('version', '1.1');
			svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
			svgElement.setAttribute('xml:space', 'preserve');

			svgElement.setAttribute('x', kawasakiSvgModel.x);
			svgElement.setAttribute('y', kawasakiSvgModel.y);
			svgElement.setAttribute('width', kawasakiSvgModel.width);
			svgElement.setAttribute('height', kawasakiSvgModel.height);

			svgElement.setAttribute('viewBox', xyWidthHeight);
			svgElement.setAttribute('enable-background', xyWidthHeight);

			return svgElement;
		}

		public createSVGPolygon = (fill: string, stroke: string, strokeWidth: string, strokeLinecap: string,
			strokeLinejoin: string, strokeMiterlimit: string, points: string[]): SVGPolygonElement => {

			var polygonSvgElement: SVGPolygonElement = <SVGPolygonElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Polygon.toString());
			polygonSvgElement.style.fill = fill;
			polygonSvgElement.style.stroke = stroke;
			polygonSvgElement.style.strokeWidth = strokeWidth;
			polygonSvgElement.style.strokeLinecap = strokeLinecap;
			polygonSvgElement.style.strokeLinejoin = strokeLinejoin;;
			polygonSvgElement.style.strokeMiterlimit = strokeMiterlimit;
			polygonSvgElement.setAttribute('points', points.join(' '));

			return polygonSvgElement;
		}

		public createSVGDefintion = (): SVGDefsElement => {

			let definition: SVGDefsElement = <SVGDefsElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Defs.toString());
			return definition;
		}

		public createSVGUses = (prop: ISVGUseTagProperties): SVGUseElement => {
			let usesTag: SVGUseElement = <SVGUseElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Use.toString());
			usesTag.id = prop.id;
			usesTag.style.stroke = prop.stroke;
			usesTag.style.mask = prop.mask;
			usesTag.style.strokeWidth = prop.strokeWidth;
			usesTag.setAttribute('xlink:href', prop.usesId);

			return usesTag;
		}

		public createSVGG = (prop: ISVGGTagProperties): SVGGElement => {
			let gTag: SVGGElement = <SVGGElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.G.toString());
			gTag.id = prop.id;
			gTag.style.stroke = prop.stroke;
			gTag.style.strokeWidth = prop.strokeWidth;
			gTag.style.fill = prop.fill;
			gTag.style.fillRule = prop.fillRule;
			gTag.setAttribute('transform', prop.transform);

			return gTag;
		}

		public createSVGPath = (prop: ISVGPathTagProperties): SVGPathElement => {
			let pathTag: SVGPathElement = <SVGPathElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Path.toString());
			pathTag.id = prop.id;
			pathTag.style.fill = prop.fill;
			pathTag.setAttribute('d', prop.d);

			return pathTag;
		}

		public createSVGRect = (prop: ISVGRectTagProperties): SVGRectElement => {
			let rectTag: SVGRectElement = <SVGRectElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Rect.toString());
			rectTag.id = prop.id;
			rectTag.setAttribute('x', prop.x);
			rectTag.setAttribute('y', prop.y);
			rectTag.setAttribute('width', prop.width);
			rectTag.setAttribute('height', prop.height);
			rectTag.setAttribute('rx', prop.rx);

			return rectTag;
		}

		public createSVGMask = (prop: ISVGMaskTagProperties): SVGMaskElement => {
			let maskTag: SVGMaskElement = <SVGMaskElement>document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Mask.toString());
			maskTag.id = prop.id;
			maskTag.style.fill = prop.fill;
			maskTag.setAttribute('x', prop.x);
			maskTag.setAttribute('y', prop.y);
			maskTag.setAttribute('width', prop.width);
			maskTag.setAttribute('height', prop.height);
			maskTag.setAttribute('maskContentUnits', prop.maskContentUnits);
			maskTag.setAttribute('maskUnits', prop.maskUnits);

			return maskTag;
		}

		public createPointList = (points: string[]): SVGPointList => {

			var pointsList: SVGPointList = new SVGPointList();
			for (let i = 0; i < points.length; i++) {
				var point: SVGPoint = new SVGPoint();
				let pointArray: string[] = points[i].split(',');
				if (pointArray.length === 2) {
					point.x = parseInt(pointArray[0], 10);
					point.y = parseInt(pointArray[1], 10);

					pointsList.appendItem(point);
				}
			}

			return pointsList;
		}

		public scaleProportionally = (srcwidth: number, srcheight: number, targetwidth: number,
			targetheight: number, fLetterBox: boolean): IScaleProportional => {

			var result: IScaleProportional = { width: 0, height: 0, scaleToTargetWidth: true, targetleft: 0, targettop: 0 };

			if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
				return result;
			}

			/* scale to the target width*/
			let scaleX1 = targetwidth;
			let scaleY1 = (srcheight * targetwidth) / srcwidth;

			/* scale to the target height*/
			let scaleX2 = (srcwidth * targetheight) / srcheight;
			let scaleY2 = targetheight;

			/* now figure out which one we should use*/
			let fScaleOnWidth = (scaleX2 > targetwidth);
			if (fScaleOnWidth) {
				fScaleOnWidth = fLetterBox;
			}
			else {
				fScaleOnWidth = !fLetterBox;
			}

			if (fScaleOnWidth) {
				result.width = Math.floor(scaleX1);
				result.height = Math.floor(scaleY1);
				result.scaleToTargetWidth = true;
			}
			else {
				result.width = Math.floor(scaleX2);
				result.height = Math.floor(scaleY2);
				result.scaleToTargetWidth = false;
			}

			result.targetleft = Math.floor((targetwidth - result.width) / 2);
			result.targettop = Math.floor((targetheight - result.height) / 2);

			return result;
		}

		public scaleByFactorProportionally = (factor: number, srcWidth: number, srcHeight: number): IElementDimension => {
			return <IElementDimension>{ width: (srcWidth / factor), height: (srcHeight / factor) };
		}

		public elementDimensions = (element: HTMLElement | Window | Document): IDimensionPosition => {

			let width: number = 0, height: number = 0, outerHeight: number = 0, outerWidth: number = 0,
				outerHeightWithMargin: number = 0, outerWidthWithMargin: number = 0,
				elementPositions: IElementPosition = { positionLeft: 0, positionTop: 0 };

			if (element instanceof Window) {
				const currentWindow: Window = (element as Window);
				width = outerWidth = outerWidthWithMargin = currentWindow.document.documentElement["clientWidth"];
				height = outerHeight = outerHeightWithMargin = currentWindow.document.documentElement["clientHeight"];
			}
			else if (element instanceof Document) {
				const currentDocument: Document = (element as Document);
				const currentDocElement: HTMLElement = currentDocument.documentElement;
				const currentBody: HTMLElement = currentDocument.body;

				width = outerWidth = outerWidthWithMargin = Math.max(currentBody["scrollWidth"],
					currentDocElement["scrollWidth"], currentBody["offsetWidth"],
					currentDocElement["offsetWidth"], currentDocElement["clientWidth"]);

				height = outerHeight = outerHeightWithMargin = Math.max(currentBody["scrollHeight"],
					currentDocElement["scrollHeight"], currentBody["offsetHeight"],
					currentDocElement["offsetHeight"], currentDocElement["clientHeight"]);
			}
			else {
				const currentElement: HTMLElement = (element as HTMLElement);
				const elementWidth = currentElement.offsetWidth;
				const elementHeight = currentElement.offsetHeight;

				const computedCssElement: CSSStyleDeclaration = this.getComputerStyleByElement(currentElement);
				const supportBoxSizing: boolean = ('box-sizing' in document.body.style) &&
					((computedCssElement.boxSizing || computedCssElement.webkitBoxSizing) === 'border-box');

				width = elementWidth + parseInt(computedCssElement.paddingLeft) +
					parseInt(computedCssElement.paddingRight) + parseInt(computedCssElement.borderLeftWidth) +
					parseInt(computedCssElement.borderRightWidth);

				height = elementHeight + parseInt(computedCssElement.paddingTop) +
					parseInt(computedCssElement.paddingBottom) + parseInt(computedCssElement.borderTopWidth) +
					parseInt(computedCssElement.borderBottomWidth);

				outerHeight = elementHeight;
				outerWidth = elementWidth;

				outerHeightWithMargin = elementHeight + parseInt(computedCssElement.marginTop) +
					parseInt(computedCssElement.marginBottom);

				outerWidthWithMargin = elementWidth + parseInt(computedCssElement.marginLeft) +
					parseInt(computedCssElement.marginRight);

				elementPositions = this.getPositionOfElement(currentElement, computedCssElement);
			}

			return {
				width: width,
				height: height,
				outerWidth: outerWidth,
				outerHeight: outerHeight,
				outerWidthWithMargin: outerWidthWithMargin,
				outerHeightWithMargin: outerHeightWithMargin,
				positionLeft: elementPositions.positionLeft,
				positionTop: elementPositions.positionTop
			};
		}

		private getComputerStyleByElement = (element: HTMLElement): CSSStyleDeclaration => {
			return window.getComputedStyle(element, null);
		}

		private getPositionOfElement = (element: HTMLElement, elementComputedStyle: CSSStyleDeclaration): IElementPosition => {

			const currentElement: HTMLElement = (element as HTMLElement);
			var offsetParent: Element = currentElement.offsetParent || document.body;

			while (offsetParent && (!this.root.test(offsetParent.nodeName) && elementComputedStyle.position === "static")) {
				offsetParent = (<HTMLElement>offsetParent).offsetParent;
			}

			const finalOffsetParent: HTMLElement = (<HTMLElement>offsetParent) || document.body;
			const finalOffsetParentCssDeclr: CSSStyleDeclaration = this.getComputerStyleByElement(finalOffsetParent);

			let offset: IElementPosition = this.getElementOffset(currentElement);
			let parentOffset: IElementPosition = this.root.test(finalOffsetParent.nodeName) ?
				{ positionLeft: 0, positionTop: 0 } : this.getElementOffset(finalOffsetParent);

			offset.positionTop -= parseFloat(elementComputedStyle.marginTop) || 0;
			offset.positionLeft -= parseFloat(elementComputedStyle.marginLeft) || 0;

			parentOffset.positionTop += parseFloat(finalOffsetParentCssDeclr.borderTopWidth) || 0;
			parentOffset.positionLeft += parseFloat(finalOffsetParentCssDeclr.borderLeftWidth) || 0;

			return {
				positionLeft: offset.positionTop - parentOffset.positionTop,
				positionTop: offset.positionLeft - parentOffset.positionLeft
			};
		}

		private getElementOffset = (currentElement: HTMLElement): IElementPosition => {
			const doc: Document = currentElement && currentElement.ownerDocument;
			const docElement: HTMLElement = doc.documentElement;

			const rectBox: ClientRect = currentElement.getBoundingClientRect();
			const windowOfElement: Window = doc.defaultView;

			const clientTop: number = docElement.clientTop || doc.body.clientTop || 0;
			const clientLeft: number = docElement.clientLeft || doc.body.clientLeft || 0;
			const scrollTop: number = windowOfElement.pageYOffset || docElement.scrollTop;
			const scrollLeft: number = windowOfElement.pageXOffset || docElement.scrollLeft;

			return {
				positionLeft: rectBox.top + scrollTop - clientTop,
				positionTop: rectBox.left + scrollLeft - clientLeft
			};

		}
	}
}