/// <reference path="../interfaces/igrouping.ts" />
/// <reference path="enumerable.ts" />

class Grouping<TKey, TElement> extends Enumberable<TElement> implements IGrouping<TKey, TElement> {

	public Key: TKey;

	constructor(key: TKey, items:TElement[]) {
		super(items);
		this.Key = key;
	}


}