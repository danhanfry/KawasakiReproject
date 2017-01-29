/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/explore.d.ts" />
/// <reference path="../../../models/exploremodel.ts" />
/// <reference path="../../../commonjs.ts" />

export class ExploreHeader extends React.Component<IExploreHeaderModel, any> {
	render() {

		var {Model} = this.props;

		return (
			<div>

				<div id="techDemoTrigger" className=""></div>
				<div id="techAnimationExploreId" className="explore-ninja-content ">
					<div className="explore-ninja-text">
						<span dangerouslySetInnerHTML={{ __html: Model.ModelName }} />
					</div>
					<div className="explore-hr-line"><img src="assets/green_hr.png" /></div>
					<div className="click-bike-explore">
						<span dangerouslySetInnerHTML={{ __html: Model.ExploreText }} />
					</div>
				</div>

			</div>
		);
	}
}