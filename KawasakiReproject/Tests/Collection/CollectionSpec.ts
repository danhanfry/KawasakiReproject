/// <reference path="../../scripts/core/collection.ts" />
/// <reference path="../../scripts/typings/jasmine.d.ts" />

class Book
{
	constructor(public Name: string, public Author: string, public Library: Collection<string>) {

	}
}

//global setup
var genericCollection = new Collection<number>();
var genericBookCollection = new Collection<Book>();
genericBookCollection.Add(new Book("book1", "author1", new Collection<string>(["L1", "L2"])));
genericBookCollection.Add(new Book("book2", "author2", new Collection<string>(["L8", "L9"])));
genericBookCollection.Add(new Book("book2", "author3", new Collection<string>(["L100", "L200"])));

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

	describe("when there are items in collection, the Aggregate function", function () {

		it("should return 199", function () {
			expect(genericCollection.Aggregate((a:number, b:number) => a + b)).toBe(199);
		});
	});

	describe("when there are items in collection, the Any function", function () {

		it("should return true", function () {
			expect(genericCollection.Any()).toBe(true);
		});
	});

	describe("when there is four items, 50 99, 1, and 99 , the All function that states greater or equal to 1", function () {

		it("should return true", function () {
			genericCollection.Add(50);
			expect(genericCollection.All(x => x >= 1)).toBe(true);
		});
	});

	describe("when there is four items, 50 99, 1, and 99 , the All function that states more than 50", function () {

		it("should return false", function () {
			expect(genericCollection.All(x => x > 50)).toBe(false);
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

	describe("when there are multiple items , the ElementAtOrDefault function", function () {

		it("should return 99 at position 0", function () {
			expect(genericCollection.ElementAtOrDefault(0)).toBe(99);
		});
	});

	describe("when there are multiple items , the ElementAtOrDefault function", function () {

		it("should return undefined at position 99", function () {
			expect(function () { genericCollection.ElementAtOrDefault(99); }).toThrowError('ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.');
		});
	});

	describe("when there are multiple items , the Except function", function () {

		it("should return count of 1 when excepting 1 and 99", function () {
			var exceptCollection = new Collection<number>([1, 99]);
			var excepted = genericCollection.Except(exceptCollection);
			expect(excepted.Count()).toBe(1);
		});
	});

	describe("when there are multiple items , the Exists function", function () {

		it("should return true when looking for the number 1", function () {
			expect(genericCollection.Exists(x => x == 1)).toBe(true);
		});
	});

	describe("when there are multiple items , the Exists function", function () {

		it("should return false when looking for the number 100", function () {
			expect(genericCollection.Exists(x => x == 100)).toBe(false);
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

	describe("when there are multiple items, the GetRange function", function () {

		it("should return the first element as 99 when index 2 and count of 2", function () {
			let getRangeCollection = genericCollection.GetRange(2, 2);
			expect(getRangeCollection.ElementAt(0)).toBe(99);
		});
	});

	describe("when there are multiple items, the IndexOf function", function () {

		it("should return 0 when looking for 99", function () {
			expect(genericCollection.IndexOf(99)).toBe(0);
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

	describe("when there are multiple items and adding value of 88, the Last function", function () {

		it("should return 88 when looking for 88", function () {
			expect(genericCollection.Last(x => x == 88)).toBe(88);
		});
	});

	describe("when there are multiple items, the OrderBy function", function () {

		it("should order them in ascending order with 1 as the first item in the new array", function () {
			let orderedCollection = genericCollection.OrderBy(x => x);
			expect(orderedCollection.ElementAt(0)).toBe(1);
		});
	});

	describe("when there are multiple items, the OrderByDescending function", function () {

		it("should order them in descending order with 99 as the first item in the new array", function () {
			let orderedCollection = genericCollection.OrderByDescending(x => x);
			expect(orderedCollection.ElementAt(0)).toBe(99);
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

		it("should return 2 when removing all number 99", function () {
			let removedAllNinteyNine = genericCollection.RemoveAll(x => x == 99);
			expect(removedAllNinteyNine).toBe(2);
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
			expect(skippedCollection.Count()).toBe(3);
		});
	});

	describe("when there are multiple items, the SkipWhile function", function () {

		it("should return count of 5 when skipping 2", function () {
			var skippedWhile = genericCollection.SkipWhile(x => x > 70);
			expect(skippedWhile.Count()).toBe(3);
		});
	});

	describe("when there are multiple items, the Sum function", function () {

		it("should return random", function () {
			expect(genericCollection.Sum(x => x)).toBe(284);
		});
	});

	describe("when there are multiple items and the Take function", function () {

		it("should return count of 2 when taking 2", function () {
			var skippedCollection = genericCollection.Take(2);
			expect(skippedCollection.Count()).toBe(2);
		});
	});

	describe("when there are multiple items and the TakeWhile function", function () {

		it("should return count of 1 when greater than 60", function () {
			var takeWhileCollection = genericCollection.TakeWhile(x => x > 60);
			expect(takeWhileCollection.Count()).toBe(1);
		});
	});

	describe("when there are multiple items and the Union function, to union 3 numbers", function () {

		it("should return count of 2 when taking 2", function () {
			var unionCollection = new Collection<number>([0, 1, 2]);
			var unioned = genericCollection.Union(unionCollection);
			expect(unioned.Count()).toBe(8);
		});
	});

	describe("when there are multiple items and the Clear function", function () {

		it("should return count of  0", function () {
			genericCollection.Clear();
			expect(genericCollection.Count()).toBe(0);
		});
	});

	describe("when there are multiple items and the InsertRange function", function () {

		it("should return number 11 at position 2", function () {
			genericCollection.AddRange([55, 67, 88, 400]);
			genericCollection.InsertRange(2, new Collection<number>([11, 2, 5000]));
			expect(genericCollection.ElementAt(2)).toBe(11);
		});
	});

	describe("when there are multiple items and the RemoveRange function", function () {

		it("should return number 400 for the last item when removing from position 3 with deletecount 3", function () {
			genericCollection.RemoveRange(3, 3);
			expect(genericCollection.Last()).toBe(400);
		});
	});

	describe("when there lots of books and the Select function", function () {

		it("return 'book1' when selecting name and looking at position 0", function () {
			expect(genericBookCollection.Select(x => x.Name).ElementAt(0)).toBe("book1");
		});
	});

	describe("when there lots of books and the SelectMany function", function () {

		it("return count of six when looking at the library field", function () {
			expect(genericBookCollection.SelectMany(x => x.Library).Count()).toBe(6);
		});
	});

	describe("when there lots of books and the Groupby function", function () {

		it("false", function () {
			let a = genericBookCollection.GroupBy(x => x.Name, x => x.Author);
			expect(genericBookCollection.Any()).toBe(false);
		});
	});
});