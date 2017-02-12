/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/vtr.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../models/vtrmodel.ts" />
/// <reference path="vtr-index.ts" />

import { VTRVideo } from "./components/vtrvideo";
import { VTRContent } from "./components/vtrcontent";
import { VTRModal } from "./components/vtrmodal"

export class VTR extends React.Component<IVTRlModel, any> {

	private VTRIndex: Kawasaki.NinjaSixFifty.VTR = new Kawasaki.NinjaSixFifty.VTR();

	/*before the render*/
	public componentWillMount() {
	}

	/*after the render*/
	public componentDidMount() {
		window.addEventListener("resize", this.vtrResizeEvent);
		this.vtrCaclulation();
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.vtrResizeEvent);
	}

	render() {

		var { VTRVideoProp, VTRContentProp } = this.props.VTRProperties;

		return (
			<div>
				<VTRVideo Model={VTRVideoProp} />
				<VTRContent Model={VTRContentProp} />
			</div>
		);
	}

	private vtrCaclulation() {
		this.VTRIndex.calculation();
	}

	private vtrResizeEvent() {
		this.VTRIndex.recalculation();
	}
}


const Common: Kawasaki.Common = new Kawasaki.Common();

var vtrVideoModel = new VTRVideoModel('https://media.kawasaki.com/contentstorage/c74f106b-f25e-4bca-ad61-43a6d49c4b06.mp4',
	'assets/slide2/mobile-vtr-failover.jpg', 'assets/slide2/tablet-vtr-failover.jpg',
	'assets/slide2/desktop-failover.jpg',
	'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650 motorcycle a perfect combination of sporty performance and everyday comfort. <br> <span id="dragExperienceId" class="drag-experience-threesixty">Click and drag your mouse to experience 360-degree views');

var interactivePlayBtnSvgElement = createInteractivePlayButton();
var freePlayBtnSvgElement = createFreeRidePlayButton();

var vtrContentModel = new VTRContentViewModel('experience the 2017 ninja<span class="sup">®</span> 650',
	'take a virtual test ride', 'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650motorcycle a perfect combination of sporty performance and everyday comfort.',
	interactivePlayBtnSvgElement, freePlayBtnSvgElement);

var vtrModel = new VTRProperties(vtrVideoModel, vtrContentModel);

ReactDOM.render(<VTR VTRProperties={vtrModel} />, document.getElementById('virtual'));

ReactDOM.render(<VTRModal />, document.getElementById('testVRModal'));

