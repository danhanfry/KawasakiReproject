/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/interfaces.d.ts" />
/// <reference path="../../../commonjs.ts" />

export class SocialModal extends React.Component<IEmptyProperties, any> {

	render() {

		return (
			<div id="socialModalId" className="modal fadeIn">
				<div className="modal-content">
					<div className="modal-header">
						<span className="close-btn">
							<img src="assets/close_green_btn.svg" alt="close button" />
						</span>
					</div>
					<div className="modal-body">
						<div id="modalContentImage" className="modal-content-image">
						</div>
						<div id="modalContentContainer" className="modal-content-container">
							<div id="modalContentInfo" className="modal-content-info">
							</div>
						</div>
					</div>
				</div>
			</div>
		);

	}

}