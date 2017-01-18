/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/researchtools.d.ts" />
/// <reference path="../../../models/researchtoolsmodel.ts" />
/// <reference path="../../../commonjs.ts" />

export class ResearchToolsLinks extends React.Component<IResearchToolsLinksModel, any> {
	render() {

		var {Model} = this.props;

		return (

			<div className="footer-tiles footer-tiles-margin">
				<div id="researchTwo" className="research-numbered"></div>
				<div className="research-numbered-header">
					<div><span>{Model.HeaderText}</span></div>
				</div>
				<div>

					{
						Model.Links.map((researchLink, index) => {

							return (
								<div className="research-numbered-link" key={index}>
									<div>
										<span><a href={researchLink.Href}>{researchLink.Text}</a></span>
									</div>
								</div>
							)
						})
					}

				</div>
			</div>
		);
	}
}