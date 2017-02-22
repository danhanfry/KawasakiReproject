/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/explore.d.ts" />
/// <reference path="../../../models/exploremodel.ts" />
/// <reference path="../../../../../scripts/core/commonjs.ts" />

export class ExploreTiling extends React.Component<IExploreTiles, any> {
	render() {

		var {Tiles} = this.props;

		const Common: Kawasaki.Common = new Kawasaki.Common();
		const IsMobile: boolean = Common.isMobile();
		const IsTablet: boolean = Common.isTablet();
		const IsTouchDevice: boolean = IsMobile || IsTablet;

		return (
			<div>

				{
					!IsTouchDevice &&
					<div id="techAnimationId" className="tech-demo-bike">
						<div id="ninjaLogo" className="tech-ninjalogo"></div>
						<div id="bikeId" className="main-tech-img  "></div>

						<div id="techTilesId">
							{
								Tiles.map((tile, index) => {

									let classToUse:string = "tech-image " + tile.TileSize;
									return (
										<div key={index} id={tile.TileId} data-tech={tile.TileName} className={classToUse}>
											<img src={tile.TileImgPath} />
										</div>
									)
								})
							}
						</div>


						<div id="horizontalWhiteLine" className="tech-image horiz-white-tile"></div>
						<div id="verticalWhiteLine" className="tech-image vert-white-tile"></div>
					</div>
				}

				{
					IsTouchDevice && 
					<div id="nonTechAnimationId">
						<div className="non-explore-ninja">
							<div><span>explore ninja<span className="sup">®</span>650</span></div>
						</div>
						<div className="spec-ninja-logo"><div><img id="ninjaLogoExploreId" src="" /></div></div>
						<div className="spec-ninja-bike"><div><img src="assets/slide3/bike.png" /></div></div>
						<div className="non-spec-container">

							{
								Tiles.map((tile, index) => {

									let classToUse: string = "non-tech-image " + tile.TileSize;
									return (
										<div key={index} className="spec-parts">
											<div data-tech={tile.TileName} className={classToUse}></div>
										</div>
									)
								})
							}
						</div>
					</div>
				}
				
				<div id="slideThreeScroller" className="scroll-indicator">
					<div><img src="assets/green_arrow_down.svg" /></div>
				</div>

			</div>
		);
	}
}