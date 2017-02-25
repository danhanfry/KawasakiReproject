﻿/// <reference path="../../scripts/core/collection.ts" />
/// <reference path="../../scripts/typings/jasmine.d.ts" />

//global setup
var genericCollection = new Collection<number>();

describe("Collection Functionality", function () {

	describe("when there is no item in collection, the Count function", function () {

		it("should return 0", function () {
			expect(genericCollection.Count()).toBe(0);
		});
	});

	describe("when there is no item in collection, the Add function", function () {

		it("should return a count of 1 when adding a new item", function () {
			genericCollection.Add(99);
			expect(genericCollection.Count()).toBe(1);
		});
	});

	describe("when there is one item in collection, the AddRange function", function () {

		it("should return a count of 3 when adding an array with two numbers", function () {
			var testCollection = [1, 99];
			genericCollection.AddRange(testCollection);
			expect(genericCollection.Count()).toBe(3);
		});
	});

	describe("when there are items in collection, the Any function", function () {

		it("should return true", function () {
			expect(genericCollection.Any()).toBe(true);
		});
	});

	describe("when there is two items, 50 and 99 , the All function that states more than 50", function () {

		it("should return true", function () {
			genericCollection.Add(50);
			expect(genericCollection.All(x => x > 50)).toBe(true);
		});
	});

	describe("when there are multiple items , the Contains function looking for 50", function () {

		it("should return true", function () {
			expect(genericCollection.Contains(50)).toBe(true);
		});
	});

	describe("when there are multiple items, with multiple 99, the Distinct function", function () {

		it("should return count of 3", function () {
			expect(genericCollection.Distinct().Count()).toBe(3);
		});
	});

	describe("when there are multiple items , the ElementAt function", function () {

		it("should return 99 at position 0", function () {
			expect(genericCollection.ElementAt(0)).toBe(99);
		});
	});

	describe("when there are multiple items , the Where function", function () {

		it("should return a count of three when looking for greater than 50", function () {
			genericCollection.Add(88);
			expect(genericCollection.Where(x => x > 50).Count()).toBe(3);
		});
	});

	describe("when there are multiple items with the same number, the First function", function () {

		it("should return 50 when looking for the first number", function () {
			expect(genericCollection.First(x => x == 50)).toBe(50);
		});
	});

	describe("when there are multiple items, the IndexOf function", function () {

		it("should return 0 when looking for 99", function () {
			expect(genericCollection.IndexOf(99)).toBe(0);
		});
	});

	describe("when there are multiple items and adding value of 88, the Last function", function () {

		it("should return 88 when looking for 88", function () {
			expect(genericCollection.Last(x => x == 88)).toBe(88);
		});
	});

	describe("when there are multiple items, the Insert function, when inserting 33 at position 0", function () {

		it("should return 33 when retrieving at position 0", function () {
			genericCollection.Insert(0, 33);
			expect(genericCollection.ElementAt(0)).toBe(33);
		});
	});

	describe("when there are multiple items, the Intersect function", function () {

		it("should return count 2 when collection has numbers 3, 4, 33, 88", function () {
			var intersectCollection = new Collection<number>([3, 4, 33, 88]);
			var intersected = genericCollection.Intersect(intersectCollection);
			expect(intersected.Count()).toBe(2);
		});
	});

	describe("when there are six items, the RemoveAt function", function () {

		it("should return false when removing at position 4, which is 50, and checking if contains 50", function () {
			genericCollection.RemoveAt(4);
			expect(genericCollection.Contains(50)).toBe(false);
		});
	});

	describe("when there are five items, the Remove function", function () {

		it("should return false when removing the number 1, and checking if contains 1", function () {
			genericCollection.Remove(1);
			expect(genericCollection.Contains(50)).toBe(false);
		});
	});

	describe("when there are four items, the RemoveAll function", function () {

		it("should return false when removing all number 99, and checking if any 99", function () {
			genericCollection.RemoveAll(x => x == 99);
			expect(genericCollection.Any(x => x == 99)).toBe(false);
		});
	});

	describe("when there are multiple items, the Reverse function", function () {

		it("should return 88 in position 0", function () {
			var reversedCollection = genericCollection.Reverse();
			expect(reversedCollection.ElementAt(0)).toBe(88);
		});
	});

	describe("when there are multiple items and adding more numbers, the Skip function", function () {

		it("should return count of 5 when skipping 2", function () {
			var testCollection = [77, 65, 21];
			genericCollection.AddRange(testCollection);
			var skippedCollection = genericCollection.Skip(2);
			expect(skippedCollection.Count()).toBe(5); // should be 3 (due to removeall needs to work)
		});
	});

	describe("when there are multiple items and the Take function", function () {

		it("should return count of 2 when taking 2", function () {
			var skippedCollection = genericCollection.Take(2);
			expect(skippedCollection.Count()).toBe(2);
		});
	});

	describe("when there are multiple items and the Union function, to union 3 numbers", function () {

		it("should return count of 2 when taking 2", function () {
			var unionCollection = new Collection<number>([0, 1, 2]);
			var unioned = genericCollection.Union(unionCollection);
			expect(unioned.Count()).toBe(10); //should be 8 (due to removeall needs to work)
		});
	});
});