/// <reference path="../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../kawasakininja650/js/interfaces/interfaces.d.ts" />

import { AXHeaderTabs } from "./partials/headertabs"
import { AXPackageDisplay } from "./components/packagetablisting"
import { AXCustomizeDisplay } from "./components/customizetablisting"

export class AX extends React.Component<IAXBuilderModel, IAXState> {
	render() {

		var { PackageContent, CustomizeContent } = this.props;
		var { BaseImage, Packages } = PackageContent;
		var { Categories, Colors } = CustomizeContent;

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
							<div className="build-box">
								<AXCustomizeDisplay Packages={Packages} Categories={Categories} Colors={Colors} />
							</div>
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