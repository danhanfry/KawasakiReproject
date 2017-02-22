/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/researchtools.d.ts" />
/// <reference path="../../../models/researchtoolsmodel.ts" />

export class ResearchToolsHeader extends React.Component<IResearchToolsHeaderModel, any> {
	render() {

		var {Model} = this.props;

		return (
			<div>

				<div id="researchYear" className="research-text-year ">
					<div className="scale-to-window"><img src={Model.YearLogoImgUrl} /></div>
				</div>

				<div id="researchNinja" className="research-logo">
					<div><img id="researchNinjaImgId" className="scale-to-window" src={Model.YearModelImgUrl} /></div>
				</div>

				<div id="researchToolText" className="research-research-txt">
					<div><span id="researchToolsBackgroundId">{Model.ResearchToolText}</span></div>
				</div>
				<div id="researchInDealership" className="research-in-dealership">
					<div><span>{Model.ResearchDealership}</span></div>
				</div>

			</div>
		);
	}
}