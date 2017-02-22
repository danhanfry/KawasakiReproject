/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/researchtools.d.ts" />
/// <reference path="../../../models/researchtoolsmodel.ts" />

export class ResearchToolsStartStop extends React.Component<IResearchToolsStartStopModel, any> {
	render() {

		var {Model} = this.props;

		return (
			<div>

				<div id="restartExperienceId" className="restart-experience-indicator">
					<div className="research-restart-btn">
						<img id="restartAnimation" src={Model.RestartImgPath} />
					</div>
					<div className="restart-experience-txt"><span>{Model.RestartText}</span></div>
				</div>

				<div id="exitExperienceId" className="exit-experience-indicator">
					<div className="research-exit-btn">
						<img id="restartAnimation" src={Model.ExitExperienceImgPath} />
					</div>
					<div className="exit-experience-txt"><span>{Model.ExitExperienceText}</span></div>
				</div>

			</div>
		);
	}
}