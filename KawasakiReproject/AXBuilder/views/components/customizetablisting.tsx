/// <reference path="../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../js/interfaces/interfaces.d.ts" />

import { CustomizeHeader } from "./customize/customizeheader"
import { CustomizePackages } from "./customize/customizepackages"
import { CustomizeCatgoriesAccessories } from "./customize/customizecategoryaccessories"

export class AXCustomizeDisplay extends React.Component<IAXCustomizeTabModel, any> {
	render() {

		var { Categories, Packages } = this.props;

		return (
			<div>

				<CustomizeHeader AllCategories={Categories} />
				<CustomizePackages AllPackages={Packages} />
				<CustomizeCatgoriesAccessories AllCategories={Categories} />

			</div>
		)
	}
}