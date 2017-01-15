/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/vtr.d.ts" />
/// <reference path="../../../commonjs.ts" />


export class VTRContent extends React.Component<IVTRContentModel, any> {
	render() {

		var {Model} = this.props;

		const Common: Kawasaki.Common = new Kawasaki.Common();
		const IsLessThanIE11: boolean = Common.isIELessThanEleven();

		const xmlSerializer: XMLSerializer = new XMLSerializer();
		const svgLeftPlayButton: string = xmlSerializer.serializeToString(Model.VirtualRideLeft);
		const svgRightPlayButton: string = xmlSerializer.serializeToString(Model.VirtualRideRight);

		return (
			<div>
				{
					!IsLessThanIE11 && 
					<div>
						<div id="testVRContainerId" className="textvr-container">
							<div id="testVRExperience" className="testvr-experience">
								<div><span dangerouslySetInnerHTML={{ __html: Model.GreenExperienceText }} /></div>
							</div>
							<div id="testVRTestRide" className="testvr-testride">
								<div><span id="testVRTestRideBackgroundId">{Model.MainTextDisplay}</span></div>
							</div>

							<div id="testVRDescription" className="testvr-description">
								<div>
									<span dangerouslySetInnerHTML={{ __html: Model.Description }} />
								</div>
							</div>

							<div id="vrTestRideSelection" className="vr-test-ride-selection">
								<div id="leftTextForVRVideoHoverId" className="text-vr-hover-txt">
									<div className="vr-video-green-line"></div>
									<div className="interactive-ride-img">
										<span className="" dangerouslySetInnerHTML={{ __html: svgLeftPlayButton }} />
									</div>
									<span>INTERACTIVE RIDE</span>
								</div>

								<div id="rightTextForVRVideoHoverId" className="text-vr-hover-txt">
									<div className="vr-video-green-line"></div>
									<div className="free-ride-img">
										<span className="" dangerouslySetInnerHTML={{ __html: svgRightPlayButton }} />
									</div>
									<span>FREE RIDE</span>
								</div>
							</div>
						</div>
						<div id="slideTwoScroller" className="scroll-indicator">
							<div><img src="assets/green_arrow_down.svg" /></div>
						</div>
					</div>
				}
			</div>
		)

	}
}