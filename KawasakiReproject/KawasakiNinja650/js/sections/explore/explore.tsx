/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../../../scripts/core/commonjs.ts" />
/// <reference path="../../ninjacommonjs.ts" />
/// <reference path="../../interfaces/explore.d.ts" />
/// <reference path="../../models/exploremodel.ts" />
/// <reference path="explore-index.ts" />

import { ExploreHeader } from './components/exploreheader';
import { ExploreTiling } from './components/exploretiling';
import { ExploreSpecificationModal } from './components/exploreSpecificationModal';

export class Explore extends React.Component<IExploreModel, IExploreTileState> {

	private ExploreIndex: Kawasaki.NinjaSixFifty.Explore = new Kawasaki.NinjaSixFifty.Explore();
	private exploreTiles: Array<IExploreTile> = [];
	private Common: Kawasaki.Common = new Kawasaki.Common();
	private NinjaCommon: Kawasaki.NinjaCommon = new Kawasaki.NinjaCommon();

	constructor(props: IExploreModel) {
		super(props);
		this.state = {
			TilesState: new Array<IExploreTile>()
		};
	}

	/*before the render*/
	public componentWillMount() {

		var that = this;
		var request: XMLHttpRequest = new XMLHttpRequest();
		request.open('GET', './data/exploredata.json', true);
		request.onload = () => {
			if (request.status >= 200 && request.status < 400) {
				//console.log('found the json file');
				const exploreData = JSON.parse(request.responseText);
				if (exploreData !== undefined && exploreData !== null) {

					const allTiles: Array<IExploreTile> = [];
					const listOfTiles = exploreData.Tiles;
					for (var exploreTile of listOfTiles) {

						const exploreTileItem: IExploreTile = {
							TileId: exploreTile.Id,
							TileImgPath: exploreTile.ImagePath,
							TileName: exploreTile.Name,
							TileSize: exploreTile.TileSize
						};

						allTiles.push(exploreTileItem);

					}

					that.setState({
						TilesState: allTiles
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
		window.addEventListener("resize", this.exploreResizeEvent);
		//this.exploreCalculation();
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.exploreResizeEvent);
	}

	/* used when state or prop is updated */
	public componentDidUpdate(prevProps) {
		if (!this.Common.isMobile() && !this.Common.isTablet()) {
			let techTilesContainer = document.getElementById('techTilesId');
			if (techTilesContainer.children.length > 0) {
				this.exploreCalculation();
			}
		}
		else {
			this.exploreCalculation();
		}
	}

	render() {

		var { ExploreHeaderProp } = this.props.ExploreProperties;

		return (
			<div>
				<ExploreHeader Model={ExploreHeaderProp} />
				<ExploreTiling Tiles={this.state.TilesState} />
			</div>
		);

	}

	private exploreCalculation() {
		this.ExploreIndex.calculation();
	}

	private exploreResizeEvent() {
		this.ExploreIndex.recalculation();
	}

}

export class ExploreSpecModal extends React.Component<IEmptyProperties, any> {

	render() {

		return (
			<div>
				<ExploreSpecificationModal />
			</div>
		);

	}

}

var exploreModel = new ExploreContentModel('explore ninja<span class="sup">®</span>650', 'click on the bike to explore');

var exploreProperties = new ExploreProperties(exploreModel);

ReactDOM.render(<Explore ExploreProperties={exploreProperties} />, document.getElementById('explore'));
ReactDOM.render(<ExploreSpecificationModal />, document.getElementById('specificationModal'));