var Kawasaki;
(function (Kawasaki) {
    var NinjaCommon = (function () {
        function NinjaCommon() {
            var _this = this;
            this.kawasakiGreen = '#66cc33';
            this.kawasakiWhite = '#fff';
            this.root = new RegExp(/^(?:body|html)$/i);
            this.Common = new Kawasaki.Common();
            this.matches = function (el, selector) {
                return (el.matches || el.matchesSelector || el.msMatchesSelector ||
                    el.mozMatchesSelector || el.webkitMatchesSelector ||
                    el.oMatchesSelector).call(el, selector);
            };
            this.isSelectorMatchesArrayElements = function (arrayOfElements, selector) {
                var isFound = false;
                for (var i = 0; i < arrayOfElements.length; i++) {
                    var element = arrayOfElements[i];
                    if (_this.matches(element, selector)) {
                        isFound = true;
                    }
                }
                return isFound;
            };
            this.showGenericModalOrientationChange = function (modalId, modalContentId) {
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
            this.hideGenericModalOrientationChange = function (modalId, modalContentId) {
                var elementModal = document.getElementById(modalId);
                elementModal.style.display = 'none';
                document.getElementById(modalContentId).innerHTML = '';
            };
            this.ninjaOrientationChange = function (windowOrientation, deviceType) {
                var allModals = document.getElementsByClassName('.modal');
                if (deviceType === "tablet") {
                    switch (windowOrientation) {
                        case -90:
                        case 90:
                            _this.hideGenericModalOrientationChange('genericUseModal', 'genericModalContent');
                            TweenMax.to(".fixed-nav-bar", 1, { y: 0 });
                            if (!_this.isSelectorMatchesArrayElements(allModals, ':visible')) {
                                _this.Common.allowScrolling();
                            }
                            if (initOrientation == 0 || initOrientation == 180) {
                                initOrientation = windowOrientation;
                            }
                            break;
                        case 0:
                        case 180:
                            _this.showGenericModalOrientationChange('genericUseModal', 'genericModalContent');
                            TweenMax.fromTo("#imageRotateImg", 2, { rotation: 0 }, { rotation: 90, repeat: -1 });
                            TweenMax.to(".fixed-nav-bar", 1, { y: -100 });
                            if (_this.isSelectorMatchesArrayElements(allModals, ':visible')) {
                                _this.Common.preventScrolling();
                            }
                            break;
                    }
                }
                else if (deviceType === "mobile") {
                    switch (windowOrientation) {
                        case -90:
                        case 90:
                            if (!_this.isCommericalPlaying()) {
                                _this.showGenericModalOrientationChange('genericUseModal', 'genericModalContent');
                                TweenMax.fromTo("#imageRotateImg", 2, { rotation: 90, scale: 0.4 }, { scale: 0.4, rotation: 0, repeat: -1 });
                                TweenMax.to(".fixed-nav-bar", 1, {
                                    y: -100
                                });
                                if (_this.isSelectorMatchesArrayElements(allModals, ':visible')) {
                                    _this.Common.preventScrolling();
                                }
                            }
                            break;
                        case 0:
                        case 180:
                            _this.hideGenericModalOrientationChange('genericUseModal', 'genericModalContent');
                            TweenMax.to(".fixed-nav-bar", 1, {
                                y: 0
                            });
                            if (!_this.isSelectorMatchesArrayElements(allModals, ':visible')) {
                                _this.Common.allowScrolling();
                            }
                            if (initOrientation == 90 || initOrientation == -90) {
                                initOrientation = windowOrientation;
                            }
                            break;
                    }
                }
            };
            this.isCommericalPlaying = function () {
                var videoElement = document.getElementById('videoPlayer');
                var isCommercialCloseButtonShown = document.getElementById('firstSlideCloseContainerId').style.display === "block";
                return (videoElement.currentTime > 0 && !videoElement.paused &&
                    !videoElement.ended && videoElement.readyState > 2) && isCommercialCloseButtonShown;
            };
            this.createCloneOfElement = function (originalNode, positionLeftTop) {
                var originalContainment = originalNode.getBoundingClientRect();
                var clonedElement = originalNode.cloneNode(true);
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
            };
            this.createSVGElement = function (kawasakiSvgModel) {
                var xyWidthHeight = (kawasakiSvgModel.x.replace('px', '') + " " +
                    kawasakiSvgModel.y.replace('px', '') + " " +
                    kawasakiSvgModel.width.replace('px', '') + " " +
                    kawasakiSvgModel.height.replace('px', ''));
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Svg.toString());
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
            };
            this.createSVGPolygon = function (fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin, strokeMiterlimit, points) {
                var polygonSvgElement = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Polygon.toString());
                polygonSvgElement.style.fill = fill;
                polygonSvgElement.style.stroke = stroke;
                polygonSvgElement.style.strokeWidth = strokeWidth;
                polygonSvgElement.style.strokeLinecap = strokeLinecap;
                polygonSvgElement.style.strokeLinejoin = strokeLinejoin;
                ;
                polygonSvgElement.style.strokeMiterlimit = strokeMiterlimit;
                polygonSvgElement.setAttribute('points', points.join(' '));
                return polygonSvgElement;
            };
            this.createSVGDefintion = function () {
                var definition = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Defs.toString());
                return definition;
            };
            this.createSVGUses = function (prop) {
                var usesTag = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Use.toString());
                usesTag.id = prop.id;
                usesTag.style.stroke = prop.stroke;
                usesTag.style.mask = prop.mask;
                usesTag.style.strokeWidth = prop.strokeWidth;
                usesTag.setAttribute('xlink:href', prop.usesId);
                return usesTag;
            };
            this.createSVGG = function (prop) {
                var gTag = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.G.toString());
                gTag.id = prop.id;
                gTag.style.stroke = prop.stroke;
                gTag.style.strokeWidth = prop.strokeWidth;
                gTag.style.fill = prop.fill;
                gTag.style.fillRule = prop.fillRule;
                gTag.setAttribute('transform', prop.transform);
                return gTag;
            };
            this.createSVGPath = function (prop) {
                var pathTag = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Path.toString());
                pathTag.id = prop.id;
                pathTag.style.fill = prop.fill;
                pathTag.setAttribute('d', prop.d);
                return pathTag;
            };
            this.createSVGRect = function (prop) {
                var rectTag = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Rect.toString());
                rectTag.id = prop.id;
                rectTag.setAttribute('x', prop.x);
                rectTag.setAttribute('y', prop.y);
                rectTag.setAttribute('width', prop.width);
                rectTag.setAttribute('height', prop.height);
                rectTag.setAttribute('rx', prop.rx);
                return rectTag;
            };
            this.createSVGMask = function (prop) {
                var maskTag = document.createElementNS('http://www.w3.org/2000/svg', SvgQualifiedName.Mask.toString());
                maskTag.id = prop.id;
                maskTag.style.fill = prop.fill;
                maskTag.setAttribute('x', prop.x);
                maskTag.setAttribute('y', prop.y);
                maskTag.setAttribute('width', prop.width);
                maskTag.setAttribute('height', prop.height);
                maskTag.setAttribute('maskContentUnits', prop.maskContentUnits);
                maskTag.setAttribute('maskUnits', prop.maskUnits);
                return maskTag;
            };
            this.createPointList = function (points) {
                var pointsList = new SVGPointList();
                for (var i = 0; i < points.length; i++) {
                    var point = new SVGPoint();
                    var pointArray = points[i].split(',');
                    if (pointArray.length === 2) {
                        point.x = parseInt(pointArray[0], 10);
                        point.y = parseInt(pointArray[1], 10);
                        pointsList.appendItem(point);
                    }
                }
                return pointsList;
            };
            this.scaleProportionally = function (srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {
                var result = { width: 0, height: 0, scaleToTargetWidth: true, targetleft: 0, targettop: 0 };
                if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
                    return result;
                }
                var scaleX1 = targetwidth;
                var scaleY1 = (srcheight * targetwidth) / srcwidth;
                var scaleX2 = (srcwidth * targetheight) / srcheight;
                var scaleY2 = targetheight;
                var fScaleOnWidth = (scaleX2 > targetwidth);
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
            };
            this.scaleByFactorProportionally = function (factor, srcWidth, srcHeight) {
                return { width: (srcWidth / factor), height: (srcHeight / factor) };
            };
            this.elementDimensions = function (element) {
                var width = 0, height = 0, outerHeight = 0, outerWidth = 0, outerHeightWithMargin = 0, outerWidthWithMargin = 0, elementPositions = { positionLeft: 0, positionTop: 0 };
                if (element instanceof Window) {
                    var currentWindow = element;
                    width = outerWidth = outerWidthWithMargin = currentWindow.document.documentElement["clientWidth"];
                    height = outerHeight = outerHeightWithMargin = currentWindow.document.documentElement["clientHeight"];
                }
                else if (element instanceof Document) {
                    var currentDocument = element;
                    var currentDocElement = currentDocument.documentElement;
                    var currentBody = currentDocument.body;
                    width = outerWidth = outerWidthWithMargin = Math.max(currentBody["scrollWidth"], currentDocElement["scrollWidth"], currentBody["offsetWidth"], currentDocElement["offsetWidth"], currentDocElement["clientWidth"]);
                    height = outerHeight = outerHeightWithMargin = Math.max(currentBody["scrollHeight"], currentDocElement["scrollHeight"], currentBody["offsetHeight"], currentDocElement["offsetHeight"], currentDocElement["clientHeight"]);
                }
                else {
                    var currentElement = element;
                    var elementWidth = currentElement.offsetWidth;
                    var elementHeight = currentElement.offsetHeight;
                    var computedCssElement = _this.getComputerStyleByElement(currentElement);
                    var supportBoxSizing = ('box-sizing' in document.body.style) &&
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
                    elementPositions = _this.getPositionOfElement(currentElement, computedCssElement);
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
            };
            this.getComputerStyleByElement = function (element) {
                return window.getComputedStyle(element, null);
            };
            this.getPositionOfElement = function (element, elementComputedStyle) {
                var currentElement = element;
                var offsetParent = currentElement.offsetParent || document.body;
                while (offsetParent && (!_this.root.test(offsetParent.nodeName) && elementComputedStyle.position === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                var finalOffsetParent = offsetParent || document.body;
                var finalOffsetParentCssDeclr = _this.getComputerStyleByElement(finalOffsetParent);
                var offset = _this.getElementOffset(currentElement);
                var parentOffset = _this.root.test(finalOffsetParent.nodeName) ?
                    { positionLeft: 0, positionTop: 0 } : _this.getElementOffset(finalOffsetParent);
                offset.positionTop -= parseFloat(elementComputedStyle.marginTop) || 0;
                offset.positionLeft -= parseFloat(elementComputedStyle.marginLeft) || 0;
                parentOffset.positionTop += parseFloat(finalOffsetParentCssDeclr.borderTopWidth) || 0;
                parentOffset.positionLeft += parseFloat(finalOffsetParentCssDeclr.borderLeftWidth) || 0;
                return {
                    positionLeft: offset.positionTop - parentOffset.positionTop,
                    positionTop: offset.positionLeft - parentOffset.positionLeft
                };
            };
            this.getElementOffset = function (currentElement) {
                var doc = currentElement && currentElement.ownerDocument;
                var docElement = doc.documentElement;
                var rectBox = currentElement.getBoundingClientRect();
                var windowOfElement = doc.defaultView;
                var clientTop = docElement.clientTop || doc.body.clientTop || 0;
                var clientLeft = docElement.clientLeft || doc.body.clientLeft || 0;
                var scrollTop = windowOfElement.pageYOffset || docElement.scrollTop;
                var scrollLeft = windowOfElement.pageXOffset || docElement.scrollLeft;
                return {
                    positionLeft: rectBox.top + scrollTop - clientTop,
                    positionTop: rectBox.left + scrollLeft - clientLeft
                };
            };
        }
        return NinjaCommon;
    }());
    Kawasaki.NinjaCommon = NinjaCommon;
})(Kawasaki || (Kawasaki = {}));
