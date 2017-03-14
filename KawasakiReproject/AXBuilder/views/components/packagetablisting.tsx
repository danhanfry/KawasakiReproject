/// <reference path="../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../js/interfaces/interfaces.d.ts" />

export class AXPackageDisplay extends React.Component<IAXPackageTabModel, any> {
	render() {

		var packageTitleDescriptionContainerStyle = {
			height: '122px'
		};

		var { BaseImage, Packages } = this.props;

		return (
			<div>

				<div id="packageTitleDescriptionContainerId" style={packageTitleDescriptionContainerStyle}>
					<h3 id="packageTitleId" className="title-roll-over">PURPOSE-BUILT PACKAGES</h3>
					<p id="packageDescriptionId" className="item-roll-over">Roll over any of the icons below for more information on each purpose-built accessories package.</p>
				</div>
				<div className="package-listing-container">
					<ul className="selections small-block-grid-4" id="packageListingContainerId">

						{
							Packages.map((axpackage, index) => {

								var liId = axpackage.PackageName + "id";

								return (
									<li id={liId} key={index}>
										<img alt={axpackage.PackageName} src={axpackage.IconImgPath} className="package-icon" />
										<h4 dangerouslySetInnerHTML={{ __html: axpackage.PackageTitle }}></h4>
										<button className="gry-btn">select</button>
									</li>
								)
							})
						}

					</ul>
					<h6><a id="skip">Skip this step</a></h6>
				</div>

			</div>
		)
	}
}