/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../interfaces/researchtools.d.ts" />
/// <reference path="../../models/researchtoolsmodel.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="research-index.ts" />

import { ResearchToolsHeader } from './components/researchtoolsheader';
import { ResearchToolsLinks } from './components/researchtoolslinks';
import { ResearchToolsStartStop } from './components/researchtoolsstartstop';

export class ResearchTools extends React.Component<IResearchToolsModel, IResearchToolsLinksState> {

	private ResearchIndex: Kawasaki.NinjaSixFifty.ResearchTools = new Kawasaki.NinjaSixFifty.ResearchTools();
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
		request.onload = () => {
			if (request.status >= 200 && request.status < 400) {
				//console.log('found the json file');
				const researchData = JSON.parse(request.responseText);
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
		window.addEventListener("resize", this.researchResizeEvent);
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.researchResizeEvent);
	}

	/* used when state or prop is updated */
	public componentDidUpdate(prevProps) {
		let researchLinkContainer = document.getElementById('researchListing');
		if (researchLinkContainer.children.length > 0) {
			this.researchCalculation();
		}
	}

	render() {

		var { ResearchToolsHeaderProp, ResearchToolsStartStopProp } = this.props.ResearchToolsProperties;

		return (
			<div>
				<div id="researchToolContainerId" className="research-container">
					<ResearchToolsHeader Model={ResearchToolsHeaderProp} />
					<div id="researchNumberedContainer" className="row research-numbered-container">
						<div className="footer-tiles-container" id="researchListing">
							{
								this.state.LinksState.map((researchLink, index) => {

									return (
										<ResearchToolsLinks key={index} Model={researchLink} />
									)
								})
							}
						</div>
					</div>
					<ResearchToolsStartStop Model={ResearchToolsStartStopProp} />
				</div>
				<div className="research-grey-bkg"></div>
				<div className="restart-black-bkg"></div>
			</div>
		);

	}

	private researchCalculation() {
		this.ResearchIndex.calculation();
	}

	private researchResizeEvent() {
		this.ResearchIndex.recalculation();
	}
}

var researchHeaderModel = new ResearchToolsHeaderModel('assets/logo_2017.svg', 'assets/logo_ninja.svg',
	'research tools', 'in dealerships soon');

var researchStartStopModel = new ResearchToolsStartStopModel('assets/slide5/restart_experience.svg',
	'RESTART EXPERIENCE', 'assets/slide5/icon_exit.svg', 'EXIT EXPERIENCE');

var researchProperties = new ResearchToolsProperties(researchHeaderModel, researchStartStopModel);

ReactDOM.render(<ResearchTools ResearchToolsProperties={researchProperties} />, document.getElementById('researchtools'));