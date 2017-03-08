/// <reference path="ienumberable.ts" />

interface IGrouping<TKey, TElement> extends IEnumberable<TElement> {

	Key: TKey;

}