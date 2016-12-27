var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./components/commercialvideo", "./components/commercialcontent"], function (require, exports, commercialvideo_1, commercialcontent_1) {
    "use strict";
    var Commercial = (function (_super) {
        __extends(Commercial, _super);
        function Commercial() {
            _super.apply(this, arguments);
        }
        Commercial.prototype.componentDidMount = function () {
            var contentContainerElement = document.getElementById('commericialContainerId');
            var allImgsInContent = contentContainerElement.querySelectorAll('img');
            if (allImgsInContent.length > 0) {
                for (var i = 0; i < allImgsInContent.length; i++) {
                    var currentImg = allImgsInContent[i];
                    if (currentImg !== undefined && currentImg !== null) {
                        currentImg.classList.remove('hide');
                    }
                }
            }
        };
        Commercial.prototype.render = function () {
            var _a = this.props.CommercialProperties, CommercialVideoProp = _a.CommercialVideoProp, CommercialContentProp = _a.CommercialContentProp;
            return (React.createElement("div", null, 
                React.createElement(commercialvideo_1.CommercialVideo, {Model: CommercialVideoProp}), 
                React.createElement(commercialcontent_1.CommercialContent, {Model: CommercialContentProp})));
        };
        return Commercial;
    }(React.Component));
    exports.Commercial = Commercial;
    var Common = new Kawasaki.Common();
    var commercialVideolModel = new CommercialVideoModel('https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4', 'assets/slide1/mobile-landing-bkgd.jpg', 'assets/slide1/tablet-landing-bkgd.jpg', 'assets/close_white_btn.svg');
    var polygonPlayBtnSvgElement = Common.createPolygonElement('#FFFFFF', '#FFFFFF', '4', 'round', 'round', '10', ["0,-0.163", "25.32,20.333", "0,40.23"]);
    var kawasakiSvgElement = {
        id: "PlayButtonAction", className: "PlayButtonAction",
        x: "0px", y: "0px", width: "25.32px", height: "40.23px"
    };
    var playBtnSvgElement = Common.createSVGElement(kawasakiSvgElement);
    playBtnSvgElement.appendChild(polygonPlayBtnSvgElement);
    var commercialDescription = 'Superb balance and exciting performance mark the strengths of the new ' +
        'Ninja<span class="cirlce-r">®</span> 650 sportbike.Sporty handling and aggressive styling stay true ' +
        'to Ninja roots while comfort and convenience make the <br />Ninja 650 an exceptional everyday ride.';
    var commercialContentModel = new CommercialContentModel('assets/logo_2017.svg', 'assets/logo_ninja.svg', 'assets/green_hr.png', commercialDescription, 'assets/slide1/playButton_ActionImg.svg', playBtnSvgElement);
    var commercialModel = new CommercialProperties(commercialVideolModel, commercialContentModel);
    ReactDOM.render(React.createElement(Commercial, {CommercialProperties: commercialModel}), document.getElementById('commercial'));
});
