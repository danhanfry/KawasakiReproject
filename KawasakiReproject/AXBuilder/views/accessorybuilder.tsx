/// <reference path="../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../kawasakininja650/js/interfaces/interfaces.d.ts" />

import { AXHeaderTabs } from "./partials/headertabs"
import { AXPackageDisplay } from "./components/packagetablisting"
import { AXCustomizeDisplay } from "./components/customizetablisting"
import { AXSummaryDisplay } from "./components/summarytablisting"

import { CustomizeVehicleControls } from "./components/customize/customizevehiclecontrols"

export class AX extends React.Component<IAXBuilderModel, IAXState> {

	constructor(props: IAXBuilderModel) {
		super(props);
		this.state = {
			PackageView: true,
			AccessoryView: false,
			SummaryView: false
		};
	}

	/*before the render*/
	public componentWillMount() {
	}

	/*after the render*/
	public componentDidMount() {
		this.init_clickevents();
	}

	public componentWillUnmount() {
		
	}

	public componentDidUpdate(prevProps) {
		
	}

	render() {

		var { PackageContent, CustomizeContent, SummaryContent } = this.props;
		var { BaseImage, Packages } = PackageContent;
		var { Categories, Colors } = CustomizeContent;
		var { Summary } = SummaryContent;

		var accessoryImgAddon = {
			height: '414px'
		};

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
							<AXSummaryDisplay Summary={Summary} />
						}

					</li>
					<li>
						{
							this.state.PackageView &&
							<img id="packageProductImgId" alt="pick your fit" className="pick-fit" src={BaseImage} />
						}

						{
							this.state.AccessoryView &&
							<li className="results">
								<div style={accessoryImgAddon}>
									<img className="front-white show" />
									<img className="back-white hide" />
								</div>
								<CustomizeVehicleControls AllColors={Colors} />
							</li>
						}

						{
							this.state.SummaryView &&
							<li className="results">
								<img alt="mule builder" className="front-white show" src="~/images/ajax-medium.gif" />
								<img alt="mule builder" className="back-white hide" src="~/images/ajax-medium.gif" />
								<div>
									<h5 className="frontOrBack">front view</h5>

									<img alt="switch front back view" className="switch" src="/images/accybldr/switch.jpg" />
								</div>
							</li>
						}
					</li>
				</ul>
			</div>
		)
	}

	private init_clickevents() {
		const headerListings = document.querySelectorAll('#headerTabId li');
		const that = this;
		for (let i = 0; i < headerListings.length; i++) {
			let currentElement = headerListings[i] as HTMLElement;
			currentElement.addEventListener('click', function () {

				const currentIdAttribute:string = this.getAttribute('id');

				that.setState({

					PackageView: currentIdAttribute === "packagesTabId",
					AccessoryView: currentIdAttribute === "customizeTabId",
					SummaryView: currentIdAttribute === "summaryTabId"
				
				});
			});
		}
	}
}