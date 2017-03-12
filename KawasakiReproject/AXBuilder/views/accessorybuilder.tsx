/// <reference path="../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../kawasakininja650/js/interfaces/interfaces.d.ts" />

import { AXHeaderTabs } from "./partials/headertabs"
import { AXPackageDisplay } from "./components/packagetablisting"

export class AX extends React.Component<IAXBuilderModel, IAXState> {
	render() {

		var { PackageContent } = this.props;
		var { BaseImage, Packages } = PackageContent;

		return (
			<div className="fit direct-fit clearfix">
				<ul className="small-block-grid-2">
					<li>
						<AXHeaderTabs />
						{
							this.state.PackageView &&
							<div className="fit-box">
								<AXPackageDisplay Packages={Packages} BaseImage={BaseImage} />
							</div>
						}

						{
							this.state.AccessoryView &&
							<div></div>
						}

						{
							this.state.SummaryView &&
							<div></div>
						}

					</li>
					<li>
						<img id="packageProductImgId" alt="pick your fit" className="pick-fit" src={BaseImage} />
					</li>
				</ul>
			</div>
		)
	}
}