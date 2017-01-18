/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/researchtools.d.ts" />
/// <reference path="../../models/researchtoolsmodel.ts" />
/// <reference path="../../commonjs.ts" />

import { ResearchToolsHeader } from './components/researchtoolsheader';
import { ResearchToolsLinks } from './components/researchtoolslinks';

export class ResearchTools extends React.Component<IResearchToolsModel, IResearchToolsLinksState> {

	private researchLinks: Array<IResearchToolsLink> = [];

	constructor(props: IResearchToolsModel) {
		super(props);
		this.state = {
			LinksState: new Array <IResearchToolsLinks>()
		};
	}

	/*before the render*/
	public componentWillMount() {

		var that = this;
		var request: XMLHttpRequest = new XMLHttpRequest();
		request.open('GET', './data/researchdata.json', true);
		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				//console.log('found the json file');
				const researchData = JSON.parse(this.responseText);
				if (researchData !== undefined && researchData !== null && researchData.ResearchPage.length > 0) {

					const allResearchLinks: Array<IResearchToolsLinks> = [];
					const listOfResearchItem = researchData.ResearchPage;
					for (var researchItem of listOfResearchItem) {
						const headerText = researchItem.Title;

						const currentResearchLinks: Array<IResearchToolsLink> = [];
						for (var researchLink of researchItem.Links) {

							let link: IResearchToolsLink = { Text: researchLink.Title, Href: researchLink.Href };
							currentResearchLinks.push(link);
						}

						const researchItemPage: IResearchToolsLinks = {
							HeaderText: headerText,
							Links: currentResearchLinks
						};

						allResearchLinks.push(researchItemPage);

					}

					that.setState({
						LinksState: allResearchLinks
					});

				}
			}
			else {
				console.log('reach server, but error');
			}
		};

		request.onerror = function () {
			console.log('cannot connect to server');
		};

		request.send();
	}

	/*after the render*/
	public componentDidMount() {
		//window.addEventListener("resize", this.commercialResizeEvent);
		//this.commercialResizeEvent();
	}

	public componentWillUnmount() {
		//window.removeEventListener("resize", this.commercialResizeEvent);
	}

	render() {

		var { ResearchToolsHeaderProp } = this.props.ResearchToolsProperties;

		return (
			<div>
				<ResearchToolsHeader Model={ResearchToolsHeaderProp} />
				<div id="researchNumberedContainer" className="row research-numbered-container">
					<div className="footer-tiles-container" id="researchListing">
						{
							this.state.LinksState.map((researchLink, index) => {

								return (
									<ResearchToolsLinks Model={researchLink} />
								)
							})
						}
					</div>
				</div>
			</div>
		);

	}

}

ReactDOM.render(<ResearchTools ResearchToolsProperties={null} />, document.getElementById('researchtools'));