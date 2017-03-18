/// <reference path="../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../js/interfaces/interfaces.d.ts" />

import { AXSummary } from "./summary/summarysection"

export class AXSummaryDisplay extends React.Component<IAXSummaryTabModel, any> {
	render() {

		var { Summary } = this.props;

		return (
			<div>
				<AXSummary AccessoriesText={Summary.AccessoriesText} DownloadSummaryText={Summary.DownloadSummaryText}
					EmailSummaryText={Summary.EmailSummaryText} HideBrowseCatalog={Summary.HideBrowseCatalog}
					MSRPText={Summary.MSRPText} TotalMSRPText={Summary.TotalMSRPText}
					ProductCategory={Summary.ProductCategory} SubtotalText={Summary.SubtotalText} />
			</div>
		)
	}
}