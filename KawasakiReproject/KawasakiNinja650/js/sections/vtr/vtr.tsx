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

	}

	public componentWillUnmount() {

	}

	render() {

		var { VTRVideoProp, VTRContentProp } = this.props.VTRProperties;

		return (
			<div>

			</div>
		);

	}
}