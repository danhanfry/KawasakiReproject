/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/interfaces.d.ts" />
/// <reference path="../../../interfaces/vtr.d.ts" />
/// <reference path="../../../commonjs.ts" />

export class VTRModal extends React.Component<IEmptyProperties, any> {
	render() {

		const Common: Kawasaki.Common = new Kawasaki.Common();

		return (
			<div id="testVRContent" className="modal-content">
				<div className="modal-header">
					<span className="close-btn">
						<img src="assets/close_green_btn.svg" alt="close button" />
					</span>
				</div>
				<div className="modal-body">
					<div id="modalContentVTRContainer" className="modal-vtr-content-container">
						<div id="modalVTRContentInfo" className="modal-vtr-content-info">

						</div>
					</div>
				</div>
			</div>
		)
	}
}