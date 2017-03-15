/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../js/interfaces/interfaces.d.ts" />

export class CustomizePackages extends React.Component<IOnlyAXPackage, any> {
	render() {

		var {AllPackages} = this.props;

		return (

			<div className="packages hide">
				{
					AllPackages.map((axpackage, index) => {

						return (

							<section key={index} className="clearfix customize-package-type"
								data-packageid={axpackage.AccessoryPackageTypeID}>

								<img alt="reduced package" src={axpackage.IconImgPath} />
								<div className="pick-p">
									<h3 className="package-name-customize-tab"
										dangerouslySetInnerHTML={{ __html: axpackage.PackageName }}>
									</h3>
									<div className="package-accessory"></div>
								</div>
								<div className="free">
									<button id="" className="green-btn close-reveal-modal right">SELECT</button>
								</div>
							</section>

						)
					})
				}
			</div>
		)
	}
}