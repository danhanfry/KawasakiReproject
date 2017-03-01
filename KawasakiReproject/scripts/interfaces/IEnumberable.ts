﻿interface IEnumberable<T> {
	Add(item: T): void;
	AddRange(items: T[]): void;
	Aggregate<U>(callbackfun: (previousValue: U, currentValue?: T, currentIndex?: number, list?: T[]) => any, initialValue?: U): any;
	All(predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean;
	Any(predicate: (value?: T, index?: number, list?: T[]) => boolean): boolean;
	Average(predicate: (value?: T, index?: number, list?: T[]) => boolean): number;
	Clear(): void;
	Concat(second: IEnumberable<T>): IEnumberable<T>;
	Contains(item: T): boolean;
	Count(predicate: (value?: T, index?: number, list?: T[]) => boolean): number;
	DefaultIfEmpty(defaultValue?: T): IEnumberable<T>;
	Distinct(): IEnumberable<T>;
	ElementAt(index: number): T;
	ElementAtOrDefault(index: number): T;
	Except(source: IEnumberable<T>): IEnumberable<T>;
	ForEach(action: (value?: T, index?: number, list?: T[]) => any): void;
	First(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	FirstOrDefault(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	IndexOf(item: T): number;
	Insert(index: number, element: T): void;
	Intersect(source: IEnumberable<T>): IEnumberable<T>;
	Last(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	LastOrDefault(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	Max(): T;
	Min(): T;
	OrderBy(keySelector: (key: T) => any): IEnumberable<T>;
	OrderByDescending(keySelector: (key: T) => any): IEnumberable<T>;
	Remove(item: T): boolean;
	RemoveAll(predicate: (value?: T, index?: number, list?: T[]) => boolean): number;
	RemoveAt(itemIndex: number): void;
	Reverse(): IEnumberable<T>;
	Select<U>(expression: (value?: T, index?: number, list?: T[]) => U): IEnumberable<U>;
	Single(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	SingleOrDefault(expression?: (value?: T, index?: number, list?: T[]) => boolean): T;
	Skip(amount: number): IEnumberable<T>;
	SkipWhile(expression?: (value?: T, index?: number, list?: T[]) => boolean): IEnumberable<T>;
	Sum(expression?: (value?: T, index?: number, list?: T[]) => number): number;
	Take(amount: number): IEnumberable<T>;
	TakeWhile(expression?: (value?: T, index?: number, list?: T[]) => boolean): IEnumberable<T>;
	Where(expression?: (value?: T, index?: number, list?: T[]) => boolean): IEnumberable<T>;
	ToArray(): T[];
	Union(second: IEnumberable<T>): IEnumberable<T>;
}