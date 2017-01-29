var Kawasaki;
(function (Kawasaki) {
    var Common = (function () {
        function Common() {
            var _this = this;
            this.kawasakiGreen = '#66cc33';
            this.kawasakiWhite = '#fff';
            this.root = new RegExp(/^(?:body|html)$/i);
            this.userAgent = navigator.userAgent;
            this.isAndroid = function () {
                return /android/i.test(_this.userAgent);
            };
            this.isMobile = function () {
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(_this.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_this.userAgent.substr(0, 4)));
            };
            this.isIELessThanEleven = function () {
                return (_this.userAgent.indexOf("MSIE") >= 0);
            };
            this.isTablet = function () {
                return (/iPad|iPad.*Mobile|Android.*Nexus[\s]+(7|9|10)|SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|Kindle|Silk.*Accelerated|Android.*\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\b|Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)|HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/).test(_this.userAgent);
            };
            this.isTouch = function () {
                return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
            };
            this.isFirefoxBrowser = function () {
                return !!_this.userAgent.match(/firefox/i);
            };
            this.isSafari = function () {
                return (_this.userAgent.toLowerCase().indexOf('safari') > 0 && _this.userAgent.toLowerCase().indexOf('chrome') < 0);
            };
            this.preventScrolling = function () {
                if (_this.isMobile() || _this.isTablet()) {
                    document.ontouchmove = function (event) {
                        event.preventDefault();
                    };
                }
                else {
                    document.getElementsByTagName("html")[0].style.overflowY = 'hidden';
                }
            };
            this.allowScrolling = function () {
                if (_this.isMobile() || _this.isTablet()) {
                    document.ontouchmove = function (event) {
                        return true;
                    };
                }
                else {
                    document.getElementsByTagName("html")[0].style.overflowY = '';
                }
            };
            this.getMatrixOfTransform = function (element) {
                var elementMatrix = window.getComputedStyle(element, null).transform;
                return elementMatrix.replace(/[^0-9\-.,]/g, '').split(',');
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
        return Common;
    }());
    Kawasaki.Common = Common;
})(Kawasaki || (Kawasaki = {}));
