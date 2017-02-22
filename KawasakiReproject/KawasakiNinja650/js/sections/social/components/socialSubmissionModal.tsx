/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/interfaces.d.ts" />

export class SocialSubmissionGuidelines extends React.Component<IEmptyProperties, any> {

	render() {

		return (

			<div className="modal-content">
				<div className="modal-header">
					<span className="close-btn">
						<img src="assets/close_green_btn.svg" alt="close button" />
					</span>
				</div>
				<div className="modal-body">
					<div id="modalGuidelinesContentContainer" className="modal-guidelines-container">
						<div className="guidelines-header">
							Submission Guidelines
							</div>
						<div id="modalGuidelinesContentInfo" className="modal-guidelines-info">
							<div className="guidelines-blurb">
								We can’t wait to see all the ways you represent #NINJALIFE. In order to feature your submission on our website, we ask that you please follow our submission guidelines.
								</div>
							<div className="guidelines-rules">
								<ul>
									<li><span>Please wear proper riding gear when in motion, including a helmet, eye protection, gloves and proper apparel</span></li>
									<li><span>Never ride under the influence of drugs or alcohol</span></li>
									<li><span>Please keep both hands on the handlebars and focus on the road or track</span></li>
									<li><span>Please make sure operators are able to reach all vehicle controls</span></li>
								</ul>
							</div>
						</div>
						<div className="guidelines-disclaimer">
							By submitting a photo you agree that you own all copyright in and to the photo submitted; you have authorization from all individual(s) featured in your photo to allow you to submit a photo bearing their name, image and likeness; and all photos submitted become the property of Kawasaki Motors Corp., U.S.A., and may be used by KMC in any and all forms of media, for any lawful purpose, without further permission or compensation.
						</div>
					</div>
				</div>
			</div>
		);

	}

}