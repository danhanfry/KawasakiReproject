/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/interfaces.d.ts" />

export class ExploreSpecificationModal extends React.Component<IEmptyProperties, any> {

	render() {

		return (
			<div id="specificationContent" className="modal-content">
				<div className="modal-header">
					<span id="s3ModalCloseBtn" className="close-btn">
						<img src="assets/close_green_btn.svg" alt="close button" />
					</span>
				</div>
				<div className="modal-body">
					<div id="modalContentSpecContainer" className="modal-spec-content-container">
						<div id="modalSpecContentInfo" className="modal-spec-content-info">
						</div>
					</div>
				</div>
			</div>
		);

	}

}