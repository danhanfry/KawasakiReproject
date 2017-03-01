/// <reference path="../abstractions/enumerable.ts" />

class Collection<T> extends Enumberable<T> {

	constructor(items: T[] = []) {
		super(items);
	}
}