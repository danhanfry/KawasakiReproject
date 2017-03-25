/// <reference path="../interfaces/ireduxactions.ts" />
/// <reference path="../models/enums.ts" />

namespace Kawasaki {
	export class AXTabStore {
		private switchToPackageTab = (): IAXTabAction<IAXTabPayloadAction> => {

			const axTab: IAXTabPayloadAction = { tabSelection: AXReduxTypes.PackageTab.toString() };
			const axActionTab: IAXTabAction<IAXTabPayloadAction> = {
				type: AXReduxTypes.PackageTab.toString(),
				payload: axTab
			};

			return axActionTab;

		}

		private switchToAccessoriesTab = (): IAXTabAction<IAXTabPayloadAction> => {

			const axTab: IAXTabPayloadAction = { tabSelection: AXReduxTypes.AccessoriesTab.toString() };
			const axActionTab: IAXTabAction<IAXTabPayloadAction> = {
				type: AXReduxTypes.AccessoriesTab.toString(),
				payload: axTab
			};

			return axActionTab;

		}

		private switchToSummaryTab = (): IAXTabAction<IAXTabPayloadAction> => {

			const axTab: IAXTabPayloadAction = { tabSelection: AXReduxTypes.SummaryTab.toString() };
			const axActionTab: IAXTabAction<IAXTabPayloadAction> = {
				type: AXReduxTypes.SummaryTab.toString(),
				payload: axTab
			};

			return axActionTab;

		}
	}
}