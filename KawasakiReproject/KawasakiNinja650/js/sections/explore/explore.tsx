/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../commonjs.ts" />
/// <reference path="../../interfaces/explore.d.ts" />
/// <reference path="../../models/exploremodel.ts" />
/// <reference path="explore-index.ts" />

import { ExploreHeader } from './components/exploreheader';
import { ExploreTiling } from './components/exploretiling';

export class Explore extends React.Component<IExploreModel, IExploreTileState> {

	private ExploreIndex: Kawasaki.NinjaSixFifty.Explore = new Kawasaki.NinjaSixFifty.Explore();
	private exploreTiles: Array<IExploreTile> = [];

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
		request.onload = function () {
			if (this.status >= 200 && this.status < 400) {
				//console.log('found the json file');
				const exploreData = JSON.parse(this.responseText);
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
		this.exploreCalculation();
	}

	public componentWillUnmount() {
		window.removeEventListener("resize", this.exploreResizeEvent);
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

var exploreModel = new ExploreContentModel('explore ninja<span class="sup">®</span>650', 'click on the bike to explore');

var exploreProperties = new ExploreProperties(exploreModel);

ReactDOM.render(<Explore ExploreProperties={exploreProperties} />, document.getElementById('explore'));