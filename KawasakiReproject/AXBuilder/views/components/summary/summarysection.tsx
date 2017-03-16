/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../js/interfaces/interfaces.d.ts" />

export class CustomizeVehicleControls extends React.Component<IAXSummarySection, any> {
	render() {

		var model = this.props;

		return (

			<div className="summary">
				<section className="clearfix">
					<p className="left">{model.ProductCategory}</p>
					<p className="right summary-hide-price">{model.MSRPText}</p>
				</section>
				<section className="clearfix">
					<h2 className="left" id="summaryProductName"></h2>
					<h3 className="right" id="summaryProductPrice"></h3>
					<div className="clearfix">
						<p className="left">{model.AccessoriesText}</p>
						<p id="accessoryMSRP" className="right summary-hide-price">{model.MSRPText}</p>
					</div>
				</section>
				<section className="clearfix">
					<div id="summaryListOfAccessories" className="item-list clearfix">

					</div>
					<div className="subtotal">
						<h5 className="left summary-hide-price">{model.SubtotalText}</h5>
						<h5 className="right summary-hide-price" id="summarySubTotal">$0.00</h5>
					</div>
				</section>
				<section className="total clearfix">
					<div className="clearfix">
						<h6 className="left summary-hide-price">{model.TotalMSRPText}</h6>
						<h6 className="right"><div id="finalTotal" className="summary-hide-price"></div></h6>
					</div>

					<button data-download-summary className="green-btn">{model.DownloadSummaryText}</button>
					<button data-email-summary className="green-btn">{model.EmailSummaryText}</button>

					{
						model.HideBrowseCatalog &&
						<h6><a id="skip">Browse Accessories Catalog</a></h6>
					}

				</section>
			</div>
		)
	}

	private browseCatalogClick = (): void => {

		document.getElementById('noshow').style.display = 'none';
		let allNoShowClass = document.querySelectorAll('.noshow');
		for (let i = 0; i < allNoShowClass.length; i++) {
			let currentElement = allNoShowClass[i] as HTMLElement;
			currentElement.style.display = 'none';
		}

		/*$('.noshow').hide();
		$('#noshow').hide();
		$('#confirm-mdl-cat').foundation('reveal', 'open');*/
	}
}