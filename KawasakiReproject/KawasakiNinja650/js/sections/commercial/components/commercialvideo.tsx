/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/commercial.d.ts" />
/// <reference path="../../../models/commercialmodel.ts" />
/// <reference path="../../../commonjs.ts" />


export class CommercialVideo extends React.Component<ICommercialVideoModel, any> {
	render() {

		var {Model} = this.props;

		const Common: Kawasaki.Common = new Kawasaki.Common();
		const IsMobile:boolean = Common.isMobile();
		const IsTablet: boolean = Common.isTablet();
		const IsTouchDevice: boolean = IsMobile || IsTablet;

		return (
			<div>
				<div className="close-button-container hide" id="firstSlideCloseContainerId">
					<img src={Model.CloseImg} alt="close button" />
				</div>
				<div className="video_contain">
					<video id="videoPlayer" className="video-container video_main" poster="" src={Model.VideoUrl} loop width="100%" height="auto"></video>
				</div>

				{
					IsTouchDevice && 
					<div id="mobileTabletStaticImgId" className="mobile-tablet-static-img">
						<img src={IsMobile ? Model.FallbackMobileUrl : (IsTablet ? Model.FallbackTabletUrl : '')} />
					</div>
				}

				
			</div>
		);

	}
}