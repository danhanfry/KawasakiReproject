var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./components/vtrvideo", "./components/vtrcontent", "./components/vtrmodal"], function (require, exports, vtrvideo_1, vtrcontent_1, vtrmodal_1) {
    "use strict";
    var VTR = (function (_super) {
        __extends(VTR, _super);
        function VTR() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.VTRIndex = new Kawasaki.NinjaSixFifty.VTR();
            return _this;
        }
        VTR.prototype.componentWillMount = function () {
        };
        VTR.prototype.componentDidMount = function () {
            window.addEventListener("resize", this.vtrResizeEvent);
            this.vtrCaclulation();
        };
        VTR.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.vtrResizeEvent);
        };
        VTR.prototype.render = function () {
            var _a = this.props.VTRProperties, VTRVideoProp = _a.VTRVideoProp, VTRContentProp = _a.VTRContentProp;
            return (React.createElement("div", null,
                React.createElement(vtrvideo_1.VTRVideo, { Model: VTRVideoProp }),
                React.createElement(vtrcontent_1.VTRContent, { Model: VTRContentProp })));
        };
        VTR.prototype.vtrCaclulation = function () {
            this.VTRIndex.calculation();
        };
        VTR.prototype.vtrResizeEvent = function () {
            this.VTRIndex.recalculation();
        };
        return VTR;
    }(React.Component));
    exports.VTR = VTR;
    var Common = new Kawasaki.Common();
    var vtrVideoModel = new VTRVideoModel('https://media.kawasaki.com/contentstorage/c74f106b-f25e-4bca-ad61-43a6d49c4b06.mp4', 'assets/slide2/mobile-vtr-failover.jpg', 'assets/slide2/tablet-vtr-failover.jpg', 'assets/slide2/desktop-failover.jpg', 'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650 motorcycle a perfect combination of sporty performance and everyday comfort. <br> <span id="dragExperienceId" class="drag-experience-threesixty">Click and drag your mouse to experience 360-degree views');
    var interactivePlayBtnSvgElement = createInteractivePlayButton();
    var freePlayBtnSvgElement = createFreeRidePlayButton();
    var vtrContentModel = new VTRContentViewModel('experience the 2017 ninja<span class="sup">®</span> 650', 'take a virtual test ride', 'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650motorcycle a perfect combination of sporty performance and everyday comfort.', interactivePlayBtnSvgElement, freePlayBtnSvgElement);
    var vtrModel = new VTRProperties(vtrVideoModel, vtrContentModel);
    ReactDOM.render(React.createElement(VTR, { VTRProperties: vtrModel }), document.getElementById('virtual'));
    ReactDOM.render(React.createElement(vtrmodal_1.VTRModal, null), document.getElementById('testVRModal'));
    function createCommonSvgDefinition() {
        var vtrDefRectProperties = {
            id: "path-1", x: "0", y: "0", width: "108", height: "108", rx: "8"
        };
        var vtrDefMaskProperties = {
            id: "mask-2", maskContentUnits: "userSpaceOnUse", maskUnits: "objectBoundingBox",
            x: "0", y: "0", width: "108", height: "108", fill: "white"
        };
        var vtrDefMaskUsesProperties = {
            id: "", mask: "", stroke: "", strokeWidth: "", usesId: "#path-1"
        };
        var vtrDefRectElement = Common.createSVGRect(vtrDefRectProperties);
        var vtrDefMaskElement = Common.createSVGMask(vtrDefMaskProperties);
        vtrDefMaskElement.appendChild(Common.createSVGUses(vtrDefMaskUsesProperties));
        var vtrDef = Common.createSVGDefintion();
        vtrDef.appendChild(vtrDefRectElement);
        vtrDef.appendChild(vtrDefMaskElement);
        return vtrDef;
    }
    function createInteractivePlayButton() {
        var vtrMainProperties = {
            id: "", transform: "", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd"
        };
        var vtrTierTwoProperties = {
            id: "01-HOME-1080", transform: "translate(-1466.000000, -652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
        };
        var vtrTierThreeProperties = {
            id: "Group-4", transform: "translate(1466.000000, 652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
        };
        var vtrMainGDTag = Common.createSVGG(vtrMainProperties);
        var vtrTierTwoGDTag = Common.createSVGG(vtrTierTwoProperties);
        var vtrTierThreeGDTag = Common.createSVGG(vtrTierThreeProperties);
        var vtrInteractiveRideGUsesProperties = {
            id: "interactivePlayId", mask: "url(#mask-2)", stroke: "#FFFFFF", strokeWidth: "4", usesId: "#path-1"
        };
        var vtrInteractiveRideGPathProperties = {
            id: "interactiveBoxId", fill: "#FFFFFF", d: "M45.3329239,72.8028672 C43.0890162,74.4078845 41.2699695,73.4638271 41.2699695,70.7016188 L41.2699695,33.5084018 C41.2699695,30.742897 43.0911856,29.8036879 45.3329239,31.4071535 L70.2067791,49.1988693 C72.4506868,50.8038867 72.4485174,53.4076857 70.2067791,55.0111513 L45.3329239,72.8028672 Z"
        };
        var vtrPathTag = Common.createSVGPath(vtrInteractiveRideGPathProperties);
        var vtrGUsesTag = Common.createSVGUses(vtrInteractiveRideGUsesProperties);
        vtrTierThreeGDTag.appendChild(vtrPathTag);
        vtrTierThreeGDTag.appendChild(vtrGUsesTag);
        vtrTierTwoGDTag.appendChild(vtrTierThreeGDTag);
        vtrMainGDTag.appendChild(vtrTierTwoGDTag);
        var vtrInteractivePlayButtonSvgElement = {
            id: "interactivePlayBtn", className: "",
            x: "0px", y: "0px", width: "108px", height: "108px"
        };
        var interactivePlayBtnSvgElement = Common.createSVGElement(vtrInteractivePlayButtonSvgElement);
        interactivePlayBtnSvgElement.appendChild(createCommonSvgDefinition());
        interactivePlayBtnSvgElement.appendChild(vtrMainGDTag);
        return interactivePlayBtnSvgElement;
    }
    function createFreeRidePlayButton() {
        var vtrMainProperties = {
            id: "", transform: "", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd"
        };
        var vtrTierTwoProperties = {
            id: "01-HOME-1080", transform: "translate(-1466.000000, -652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
        };
        var vtrTierThreeProperties = {
            id: "Group-4", transform: "translate(1466.000000, 652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
        };
        var vtrMainGDTag = Common.createSVGG(vtrMainProperties);
        var vtrTierTwoGDTag = Common.createSVGG(vtrTierTwoProperties);
        var vtrTierThreeGDTag = Common.createSVGG(vtrTierThreeProperties);
        var vtrFreeRideGUsesProperties = {
            id: "freePlayId", mask: "url(#mask-2)", stroke: "#FFFFFF", strokeWidth: "4", usesId: "#path-1"
        };
        var vtrGFreeRidePathProperties = {
            id: "freeBoxId", fill: "#FFFFFF", d: "M45.3329239,72.8028672 C43.0890162,74.4078845 41.2699695,73.4638271 41.2699695,70.7016188 L41.2699695,33.5084018 C41.2699695,30.742897 43.0911856,29.8036879 45.3329239,31.4071535 L70.2067791,49.1988693 C72.4506868,50.8038867 72.4485174,53.4076857 70.2067791,55.0111513 L45.3329239,72.8028672 Z"
        };
        var vtrPathTag = Common.createSVGPath(vtrGFreeRidePathProperties);
        var vtrGUsesTag = Common.createSVGUses(vtrFreeRideGUsesProperties);
        vtrTierThreeGDTag.appendChild(vtrPathTag);
        vtrTierThreeGDTag.appendChild(vtrGUsesTag);
        vtrTierTwoGDTag.appendChild(vtrTierThreeGDTag);
        vtrMainGDTag.appendChild(vtrTierTwoGDTag);
        var vtrFreePlayButtonSvgElement = {
            id: "freeRidePlayBtn", className: "",
            x: "0px", y: "0px", width: "108px", height: "108px"
        };
        var freePlayBtnSvgElement = Common.createSVGElement(vtrFreePlayButtonSvgElement);
        freePlayBtnSvgElement.appendChild(createCommonSvgDefinition());
        freePlayBtnSvgElement.appendChild(vtrMainGDTag);
        return freePlayBtnSvgElement;
    }
});
