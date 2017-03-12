/// <reference path="../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../js/interfaces/interfaces.d.ts" />

export class AXHeaderTabs extends React.Component<IEmptyProperties, any> {
	render() {

		return (
			<ul className="fit-steps small-block-grid-3">
				<li id="packagesTabId" className="active"><h2>1. packages</h2></li>
				<li id="customizeTabId"><h2>2. customize</h2></li>
				<li id="summaryTabId" className="last"><h2>3. summary</h2></li>
			</ul>
		)
	}
}