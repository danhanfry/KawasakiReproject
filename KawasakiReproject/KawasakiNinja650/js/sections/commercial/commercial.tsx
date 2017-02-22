/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/commercial.d.ts" />
/// <reference path="../../models/commercialmodel.ts" />
/// <reference path="../../ninjacommonjs.ts" />
/// <reference path="commercial-index.ts" />

import { CommercialVideo } from "./components/commercialvideo";
import { CommercialContent } from "./components/commercialcontent";
import { CommercialScroller } from "./components/commercialscroller";

export class Commercial extends React.Component<ICommercialModel, any> {

	private CommercialIndex: Kawasaki.NinjaSixFifty.Commercial = new Kawasaki.NinjaSixFifty.Commercial();

	/*before the render*/
	public componentWillMount() {
	}

	/*after the render*/
	public componentDidMount() {
		window.addEventListener("resize", this.commercialResizeEvent);
		this.commercialCalculation();
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.commercialResizeEvent);
	}

	render() {

		var { CommercialVideoProp, CommercialContentProp } = this.props.CommercialProperties;

		return (
			<div>
				<CommercialVideo Model={CommercialVideoProp} />
				<CommercialContent Model={CommercialContentProp} />
				<CommercialScroller />
			</div>
		);

	}

	private commercialCalculation() {
		this.CommercialIndex.calculation();
	}

	private commercialResizeEvent() {
		this.CommercialIndex.recalculation();
	}
}

const Common: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();

var commercialVideolModel = new CommercialVideoModel('https://media.kawasaki.com/contentstorage/ae7eacd5-2531-4f57-b5a6-a0c5bb7326b8_H264_1080.mp4',
	'assets/slide1/mobile-landing-bkgd.jpg', 'assets/slide1/tablet-landing-bkgd.jpg', 'assets/close_white_btn.svg');


var polygonPlayBtnSvgElement: SVGPolygonElement = Common.createSVGPolygon('#FFFFFF', '#FFFFFF',
	'4', 'round', 'round', '10', ["0,-0.163", "25.32,20.333", "0,40.23"]);

var kawasakiSvgElement: IKawasakiSvgElementProperties = {
	id: "PlayButtonAction", className: "play-button-action",
	x: "0px", y: "0px", width: "25.32px", height: "40.23px"
};

var playBtnSvgElement: SVGSVGElement = Common.createSVGElement(kawasakiSvgElement);
playBtnSvgElement.appendChild(polygonPlayBtnSvgElement);

var commercialDescription = 'Superb balance and exciting performance mark the strengths of the new ' +
	'Ninja<span class="cirlce-r">®</span> 650 sportbike.Sporty handling and aggressive styling stay true ' +
	'to Ninja roots while comfort and convenience make the <br />Ninja 650 an exceptional everyday ride.';

var commercialContentModel = new CommercialContentModel('assets/logo_2017.svg', 'assets/logo_ninja.svg',
	'assets/green_hr.png', commercialDescription, 'assets/slide1/playButton_ActionImg.svg', playBtnSvgElement);

var commercialModel = new CommercialProperties(commercialVideolModel, commercialContentModel);

//ReactDOM.render(<CommercialVideo Model={commercialVideolModel} />, document.getElementById('commercial'));

ReactDOM.render(<Commercial CommercialProperties={commercialModel} />, document.getElementById('commercial'));