var genericCollection = new Collection();
genericCollection.Add(99);
describe("Collection Functionality", function () {
    describe("when there is one item in collection, the Any function", function () {
        it("should return true", function () {
            expect(genericCollection.Any()).toBe(true);
        });
    });
    describe("when there is one item in collection, the Count function", function () {
        it("should return 1", function () {
            expect(genericCollection.Count()).toBe(1);
        });
    });
    describe("when there is two items, 50 and 99 , the All function that states more than 50", function () {
        it("should return 99", function () {
            genericCollection.Add(50);
            expect(genericCollection.All(function (x) { return x > 50; })).toBe(true);
        });
    });
    describe("when there are multiple items , the Contains function looking for 50", function () {
        it("should return true", function () {
            expect(genericCollection.Contains(50)).toBe(true);
        });
    });
    describe("when there are multiple items , the ElementAt function", function () {
        it("should return 99 at position 0", function () {
            expect(genericCollection.ElementAt(0)).toBe(99);
        });
    });
    describe("when there are multiple items with the same number, the First function", function () {
        it("should return 50 when looking for the 50", function () {
            expect(genericCollection.First(function (x) { return x == 50; })).toBe(50);
        });
    });
    describe("when there are multiple items, the Index function", function () {
        it("should return 0 when looking for 90", function () {
            expect(genericCollection.IndexOf(99)).toBe(0);
        });
    });
    describe("when there are multiple items and adding value of 88, the Last function", function () {
        it("should return 88 when looking for 88", function () {
            genericCollection.Add(88);
            expect(genericCollection.Last(function (x) { return x == 88; })).toBe(88);
        });
    });
});
