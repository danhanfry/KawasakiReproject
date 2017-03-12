/// <reference path="../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../js/interfaces/interfaces.d.ts" />

import { AXHeaderTabs } from "../partials/headertabs"
import { AXPackageDisplay } from "../components/packagetablisting"

export class AXPackageTab extends React.Component<IAXPackageTab, any> {
	render() {

		var { BaseImage, Packages } = this.props;

		return (
			<div className="fit direct-fit clearfix">
				<ul className="small-block-grid-2">
					<li>
						<AXHeaderTabs />
						<div className="fit-box">
							<AXPackageDisplay Packages={Packages} BaseImage={BaseImage} />
						</div>
					</li>
					<li>
						<img id="packageProductImgId" alt="pick your fit" className="pick-fit" src={BaseImage} />
					</li>
				</ul>
			</div>
		)
	}
}