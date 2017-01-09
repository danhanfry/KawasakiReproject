/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/vtr.d.ts" />
/// <reference path="../../../commonjs.ts" />

export class VTRVideo extends React.Component<IVTRVideoModel, any> {
	render() {

		var {Model} = this.props;

		const Common: Kawasaki.Common = new Kawasaki.Common();
		const IsMobile: boolean = Common.isMobile();
		const IsTablet: boolean = Common.isTablet();
		const IsTouchDevice: boolean = IsMobile || IsTablet;
		const IsLessThanIE11: boolean = Common.isIELessThanEleven();

		var vtrContainerStyle = {
			position: 'absolute',
			height: '78%',
			width: '100%',
			overflow: 'hidden',
			marginTop: '3%'
		};

		return (
			<div>
				{
					!IsTouchDevice && !IsLessThanIE11 &&
					<div id="clipperIdVRVideoId" style={vtrContainerStyle}>
						<div className="video_contain_vtr">
							<video id="videoPlayerVR" className="video_vtr" poster=""
								src={Model.VideoUrl} loop></video>
						</div>
					</div>
				}

				{
					IsLessThanIE11 && 
					<div>
						<div id="desktopFailOverId" className="desktop-failover-static-img">
							<img src={Model.FallbackLessThanIE11Url} />
						</div>

						<div id="failOverContainerVR" className="vr-failover-container">
							<div id="failOverNinjaName" className="failover-vr-logo">
								<img src="assets/logo_ninja.svg" />
							</div>
							<div id="failOverMessage" className="failover-vr-message">
								<span dangerouslySetInnerHTML={{ __html: Model.FallbackLessThanIE11Description }} />
							</div>
						</div>
					</div>
				}

				{
					IsTouchDevice && 
					<div id="mobileTabletVRStaticImgId" className="mobile-tablet-static-img">
						<img src={IsMobile ? Model.FallbackMobileUrl : (IsTablet ? Model.FallbackTabletUrl : '')} />
					</div>
				}

			</div>
		);

	}
}