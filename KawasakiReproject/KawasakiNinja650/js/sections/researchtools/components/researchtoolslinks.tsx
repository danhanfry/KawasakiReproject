/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/researchtools.d.ts" />
/// <reference path="../../../models/researchtoolsmodel.ts" />
/// <reference path="../../../commonjs.ts" />

export class ResearchToolsLinks extends React.Component<IResearchToolsLinksModel, any> {
	render() {

		var {Model} = this.props;

		var researchlinks = [];
		for (var i = 0; i < Model.Links.length; i++) {
			researchlinks.push(<span className='indent' key={i}></span>);
		}

		return (
			<div id="researchNumberedContainer" className="row research-numbered-container">

				<div className="footer-tiles-container" id="researchListing">
				</div>

			</div>
		);
	}
}