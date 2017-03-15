/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../js/interfaces/interfaces.d.ts" />
/// <reference path="../../../../scripts/core/collection.ts" />

export class CustomizeVehicleControls extends React.Component<IOnlyAXColor, any> {
	render() {

		var {AllColors} = this.props;

		const colorCollection: Collection<IAXColor> = new Collection<IAXColor>(AllColors);

		const defaultColorName: string = colorCollection.Count() > 0 ? colorCollection.FirstOrDefault().ColorName : "NONE";

		var displayNone = {
			display: 'none'
		};

		var displayBlock = {
			display: 'block'
		};

		return (

			<ul className="small-block-grid-3" id="customizePriceColorView">
				<li>
					<h5>accessories total msrp</h5>
					<div className="accessory-total-container">
						<h6 id="accessoryTotal">$0.00</h6>
					</div>
				</li>

				<li>
					<div id="buttonColorName">
						<h5>{defaultColorName}</h5>
					</div>
					<div className="color-picker-container">
						<ul className="inline-list accessory-color-list-customize-tab" id="colorOptions">

							{
								AllColors.map((axcolor, index) => {

									const swatchOffModeSrc = "/content/accessories/colorswatches/" + axcolor.ColorImgName;
									const swatchOnModeSrc = "/content/accessories/colorswatches/" + axcolor.ColorImgName_Active + "?w=37";
									const styleDisplayOff = index === 0 ? displayNone : displayBlock;
									const styleDisplayOn = index === 0 ? displayBlock : displayNone;

									return (

										<li>
											<img data-id={axcolor.ColorID} data-colorname={axcolor.ColorName}
												className="swatch-off-mode" style={styleDisplayOff}
												alt={axcolor.ColorImgName} src={swatchOffModeSrc} />

											<img data-id={axcolor.ColorID} data-colorname={axcolor.ColorName}
												className="swatch-on-mode" style={styleDisplayOn}
												alt={axcolor.ColorImgName} src={swatchOnModeSrc} />

										</li>

									)
								})
							}

						</ul>
					</div>
				</li>

				<li>
					<h5 className="frontOrBack">front view</h5>
					<img alt="switch front back view" className="switch" src="/images/accybldr/switch.jpg" />
				</li>

			</ul>
		)
	}
}