function createCommonSvgDefinition() {
	var vtrDefRectProperties: ISVGRectTagProperties = {
		id: "path-1", x: "0", y: "0", width: "108", height: "108", rx: "8"
	};

	var vtrDefMaskProperties: ISVGMaskTagProperties = {
		id: "mask-2", maskContentUnits: "userSpaceOnUse", maskUnits: "objectBoundingBox",
		x: "0", y: "0", width: "108", height: "108", fill: "white"
	};

	var vtrDefMaskUsesProperties: ISVGUseTagProperties = {
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

	var vtrMainProperties: ISVGGTagProperties = {
		id: "", transform: "", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd"
	};

	var vtrTierTwoProperties: ISVGGTagProperties = {
		id: "01-HOME-1080", transform: "translate(-1466.000000, -652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
	};

	var vtrTierThreeProperties: ISVGGTagProperties = {
		id: "Group-4", transform: "translate(1466.000000, 652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
	};

	var vtrMainGDTag = Common.createSVGG(vtrMainProperties);
	var vtrTierTwoGDTag = Common.createSVGG(vtrTierTwoProperties);
	var vtrTierThreeGDTag = Common.createSVGG(vtrTierThreeProperties);


	var vtrInteractiveRideGUsesProperties: ISVGUseTagProperties = {
		id: "interactivePlayId", mask: "url(#mask-2)", stroke: "#FFFFFF", strokeWidth: "4", usesId: "#path-1"
	};

	var vtrInteractiveRideGPathProperties: ISVGPathTagProperties = {
		id: "interactiveBoxId", fill: "#FFFFFF", d: "M45.3329239,72.8028672 C43.0890162,74.4078845 41.2699695,73.4638271 41.2699695,70.7016188 L41.2699695,33.5084018 C41.2699695,30.742897 43.0911856,29.8036879 45.3329239,31.4071535 L70.2067791,49.1988693 C72.4506868,50.8038867 72.4485174,53.4076857 70.2067791,55.0111513 L45.3329239,72.8028672 Z"
	};

	var vtrPathTag = Common.createSVGPath(vtrInteractiveRideGPathProperties);
	var vtrGUsesTag = Common.createSVGUses(vtrInteractiveRideGUsesProperties);

	vtrTierThreeGDTag.appendChild(vtrPathTag);
	vtrTierThreeGDTag.appendChild(vtrGUsesTag);

	vtrTierTwoGDTag.appendChild(vtrTierThreeGDTag);
	vtrMainGDTag.appendChild(vtrTierTwoGDTag);

	var vtrInteractivePlayButtonSvgElement: IKawasakiSvgElementProperties = {
		id: "interactivePlayBtn", className: "",
		x: "0px", y: "0px", width: "108px", height: "108px"
	};

	var interactivePlayBtnSvgElement: SVGSVGElement = Common.createSVGElement(vtrInteractivePlayButtonSvgElement);
	interactivePlayBtnSvgElement.appendChild(createCommonSvgDefinition());
	interactivePlayBtnSvgElement.appendChild(vtrMainGDTag);

	return interactivePlayBtnSvgElement;
}

function createFreeRidePlayButton() {
	
	var vtrMainProperties: ISVGGTagProperties = {
		id: "", transform: "", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd"
	};

	var vtrTierTwoProperties: ISVGGTagProperties = {
		id: "01-HOME-1080", transform: "translate(-1466.000000, -652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
	};

	var vtrTierThreeProperties: ISVGGTagProperties = {
		id: "Group-4", transform: "translate(1466.000000, 652.000000)", stroke: "", strokeWidth: "", fill: "", fillRule: ""
	};

	var vtrMainGDTag = Common.createSVGG(vtrMainProperties);
	var vtrTierTwoGDTag = Common.createSVGG(vtrTierTwoProperties);
	var vtrTierThreeGDTag = Common.createSVGG(vtrTierThreeProperties);

	var vtrFreeRideGUsesProperties: ISVGUseTagProperties = {
		id: "freePlayId", mask: "url(#mask-2)", stroke: "#FFFFFF", strokeWidth: "4", usesId: "#path-1"
	};

	var vtrGFreeRidePathProperties: ISVGPathTagProperties = {
		id: "freeBoxId", fill: "#FFFFFF", d: "M45.3329239,72.8028672 C43.0890162,74.4078845 41.2699695,73.4638271 41.2699695,70.7016188 L41.2699695,33.5084018 C41.2699695,30.742897 43.0911856,29.8036879 45.3329239,31.4071535 L70.2067791,49.1988693 C72.4506868,50.8038867 72.4485174,53.4076857 70.2067791,55.0111513 L45.3329239,72.8028672 Z"
	};

	var vtrPathTag = Common.createSVGPath(vtrGFreeRidePathProperties);
	var vtrGUsesTag = Common.createSVGUses(vtrFreeRideGUsesProperties);

	vtrTierThreeGDTag.appendChild(vtrPathTag);
	vtrTierThreeGDTag.appendChild(vtrGUsesTag);

	vtrTierTwoGDTag.appendChild(vtrTierThreeGDTag);
	vtrMainGDTag.appendChild(vtrTierTwoGDTag);

	var vtrFreePlayButtonSvgElement: IKawasakiSvgElementProperties = {
		id: "freeRidePlayBtn", className: "",
		x: "0px", y: "0px", width: "108px", height: "108px"
	};

	var freePlayBtnSvgElement: SVGSVGElement = Common.createSVGElement(vtrFreePlayButtonSvgElement);
	freePlayBtnSvgElement.appendChild(createCommonSvgDefinition());
	freePlayBtnSvgElement.appendChild(vtrMainGDTag);

	return freePlayBtnSvgElement
}