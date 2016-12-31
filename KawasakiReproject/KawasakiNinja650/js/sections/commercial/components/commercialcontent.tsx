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
					<div id="commericalNinjaNameYearId" className="commerical-text-year">
						<img src={Model.YearLogoImgUrl} />
					</div>

					<div id="commericalNinjaNameId" className="commerical-logo ">
						<img src={Model.YearModelImgUrl} />
					</div>

					<div id="commericalNinjaLifeGreenHrId" className="commerical-hr">
						<div>
							<img src={Model.GreenHorizontalLineImgUrl} />
						</div>
					</div>

					<div id="commericalNinjaLifeDescriptionId" className="commerical-life-description">
						<div>
							<span dangerouslySetInnerHTML={{ __html: Model.Description }} />
						</div>
					</div>

					<div id="commericalNinjaLifePlayArrow" className="commerical-life-arrow">
						<div id="playArrowMask" className="playArrow">
							<span className="" dangerouslySetInnerHTML={{ __html: svgPlayBtnAsString }} />
							<img id="PlayButtonGloss" className="play-button-gloss" src={Model.PlayButtonGlossImgUrl} />
						</div>
					</div>



				</div>
			</div>
		);
	}
}