/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/commercial.d.ts" />
/// <reference path="../../../models/commercialmodel.ts" />
/// <reference path="../../../commonjs.ts" />


export class CommercialContent extends React.Component<ICommercialContentModel, any> {
	render() {

		var {Model} = this.props;

		const xmlSerializer: XMLSerializer = new XMLSerializer();
		const svgPlayBtnAsString:string = xmlSerializer.serializeToString(Model.PlayButtonImgSvg);

		return (
			<div>
				<div id="commericialContainerId" className="commerical-container scale-to-window">
					<div id="commericalNinjaNameYearId" className="commerical-text-year ">
						<img className="hide" src={Model.YearModelImgUrl} />
					</div>

					<div id="commericalNinjaNameId" className="commerical-logo ">
						<img className="hide" src={Model.YearLogoImgUrl} />
					</div>

					<div id="commericalNinjaLifeGreenHrId" className="commerical-hr">
						<div>
							<img className="hide" src={Model.GreenHorizontalLineImgUrl} />
						</div>
					</div>

					<div id="commericalNinjaLifeDescriptionId" className="commerical-life-description">
						<div>
							<span dangerouslySetInnerHTML={{ __html: Model.Description }} />
						</div>
					</div>

					<div id="commericalNinjaLifePlayArrow" className="commerical-life-arrow">
						<div id="playArrowMask" className="playArrow">
							<span className="hide" dangerouslySetInnerHTML={{ __html: svgPlayBtnAsString }} />
							<img id="PlayButtonGloss" className="PlayButtonGloss hide" src={Model.PlayButtonGlossImgUrl} />
						</div>
					</div>



				</div>
			</div>
		);
	}
}