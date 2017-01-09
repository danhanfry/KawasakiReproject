/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/vtr.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../models/vtrmodel.ts" />
/// <reference path="vtr-index.ts" />

import { VTRVideo } from "./components/vtrvideo";
import { VTRContent } from "./components/vtrcontent";

export class VTR extends React.Component<IVTRlModel, any> {

	private Common: Kawasaki.Common = new Kawasaki.Common();
	private VTRIndex: Kawasaki.NinjaSixFifty.VTR = new Kawasaki.NinjaSixFifty.VTR();

	/*before the render*/
	public componentWillMount() {
	}

	/*after the render*/
	public componentDidMount() {
		window.addEventListener("resize", this.vtrResizeEvent);
		this.vtrResizeEvent();
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

	private vtrResizeEvent() {
		//this.CommercialIndex.calculation();
	}
}


const Common: Kawasaki.Common = new Kawasaki.Common();

var vtrVideoModel = new VTRVideoModel('https://media.kawasaki.com/contentstorage/c74f106b-f25e-4bca-ad61-43a6d49c4b06.mp4',
	'assets/slide2/mobile-vtr-failover.jpg', 'assets/slide2/tablet-vtr-failover.jpg',
	'assets/slide2/desktop-failover.jpg',
	'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650 motorcycle a perfect combination of sporty performance and everyday comfort. <br> <span id="dragExperienceId" class="drag-experience-threesixty">Click and drag your mouse to experience 360-degree views');


var vtrContentModel = new VTRContentViewModel('experience the 2017 ninja<span class="sup">®</span> 650',
	'take a virtual test ride', 'Along the way you’ll learn about the exciting features that make the Ninja<span class="cirlce-r">®</span> 650motorcycle a perfect combination of sporty performance and everyday comfort.',
	null, null);

var vtrModel = new VTRProperties(vtrVideoModel, vtrContentModel);

ReactDOM.render(<VTR VTRProperties={vtrModel} />, document.getElementById('vtr'));