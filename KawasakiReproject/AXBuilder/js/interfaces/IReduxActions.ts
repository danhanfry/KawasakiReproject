interface IAXTabAction<T> {
	type: string;
	error?: boolean;
	meta?: any;
	payload: T;
}

interface IAXTabPayloadAction {
	tabSelection: string;
}