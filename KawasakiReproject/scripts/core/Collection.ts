﻿//A typescript implementation of a generic Collection
class Collection<T> {

	// The underlying array data structure of the collection
	protected _items: Array<T> = [];

	constructor(items: T[] = []) {
		this._items = items;
	}

	// Add an object to the collection
	public Add = (item: T): void => {
		this._items.push(item);
	}

	public AddRange = (items: T[]): void => {
		this._items.push(...items);
	}

	public Aggregate = <U>(callbackfun: (previousValue: U, currentValue?: T, currentIndex?: number, list?: T[]) => any, initialValue ?: U): any => {
		return this._items.reduce(callbackfun, initialValue);
	}

	public All = (predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean => {
		return this._items.every(predicate);
	}

	public Any = (expression?: (value?: T, index?: number, list?: T[]) => boolean): boolean => {
		return expression === undefined ? this._items.length > 0 : this._items.some(expression);
	}

	public Clear = (): void => {
		this._items = [];
	}

	public Concat = (second: Collection<T>): Collection<T> => {
		var newConcatArray = this._items.concat(second.ToArray());
		return new Collection<T>(newConcatArray);
	}

	public Contains = (item: T): boolean => {
		return this._items.some(x => x === item);
	}

	// Length of the collection
	public Count = (expression?: (value?: T, index?: number, list?: T[]) => boolean): number => {
		return expression === undefined ? this._items.length : this.Where(expression).Count();
	}

	public DefaultIfEmpty = (defaultValue?: T): Collection<T> => {
		return this.Count() ? this : new Collection<T>([defaultValue]);
	}

	public Distinct = (): Collection<T> => {
		return this.Where((value: T, index: number, iter: T[]) => iter.indexOf(value) === index);
	}

	// Get a specific item from a collection given it's index
	public ElementAt = (index: number): T => {
		return this._items[index];
	}

	public ElementAtOrDefault = (index: number): T => {
		if (this.Count() == 0) {
			return undefined;
		}

		return this.ElementAt(index) || undefined;
	}

	public Except = (source: Collection<T>): Collection<T> => {
		return this.Where(x => !source.Contains(x));
	}

	public ForEach = (action: (value?: T, index?: number, list?: T[]) => any): void => {
		return this._items.forEach(action);
	}

	public First = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T => {
		return expression === undefined ? this._items[0] : this.Where(expression)[0];
	}

	public FirstOrDefault = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T => {
		if (this.Count() <= 0) {
			return undefined;
		}

		const firstWithExpression = this.First(expression);
		return (firstWithExpression === undefined ? undefined : firstWithExpression);
	}

	public GroupBy = (keyToGroup: (key: T) => T): Array<T[]> => {

		let groupedBy:Array<T[]> = [];
		for (let i = 0; i < this.Count(); i++) {
			let currentItemInCollection = this.ElementAt(i);
			let currentKey = keyToGroup(currentItemInCollection);
			if (currentKey) {
				let currentGroupBy = this.LookThroughGroupArray(currentKey, keyToGroup, groupedBy);
				if (currentGroupBy === undefined) {
					groupedBy.push([currentItemInCollection]);
				}
				else {
					currentGroupBy.push(currentItemInCollection);
				}
			}
		}

		return groupedBy;
	}

	public IndexOf = (item: T): number => {
		return this._items.indexOf(item);
	}

	// Find the index of a given object in a collection
	public IndexOfItem = (obj: T, fromIndex?: number): number => {
		if (fromIndex == null) {
			fromIndex = 0;
		}
		else if (fromIndex < 0) {
			fromIndex = Math.max(0, this._items.length + fromIndex);
		}

		for (var i = fromIndex, j = this._items.length; i < j; i++) {
			if (this._items[i] === obj) {
				return i;
			}
		}
		return -1;
	}

	public Insert = (index: number, element: T): void | Error => {
		if (index < 0 || index > this._items.length) {
			throw new Error('Index is out of range.');
		}

		this._items.splice(index, 0, element);
	}

	public Intersect = (source: Collection<T>): Collection<T> => {
		return this.Where(x => source.Contains(x));
	}

	public Last = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T => {
		const lengthIndex = this._items.length - 1;
		return expression === undefined ? this._items[lengthIndex] : this.Where(expression)[lengthIndex];
	}

	public LastOrDefault = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T => {
		if (this.Count() <= 0) {
			return undefined;
		}

		const lastWithExpression = this.Last(expression);
		return (lastWithExpression === undefined ? undefined : lastWithExpression);
	}

	public OrderBy = (keySelector: (key: T) => any): Collection<T> => {

		let orderArrayComparer:((a: T, b:T) =>any) = this.ComparerForKey(keySelector, false);
		let sortedArray:T[] = this._items.sort(orderArrayComparer);
		return new Collection<T>(sortedArray);
	}

	public OrderByDescending = (keySelector: (key: T) => any): Collection<T> => {

		let orderArrayComparer: ((a: T, b: T) => any) = this.ComparerForKey(keySelector, true);
		let sortedArray: T[] = this._items.sort(orderArrayComparer);
		return new Collection<T>(sortedArray);
	}

	public Remove = (item: T): boolean => {
		return this._items.indexOf(item) !== -1 ? (this.RemoveAt(this._items.indexOf(item)), true) : false;
	}

	public RemoveAll = (predicate: (value?: T, index?: number, list?: T[]) => boolean): Collection<T> => {
		return this.Where(this.Negate(predicate));
	}

	// Delete an object from the collection
	public RemoveAt = (itemIndex: number): void => {
		this._items.splice(itemIndex, 1);
	}

	public Reverse = (): Collection<T> => {

		const reversedArray = this._items.reverse();

		return new Collection<T>(reversedArray);
	}

	public Select = <U>(expression: (value?: T, index?: number, list?: T[]) => U): Collection<U> => {
		var newArrayMapper = this._items.map(expression);
		return new Collection<U>(newArrayMapper);
	}

	public Single = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T | TypeError => {
		if (this.Count() !== -1) {
			throw new TypeError('The collection does not contain exactly one element.');
		}

		return this.First(expression);
	}

	public SingleOrDefault = (expression?: (value?: T, index?: number, list?: T[]) => boolean): T | TypeError => {
		if (this.Count() > 1) {
			throw new TypeError('The collection contains more than one element.');
		}

		return this.Single(expression);
	}

	public Skip = (amount: number): Collection<T> => {
		if (this.Count() == 0) {
			return this.EmptyCollection();
		}

		const skippedArray = this._items.slice(Math.max(0, amount));
		return new Collection<T>(skippedArray);
	}

	public SkipWhile = (expression?: (value?: T, index?: number, list?: T[]) => boolean): Collection<T> => {
		var aggregated = this.Aggregate((prev, current) => expression(this.ElementAt(prev)) ? ++prev : prev, 0);
		return this.Skip(aggregated);
	}

	public Take = (amount: number): Collection<T> => {
		if (this.Count() == 0) {
			return this.EmptyCollection();
		}

		const takenArray = this._items.slice(0, Math.max(0, amount));
		return new Collection<T>(takenArray);
	}

	public TakeWhile = (expression?: (value?: T, index?: number, list?: T[]) => boolean): Collection<T> => {
		var aggregated = this.Aggregate((prev:number, current:T) => expression(this.ElementAt(prev)) ? ++prev : prev, 0);
		return this.Take(aggregated);
	}

	public Where = (expression?: (value?: T, index?: number, list?: T[]) => boolean): Collection<T> => {
		const filteredArray = this._items.filter(expression);
		return new Collection<T>(filteredArray);
	}

	public ToArray = (): T[] => {
		return this._items;
	}

	public Union = (second: Collection<T>): Collection<T> => {
		return this.Concat(second).Distinct();
	}

	private EmptyCollection = (): Collection<T> => {
		return new Collection<T>();
	}

	private Negate = (expression: (value?: T, index?: number, list?: T[]) => boolean): (() => any) => {
		var that = this;
		return function (): any {
			return !expression.apply(that, arguments);
		};
	}

	private ComparerForKey = (keySelector: (key: T) => any, descending?: boolean): ((a: T, b: T) => number) => {

		return (a: T, b: T) => {
			return this.Compare(a, b, keySelector, descending);
		};
	}

	private Compare = (a: T, b: T, keySelector: (key: T) => any, descending?: boolean): number => {
		const sortKeyA = keySelector(a);
		const sortKeyB = keySelector(b);
		if (sortKeyA > sortKeyB) {
			return (!descending ? 1 : -1);
		}

		if (sortKeyA < sortKeyB) {
			return (!descending ? -1 : 1);
		}

		return 0;
	}

	private ComposeComparers = (previousComparer: (a: T, b: T) => number, currentComparer: (a: T, b: T) => number): ((a: T, b: T) => number) => {

		return (a: T, b: T) => {
			let resultOfPreviousComparer = previousComparer(a, b);
			if (!resultOfPreviousComparer) {
				return currentComparer(a, b);
			}
			else {
				resultOfPreviousComparer;
			}
		};
	}

	private LookThroughGroupArray = (item: T, keyToGroup: (key: T) => T, groupedArray: Array<T[]>): T[] => {

		for (let i = 0; i < groupedArray.length; i++) {
			if (groupedArray[i].length > 0 && keyToGroup(groupedArray[i][0]) == item) {
				return groupedArray[i];
			}
		}

		return undefined;
	}
}