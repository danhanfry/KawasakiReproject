"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enumberable = (function () {
    function Enumberable(items) {
        if (items === void 0) { items = []; }
        var _this = this;
        // The underlying array data structure of the collection
        this._items = [];
        // Add an object to the collection
        this.Add = function (item) {
            _this._items.push(item);
        };
        this.AddRange = function (items) {
            (_a = _this._items).push.apply(_a, items);
            var _a;
        };
        this.Aggregate = function (callbackfun, initialValue) {
            if (_this.Count() <= 0) {
                return undefined;
            }
            var newerInitialValue = initialValue === undefined ? _this.DefaultValuePerType(_this.First()) : initialValue;
            return _this._items.reduce(callbackfun, newerInitialValue);
        };
        this.All = function (predicate) {
            return _this._items.every(predicate);
        };
        this.Any = function (expression) {
            return expression === undefined ? _this._items.length > 0 : _this._items.some(expression);
        };
        this.Average = function (expression) {
            if (_this.Count() < 0) {
                throw new Error("No items in the collection.");
            }
            var collectionItemType = typeof _this.ElementAt(0);
            if (collectionItemType !== "number") {
                throw new Error(collectionItemType + " does have the defintion of 'Average'");
            }
            return _this.Sum(expression) / _this.Count(expression);
        };
        this.Clear = function () {
            _this._items = [];
        };
        this.Concat = function (second) {
            var newConcatArray = _this._items.concat(second.ToArray());
            return new Enumberable(newConcatArray);
        };
        this.Contains = function (item) {
            return _this._items.some(function (x) { return x === item; });
        };
        // Length of the collection
        this.Count = function (expression) {
            return expression === undefined ? _this._items.length : _this.Where(expression).Count();
        };
        this.DefaultIfEmpty = function (defaultValue) {
            return _this.Count() ? _this : new Enumberable([defaultValue]);
        };
        this.Distinct = function () {
            return _this.Where(function (value, index, iter) { return iter.indexOf(value) === index; });
        };
        // Get a specific item from a collection given it's index
        this.ElementAt = function (index) {
            if (_this.Count() == 0 || index > _this.Count()) {
                throw new Error('ArgumentOutOfRangeException: index is less than 0 or greater than or equal to the number of elements in source.');
            }
            return _this._items[index];
        };
        this.ElementAtOrDefault = function (index) {
            return _this.ElementAt(index) || undefined;
        };
        this.Except = function (source) {
            return _this.Where(function (x) { return !source.Contains(x); });
        };
        this.Exists = function (predicate) {
            return _this.Where(predicate).Count() > 0;
        };
        this.ForEach = function (action) {
            return _this._items.forEach(action);
        };
        this.First = function (expression) {
            if (_this.Count() < 0) {
                throw new Error('InvalidOperationException: The source sequence is empty.');
            }
            return expression === undefined ? _this._items[0] : _this.Where(expression).First();
        };
        this.FirstOrDefault = function (expression) {
            if (_this.Count() <= 0) {
                return undefined;
            }
            var firstWithExpression = _this.First(expression);
            return (firstWithExpression === undefined ? undefined : firstWithExpression);
        };
        this.GetRange = function (index, count) {
            var absIndex = Math.abs(index);
            var absCount = Math.abs(count);
            var finalCount = absIndex + absCount > _this._items.length ? (_this._items.length - 1) : absIndex + absCount;
            return new Enumberable(_this._items.slice(absIndex, finalCount));
        };
        this.GroupBy = function (keySelector, elementSelector) {
            //let groupedEnumberable = new Enumberable<IGrouping<any, any>>();
            _this.Aggregate(function (grouped, item) { return (grouped[keySelector(item)] ?
                grouped[keySelector(item)].push(elementSelector(item)) :
                grouped[keySelector(item)] = [elementSelector(item)], grouped); }, {});
        };
        this.IndexOf = function (item, startIndex) {
            return _this._items.indexOf(item, startIndex);
        };
        this.Insert = function (index, element) {
            if (index < 0 || index > _this._items.length) {
                throw new Error('Index is out of range.');
            }
            _this._items.splice(index, 0, element);
        };
        this.InsertRange = function (index, source) {
            var currentIndex = index;
            source.ToArray().forEach(function (item) {
                _this.Insert(currentIndex, item);
                currentIndex++;
            });
        };
        this.Intersect = function (source) {
            return _this.Where(function (x) { return source.Contains(x); });
        };
        this.Last = function (expression) {
            if (_this.Count() < 0) {
                throw new Error('InvalidOperationException: The source sequence is empty.');
            }
            return expression === undefined ? _this._items[_this._items.length - 1] : _this.Where(expression).Last();
        };
        this.LastOrDefault = function (expression) {
            if (_this.Count() <= 0) {
                return undefined;
            }
            var lastWithExpression = _this.Last(expression);
            return (lastWithExpression === undefined ? undefined : lastWithExpression);
        };
        this.LastIndexOf = function (item, startIndex) {
            return _this._items.lastIndexOf(item, startIndex);
        };
        this.Max = function () {
            return _this.Aggregate(function (currentMax, currentValue) { return currentMax > currentValue ? currentMax : currentValue; });
        };
        this.MemberwiseClone = function () {
            return new Enumberable(_this._items.slice(0));
        };
        this.Min = function () {
            return _this.Aggregate(function (currentMin, currentValue) { return currentMin < currentValue ? currentMin : currentValue; });
        };
        this.OrderBy = function (keySelector) {
            var orderArrayComparer = _this.ComparerForKey(keySelector, false);
            return new Enumberable(_this._items.slice(0).sort(orderArrayComparer));
        };
        this.OrderByDescending = function (keySelector) {
            var orderArrayComparer = _this.ComparerForKey(keySelector, true);
            return new Enumberable(_this._items.slice(0).sort(orderArrayComparer));
        };
        this.Remove = function (item) {
            return _this._items.indexOf(item) !== -1 ? (_this.RemoveAt(_this._items.indexOf(item)), true) : false;
        };
        this.RemoveAll = function (predicate) {
            var itemsToBeRemoved = _this.Where(predicate);
            itemsToBeRemoved.ToArray().forEach(function (item) {
                _this.Remove(item);
            });
            return itemsToBeRemoved.Count();
        };
        // Delete an object from the collection
        this.RemoveAt = function (index) {
            _this.RemoveRange(index, 1);
        };
        this.RemoveRange = function (index, count) {
            _this._items.splice(index, count);
        };
        this.Reverse = function () {
            return new Enumberable(_this._items.reverse());
        };
        this.Select = function (expression) {
            var newArrayMapper = _this._items.map(expression);
            return new Enumberable(newArrayMapper);
        };
        this.SelectMany = function (expression) {
            return _this.Aggregate(function (groupedCollection, currentValue, currentIndex) { return (groupedCollection.AddRange(_this.Select(expression).ElementAt(currentIndex).ToArray()), groupedCollection); }, new Enumberable());
        };
        this.Single = function (expression) {
            if (_this.Count() !== -1) {
                throw new Error('The collection does not contain exactly one element.');
            }
            return _this.First(expression);
        };
        this.SingleOrDefault = function (expression) {
            if (_this.Count() > 1) {
                throw new Error('The collection contains more than one element.');
            }
            return _this.Single(expression);
        };
        this.Skip = function (amount) {
            if (_this.Count() == 0) {
                return _this;
            }
            var skippedArray = _this._items.slice(Math.abs(amount));
            return new Enumberable(skippedArray);
        };
        this.SkipWhile = function (expression) {
            var skipWhileCollection = _this.Negate(expression);
            return _this.Where(skipWhileCollection);
        };
        this.Sum = function (expression) {
            if (_this.Count() < 0) {
                throw new Error("No items in the collection.");
            }
            var collectionItemType = typeof _this.ElementAt(0);
            if (collectionItemType !== "number") {
                throw new Error(collectionItemType + " does have the defintion of 'Sum'");
            }
            return expression === undefined ? _this.Aggregate(function (result, currentValue) { return result += currentValue; }) : _this.Select(expression).Sum();
        };
        this.Take = function (amount) {
            if (_this.Count() == 0) {
                return _this;
            }
            var takenArray = _this._items.slice(0, Math.abs(amount));
            return new Enumberable(takenArray);
        };
        this.TakeWhile = function (expression) {
            var takeWhileIdx = _this.Aggregate(function (prev, currentValue) { return expression(_this.ElementAt(prev)) ? ++prev : prev; });
            return _this.Take(takeWhileIdx);
        };
        this.Where = function (expression) {
            var filteredArray = _this._items.filter(expression);
            return new Enumberable(filteredArray);
        };
        this.ToArray = function () {
            return _this._items;
        };
        this.Union = function (second) {
            return _this.Concat(second);
        };
        this.ComparerForKey = function (keySelector, descending) {
            return function (a, b) {
                return _this.Compare(a, b, keySelector, descending);
            };
        };
        this.Compare = function (a, b, keySelector, descending) {
            var sortKeyA = keySelector(a);
            var sortKeyB = keySelector(b);
            if (sortKeyA > sortKeyB) {
                return (!descending ? 1 : -1);
            }
            if (sortKeyA < sortKeyB) {
                return (!descending ? -1 : 1);
            }
            return 0;
        };
        this.ComposeComparers = function (previousComparer, currentComparer) {
            return function (a, b) {
                var resultOfPreviousComparer = previousComparer(a, b);
                if (!resultOfPreviousComparer) {
                    return currentComparer(a, b);
                }
                else {
                    resultOfPreviousComparer;
                }
            };
        };
        this.DefaultValuePerType = function (collectionType) {
            switch (typeof collectionType) {
                case "undefined":
                    {
                        return undefined;
                    }
                case "number":
                    {
                        return 0;
                    }
                case "string":
                    {
                        return "";
                    }
                case "boolean":
                    {
                        return false;
                    }
                case "object":
                    {
                        if (collectionType === null) {
                            return {};
                        }
                        var isArray = Array.isArray(collectionType);
                        if (isArray) {
                            return [];
                        }
                        return {};
                    }
            }
            ;
        };
        this.LookThroughGroupArray = function (item, keyToGroup, groupedArray) {
            for (var i = 0; i < groupedArray.length; i++) {
                if (groupedArray[i].length > 0 && keyToGroup(groupedArray[i][0]) == item) {
                    return groupedArray[i];
                }
            }
            return undefined;
        };
        this._items = items;
    }
    Enumberable.prototype.Negate = function (expression) {
        return function () {
            return !expression.apply(this, arguments);
        };
    };
    return Enumberable;
}());
exports.Enumberable = Enumberable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW1lcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtDLHFCQUFZLEtBQWU7UUFBZixzQkFBQSxFQUFBLFVBQWU7UUFBM0IsaUJBRUM7UUFMRCx3REFBd0Q7UUFDOUMsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQU1oQyxrQ0FBa0M7UUFDM0IsUUFBRyxHQUFHLFVBQUMsSUFBTztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFTSxhQUFRLEdBQUcsVUFBQyxLQUFVO1lBQzVCLENBQUEsS0FBQSxLQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsSUFBSSxXQUFJLEtBQUssRUFBRTs7UUFDNUIsQ0FBQyxDQUFBO1FBRU0sY0FBUyxHQUFHLFVBQUksV0FBMkYsRUFBRSxZQUFnQjtZQUNuSSxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNsQixDQUFDO1lBRUQsSUFBTSxpQkFBaUIsR0FBVSxZQUFZLEtBQUssU0FBUyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDcEgsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQTtRQUVNLFFBQUcsR0FBRyxVQUFDLFNBQTZEO1lBQzFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUE7UUFFTSxRQUFHLEdBQUcsVUFBQyxVQUErRDtZQUM1RSxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMs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O3dCQUNuQixDQUFDO3dCQUVELE1BQU0sQ0FBUyxFQUFFLENBQUM7b0JBQ25CLENBQUM7WUFDSCxDQUFDO1lBQUEsQ0FBQztRQUNILENBQUMsQ0FBQTtRQUVPLDBCQUFxQixHQUFHLFVBQUMsSUFBTyxFQUFFLFVBQXlCLEVBQUUsWUFBd0I7WUFFNUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO1lBQ0YsQ0FBQztZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBallBLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFrWU8sNEJBQU0sR0FBZCxVQUFlLFVBQThEO1FBQzVFLE1BQU0sQ0FBQztZQUNOLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRixrQkFBQztBQUFELENBQUMsQUEvWUQsSUErWUM7QUEvWVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW51bWJlcmFibGU8VD4gaW1wbGVtZW50cyBJRW51bWJlcmFibGU8VD4ge1xyXG5cclxuXHQvLyBUaGUgdW5kZXJseWluZyBhcnJheSBkYXRhIHN0cnVjdHVyZSBvZiB0aGUgY29sbGVjdGlvblxyXG5cdHByb3RlY3RlZCBfaXRlbXM6IEFycmF5PFQ+ID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGl0ZW1zOiBUW10gPSBbXSkge1xyXG5cdFx0dGhpcy5faXRlbXMgPSBpdGVtcztcclxuXHR9XHJcblxyXG5cdC8vIEFkZCBhbiBvYmplY3QgdG8gdGhlIGNvbGxlY3Rpb25cclxuXHRwdWJsaWMgQWRkID0gKGl0ZW06IFQpOiB2b2lkID0+IHtcclxuXHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgQWRkUmFuZ2UgPSAoaXRlbXM6IFRbXSk6IHZvaWQgPT4ge1xyXG5cdFx0dGhpcy5faXRlbXMucHVzaCguLi5pdGVtcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgQWdncmVnYXRlID0gPFU+KGNhbGxiYWNrZnVuOiAocHJldmlvdXNWYWx1ZTogVSwgY3VycmVudFZhbHVlPzogVCwgY3VycmVudEluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBhbnksIGluaXRpYWxWYWx1ZT86IFUpOiBhbnkgPT4ge1xyXG5cdFx0aWYgKHRoaXMuQ291bnQoKSA8PSAwKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbmV3ZXJJbml0aWFsVmFsdWU6IFQgfCBVID0gaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLkRlZmF1bHRWYWx1ZVBlclR5cGUodGhpcy5GaXJzdCgpKSA6IGluaXRpYWxWYWx1ZTtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtcy5yZWR1Y2UoY2FsbGJhY2tmdW4sIG5ld2VySW5pdGlhbFZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBBbGwgPSAocHJlZGljYXRlOiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLmV2ZXJ5KHByZWRpY2F0ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgQW55ID0gKGV4cHJlc3Npb24/OiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xyXG5cdFx0cmV0dXJuIGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDAgOiB0aGlzLl9pdGVtcy5zb21lKGV4cHJlc3Npb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEF2ZXJhZ2UgPSAoZXhwcmVzc2lvbj86ICh2YWx1ZT86IFQsIGluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBhbnkpOiBudW1iZXIgPT4ge1xyXG5cclxuXHRcdGlmICh0aGlzLkNvdW50KCkgPCAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIGl0ZW1zIGluIHRoZSBjb2xsZWN0aW9uLlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBjb2xsZWN0aW9uSXRlbVR5cGUgPSB0eXBlb2YgdGhpcy5FbGVtZW50QXQoMCk7XHJcblx0XHRpZiAoY29sbGVjdGlvbkl0ZW1UeXBlICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihjb2xsZWN0aW9uSXRlbVR5cGUgKyBcIiBkb2VzIGhhdmUgdGhlIGRlZmludGlvbiBvZiAnQXZlcmFnZSdcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuU3VtKGV4cHJlc3Npb24pIC8gdGhpcy5Db3VudChleHByZXNzaW9uKTtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgQ2xlYXIgPSAoKTogdm9pZCA9PiB7XHJcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIENvbmNhdCA9IChzZWNvbmQ6IEVudW1iZXJhYmxlPFQ+KTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0dmFyIG5ld0NvbmNhdEFycmF5ID0gdGhpcy5faXRlbXMuY29uY2F0KHNlY29uZC5Ub0FycmF5KCkpO1xyXG5cdFx0cmV0dXJuIG5ldyBFbnVtYmVyYWJsZTxUPihuZXdDb25jYXRBcnJheSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgQ29udGFpbnMgPSAoaXRlbTogVCk6IGJvb2xlYW4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLnNvbWUoeCA9PiB4ID09PSBpdGVtKTtcclxuXHR9XHJcblxyXG5cdC8vIExlbmd0aCBvZiB0aGUgY29sbGVjdGlvblxyXG5cdHB1YmxpYyBDb3VudCA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBudW1iZXIgPT4ge1xyXG5cdFx0cmV0dXJuIGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2l0ZW1zLmxlbmd0aCA6IHRoaXMuV2hlcmUoZXhwcmVzc2lvbikuQ291bnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBEZWZhdWx0SWZFbXB0eSA9IChkZWZhdWx0VmFsdWU/OiBUKTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuQ291bnQoKSA/IHRoaXMgOiBuZXcgRW51bWJlcmFibGU8VD4oW2RlZmF1bHRWYWx1ZV0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIERpc3RpbmN0ID0gKCk6IEVudW1iZXJhYmxlPFQ+ID0+IHtcclxuXHRcdHJldHVybiB0aGlzLldoZXJlKCh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgaXRlcjogVFtdKSA9PiBpdGVyLmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XHJcblx0fVxyXG5cclxuXHQvLyBHZXQgYSBzcGVjaWZpYyBpdGVtIGZyb20gYSBjb2xsZWN0aW9uIGdpdmVuIGl0J3MgaW5kZXhcclxuXHRwdWJsaWMgRWxlbWVudEF0ID0gKGluZGV4OiBudW1iZXIpOiBUID0+IHtcclxuXHRcdGlmICh0aGlzLkNvdW50KCkgPT0gMCB8fCBpbmRleCA+IHRoaXMuQ291bnQoKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50T3V0T2ZSYW5nZUV4Y2VwdGlvbjogaW5kZXggaXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gc291cmNlLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgRWxlbWVudEF0T3JEZWZhdWx0ID0gKGluZGV4OiBudW1iZXIpOiBUID0+IHtcclxuXHRcdHJldHVybiB0aGlzLkVsZW1lbnRBdChpbmRleCkgfHwgdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEV4Y2VwdCA9IChzb3VyY2U6IEVudW1iZXJhYmxlPFQ+KTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuV2hlcmUoeCA9PiAhc291cmNlLkNvbnRhaW5zKHgpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBFeGlzdHMgPSAocHJlZGljYXRlOiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuV2hlcmUocHJlZGljYXRlKS5Db3VudCgpID4gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBGb3JFYWNoID0gKGFjdGlvbjogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGFueSk6IHZvaWQgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLmZvckVhY2goYWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBGaXJzdCA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBUID0+IHtcclxuXHRcdGlmICh0aGlzLkNvdW50KCkgPCAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZE9wZXJhdGlvbkV4Y2VwdGlvbjogVGhlIHNvdXJjZSBzZXF1ZW5jZSBpcyBlbXB0eS4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5faXRlbXNbMF0gOiB0aGlzLldoZXJlKGV4cHJlc3Npb24pLkZpcnN0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgRmlyc3RPckRlZmF1bHQgPSAoZXhwcmVzc2lvbj86ICh2YWx1ZT86IFQsIGluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBib29sZWFuKTogVCA9PiB7XHJcblx0XHRpZiAodGhpcy5Db3VudCgpIDw9IDApIHtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmaXJzdFdpdGhFeHByZXNzaW9uID0gdGhpcy5GaXJzdChleHByZXNzaW9uKTtcclxuXHRcdHJldHVybiAoZmlyc3RXaXRoRXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlyc3RXaXRoRXhwcmVzc2lvbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgR2V0UmFuZ2UgPSAoaW5kZXg6IG51bWJlciwgY291bnQ6IG51bWJlcik6IEVudW1iZXJhYmxlPFQ+ID0+IHtcclxuXHJcblx0XHRjb25zdCBhYnNJbmRleDogbnVtYmVyID0gTWF0aC5hYnMoaW5kZXgpO1xyXG5cdFx0Y29uc3QgYWJzQ291bnQ6IG51bWJlciA9IE1hdGguYWJzKGNvdW50KTtcclxuXHRcdGNvbnN0IGZpbmFsQ291bnQ6IG51bWJlciA9IGFic0luZGV4ICsgYWJzQ291bnQgPiB0aGlzLl9pdGVtcy5sZW5ndGggPyAodGhpcy5faXRlbXMubGVuZ3RoIC0gMSkgOiBhYnNJbmRleCArIGFic0NvdW50O1xyXG5cdFx0cmV0dXJuIG5ldyBFbnVtYmVyYWJsZTxUPih0aGlzLl9pdGVtcy5zbGljZShhYnNJbmRleCwgZmluYWxDb3VudCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEdyb3VwQnkgPSAoa2V5U2VsZWN0b3I6IChrZXk6IFQpID0+IGFueSwgZWxlbWVudFNlbGVjdG9yOiAoa2V5OiBUKSA9PiBhbnkpOiB2b2lkID0+IHtcclxuXHJcblx0XHQvL2xldCBncm91cGVkRW51bWJlcmFibGUgPSBuZXcgRW51bWJlcmFibGU8SUdyb3VwaW5nPGFueSwgYW55Pj4oKTtcclxuXHJcblx0XHR0aGlzLkFnZ3JlZ2F0ZShcclxuXHRcdFx0KGdyb3VwZWQsIGl0ZW0pID0+ICgoPGFueT5ncm91cGVkKVtrZXlTZWxlY3RvcihpdGVtKV0gP1xyXG5cdFx0XHRcdCg8YW55Pmdyb3VwZWQpW2tleVNlbGVjdG9yKGl0ZW0pXS5wdXNoKGVsZW1lbnRTZWxlY3RvcihpdGVtKSkgOlxyXG5cdFx0XHRcdCg8YW55Pmdyb3VwZWQpW2tleVNlbGVjdG9yKGl0ZW0pXSA9IFtlbGVtZW50U2VsZWN0b3IoaXRlbSldLCBncm91cGVkKSxcclxuXHRcdFx0e30pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEluZGV4T2YgPSAoaXRlbTogVCwgc3RhcnRJbmRleD86bnVtYmVyKTogbnVtYmVyID0+IHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0sIHN0YXJ0SW5kZXgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEluc2VydCA9IChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBUKTogdm9pZCA9PiB7XHJcblx0XHRpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW5kZXggaXMgb3V0IG9mIHJhbmdlLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZShpbmRleCwgMCwgZWxlbWVudCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgSW5zZXJ0UmFuZ2UgPSAoaW5kZXg6IG51bWJlciwgc291cmNlOiBJRW51bWJlcmFibGU8VD4pOiB2b2lkID0+IHtcclxuXHRcdGxldCBjdXJyZW50SW5kZXggPSBpbmRleDtcclxuXHRcdHNvdXJjZS5Ub0FycmF5KCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLkluc2VydChjdXJyZW50SW5kZXgsIGl0ZW0pO1xyXG5cdFx0XHRjdXJyZW50SW5kZXgrKztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIEludGVyc2VjdCA9IChzb3VyY2U6IEVudW1iZXJhYmxlPFQ+KTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuV2hlcmUoeCA9PiBzb3VyY2UuQ29udGFpbnMoeCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIExhc3QgPSAoZXhwcmVzc2lvbj86ICh2YWx1ZT86IFQsIGluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBib29sZWFuKTogVCA9PiB7XHJcblxyXG5cdFx0aWYgKHRoaXMuQ291bnQoKSA8IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uOiBUaGUgc291cmNlIHNlcXVlbmNlIGlzIGVtcHR5LicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBleHByZXNzaW9uID09PSB1bmRlZmluZWQgPyB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuV2hlcmUoZXhwcmVzc2lvbikuTGFzdCgpO1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBMYXN0T3JEZWZhdWx0ID0gKGV4cHJlc3Npb24/OiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gYm9vbGVhbik6IFQgPT4ge1xyXG5cdFx0aWYgKHRoaXMuQ291bnQoKSA8PSAwKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGFzdFdpdGhFeHByZXNzaW9uID0gdGhpcy5MYXN0KGV4cHJlc3Npb24pO1xyXG5cdFx0cmV0dXJuIChsYXN0V2l0aEV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGxhc3RXaXRoRXhwcmVzc2lvbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgTGFzdEluZGV4T2YgPSAoaXRlbTogVCwgc3RhcnRJbmRleD86bnVtYmVyKTogbnVtYmVyID0+IHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtcy5sYXN0SW5kZXhPZihpdGVtLCBzdGFydEluZGV4KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNYXggPSAoKTogVCA9PiB7XHJcblx0XHRyZXR1cm4gPFQ+dGhpcy5BZ2dyZWdhdGUoKGN1cnJlbnRNYXg6IFQsIGN1cnJlbnRWYWx1ZTogVCkgPT4gY3VycmVudE1heCA+IGN1cnJlbnRWYWx1ZSA/IGN1cnJlbnRNYXggOiBjdXJyZW50VmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIE1lbWJlcndpc2VDbG9uZSA9ICgpOiBFbnVtYmVyYWJsZTxUPiA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IEVudW1iZXJhYmxlPFQ+KHRoaXMuX2l0ZW1zLnNsaWNlKDApKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBNaW4gPSAoKTogVCA9PiB7XHJcblx0XHRyZXR1cm4gPFQ+dGhpcy5BZ2dyZWdhdGUoKGN1cnJlbnRNaW46IFQsIGN1cnJlbnRWYWx1ZTogVCkgPT4gY3VycmVudE1pbiA8IGN1cnJlbnRWYWx1ZSA/IGN1cnJlbnRNaW4gOiBjdXJyZW50VmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIE9yZGVyQnkgPSAoa2V5U2VsZWN0b3I6IChrZXk6IFQpID0+IGFueSk6IEVudW1iZXJhYmxlPFQ+ID0+IHtcclxuXHRcdGxldCBvcmRlckFycmF5Q29tcGFyZXI6ICgoYTogVCwgYjogVCkgPT4gYW55KSA9IHRoaXMuQ29tcGFyZXJGb3JLZXkoa2V5U2VsZWN0b3IsIGZhbHNlKTtcclxuXHRcdHJldHVybiBuZXcgRW51bWJlcmFibGUodGhpcy5faXRlbXMuc2xpY2UoMCkuc29ydChvcmRlckFycmF5Q29tcGFyZXIpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBPcmRlckJ5RGVzY2VuZGluZyA9IChrZXlTZWxlY3RvcjogKGtleTogVCkgPT4gYW55KTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0bGV0IG9yZGVyQXJyYXlDb21wYXJlcjogKChhOiBULCBiOiBUKSA9PiBhbnkpID0gdGhpcy5Db21wYXJlckZvcktleShrZXlTZWxlY3RvciwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gbmV3IEVudW1iZXJhYmxlKHRoaXMuX2l0ZW1zLnNsaWNlKDApLnNvcnQob3JkZXJBcnJheUNvbXBhcmVyKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgUmVtb3ZlID0gKGl0ZW06IFQpOiBib29sZWFuID0+IHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pICE9PSAtMSA/ICh0aGlzLlJlbW92ZUF0KHRoaXMuX2l0ZW1zLmluZGV4T2YoaXRlbSkpLCB0cnVlKSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFJlbW92ZUFsbCA9IChwcmVkaWNhdGU6ICh2YWx1ZT86IFQsIGluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBib29sZWFuKTogbnVtYmVyID0+IHtcclxuXHRcdGNvbnN0IGl0ZW1zVG9CZVJlbW92ZWQgPSB0aGlzLldoZXJlKHByZWRpY2F0ZSk7XHJcblx0XHRpdGVtc1RvQmVSZW1vdmVkLlRvQXJyYXkoKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuUmVtb3ZlKGl0ZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zVG9CZVJlbW92ZWQuQ291bnQoKTtcclxuXHR9XHJcblxyXG5cdC8vIERlbGV0ZSBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvblxyXG5cdHB1YmxpYyBSZW1vdmVBdCA9IChpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcblx0XHR0aGlzLlJlbW92ZVJhbmdlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBSZW1vdmVSYW5nZSA9IChpbmRleDogbnVtYmVyLCBjb3VudDpudW1iZXIpOiB2b2lkID0+IHtcclxuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZShpbmRleCwgY291bnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFJldmVyc2UgPSAoKTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBFbnVtYmVyYWJsZTxUPih0aGlzLl9pdGVtcy5yZXZlcnNlKCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFNlbGVjdCA9IDxVPihleHByZXNzaW9uOiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gVSk6IEVudW1iZXJhYmxlPFU+ID0+IHtcclxuXHRcdHZhciBuZXdBcnJheU1hcHBlciA9IHRoaXMuX2l0ZW1zLm1hcChleHByZXNzaW9uKTtcclxuXHRcdHJldHVybiBuZXcgRW51bWJlcmFibGU8VT4obmV3QXJyYXlNYXBwZXIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFNlbGVjdE1hbnkgPSA8VSBleHRlbmRzIEVudW1iZXJhYmxlPGFueT4+KGV4cHJlc3Npb246ICh2YWx1ZT86IFQsIGluZGV4PzogbnVtYmVyLCBsaXN0PzogVFtdKSA9PiBVKTogVSA9PiB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuQWdncmVnYXRlKChncm91cGVkQ29sbGVjdGlvbjogVSwgY3VycmVudFZhbHVlLCBjdXJyZW50SW5kZXgpID0+IChncm91cGVkQ29sbGVjdGlvbi5BZGRSYW5nZSh0aGlzLlNlbGVjdChleHByZXNzaW9uKS5FbGVtZW50QXQoY3VycmVudEluZGV4KS5Ub0FycmF5KCkpLCBncm91cGVkQ29sbGVjdGlvbiksIG5ldyBFbnVtYmVyYWJsZTxhbnk+KCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFNpbmdsZSA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBUID0+IHtcclxuXHRcdGlmICh0aGlzLkNvdW50KCkgIT09IC0xKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGNvbGxlY3Rpb24gZG9lcyBub3QgY29udGFpbiBleGFjdGx5IG9uZSBlbGVtZW50LicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLkZpcnN0KGV4cHJlc3Npb24pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFNpbmdsZU9yRGVmYXVsdCA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBUID0+IHtcclxuXHRcdGlmICh0aGlzLkNvdW50KCkgPiAxKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGNvbGxlY3Rpb24gY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLlNpbmdsZShleHByZXNzaW9uKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBTa2lwID0gKGFtb3VudDogbnVtYmVyKTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0aWYgKHRoaXMuQ291bnQoKSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHNraXBwZWRBcnJheSA9IHRoaXMuX2l0ZW1zLnNsaWNlKE1hdGguYWJzKGFtb3VudCkpO1xyXG5cdFx0cmV0dXJuIG5ldyBFbnVtYmVyYWJsZTxUPihza2lwcGVkQXJyYXkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIFNraXBXaGlsZSA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBFbnVtYmVyYWJsZTxUPiA9PiB7XHJcblx0XHR2YXIgc2tpcFdoaWxlQ29sbGVjdGlvbiA9IHRoaXMuTmVnYXRlKGV4cHJlc3Npb24pO1xyXG5cdFx0cmV0dXJuIHRoaXMuV2hlcmUoc2tpcFdoaWxlQ29sbGVjdGlvbik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgU3VtID0gKGV4cHJlc3Npb24/OiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gbnVtYmVyKTogbnVtYmVyID0+IHtcclxuXHRcdGlmICh0aGlzLkNvdW50KCkgPCAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIGl0ZW1zIGluIHRoZSBjb2xsZWN0aW9uLlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBjb2xsZWN0aW9uSXRlbVR5cGUgPSB0eXBlb2YgdGhpcy5FbGVtZW50QXQoMCk7XHJcblx0XHRpZiAoY29sbGVjdGlvbkl0ZW1UeXBlICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihjb2xsZWN0aW9uSXRlbVR5cGUgKyBcIiBkb2VzIGhhdmUgdGhlIGRlZmludGlvbiBvZiAnU3VtJ1wiKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkID8gPG51bWJlcj50aGlzLkFnZ3JlZ2F0ZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnRWYWx1ZTogVCkgPT4gcmVzdWx0ICs9ICg8bnVtYmVyPjxhbnk+Y3VycmVudFZhbHVlKSkgOiB0aGlzLlNlbGVjdChleHByZXNzaW9uKS5TdW0oKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBUYWtlID0gKGFtb3VudDogbnVtYmVyKTogRW51bWJlcmFibGU8VD4gPT4ge1xyXG5cdFx0aWYgKHRoaXMuQ291bnQoKSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRha2VuQXJyYXkgPSB0aGlzLl9pdGVtcy5zbGljZSgwLCBNYXRoLmFicyhhbW91bnQpKTtcclxuXHRcdHJldHVybiBuZXcgRW51bWJlcmFibGU8VD4odGFrZW5BcnJheSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgVGFrZVdoaWxlID0gKGV4cHJlc3Npb24/OiAodmFsdWU/OiBULCBpbmRleD86IG51bWJlciwgbGlzdD86IFRbXSkgPT4gYm9vbGVhbik6IEVudW1iZXJhYmxlPFQ+ID0+IHtcclxuXHJcblx0XHR2YXIgdGFrZVdoaWxlSWR4OiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuQWdncmVnYXRlKChwcmV2OiBudW1iZXIsIGN1cnJlbnRWYWx1ZTogVCkgPT4gZXhwcmVzc2lvbih0aGlzLkVsZW1lbnRBdChwcmV2KSkgPyArK3ByZXYgOiBwcmV2KTtcclxuXHRcdHJldHVybiB0aGlzLlRha2UodGFrZVdoaWxlSWR4KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBXaGVyZSA9IChleHByZXNzaW9uPzogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiBFbnVtYmVyYWJsZTxUPiA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZEFycmF5ID0gdGhpcy5faXRlbXMuZmlsdGVyKGV4cHJlc3Npb24pO1xyXG5cdFx0cmV0dXJuIG5ldyBFbnVtYmVyYWJsZTxUPihmaWx0ZXJlZEFycmF5KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBUb0FycmF5ID0gKCk6IFRbXSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgVW5pb24gPSAoc2Vjb25kOiBFbnVtYmVyYWJsZTxUPik6IEVudW1iZXJhYmxlPFQ+ID0+IHtcclxuXHRcdHJldHVybiB0aGlzLkNvbmNhdChzZWNvbmQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBDb21wYXJlckZvcktleSA9IChrZXlTZWxlY3RvcjogKGtleTogVCkgPT4gYW55LCBkZXNjZW5kaW5nPzogYm9vbGVhbik6ICgoYTogVCwgYjogVCkgPT4gbnVtYmVyKSA9PiB7XHJcblxyXG5cdFx0cmV0dXJuIChhOiBULCBiOiBUKSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLkNvbXBhcmUoYSwgYiwga2V5U2VsZWN0b3IsIGRlc2NlbmRpbmcpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgQ29tcGFyZSA9IChhOiBULCBiOiBULCBrZXlTZWxlY3RvcjogKGtleTogVCkgPT4gYW55LCBkZXNjZW5kaW5nPzogYm9vbGVhbik6IG51bWJlciA9PiB7XHJcblx0XHRjb25zdCBzb3J0S2V5QSA9IGtleVNlbGVjdG9yKGEpO1xyXG5cdFx0Y29uc3Qgc29ydEtleUIgPSBrZXlTZWxlY3RvcihiKTtcclxuXHRcdGlmIChzb3J0S2V5QSA+IHNvcnRLZXlCKSB7XHJcblx0XHRcdHJldHVybiAoIWRlc2NlbmRpbmcgPyAxIDogLTEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzb3J0S2V5QSA8IHNvcnRLZXlCKSB7XHJcblx0XHRcdHJldHVybiAoIWRlc2NlbmRpbmcgPyAtMSA6IDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBDb21wb3NlQ29tcGFyZXJzID0gKHByZXZpb3VzQ29tcGFyZXI6IChhOiBULCBiOiBUKSA9PiBudW1iZXIsIGN1cnJlbnRDb21wYXJlcjogKGE6IFQsIGI6IFQpID0+IG51bWJlcik6ICgoYTogVCwgYjogVCkgPT4gbnVtYmVyKSA9PiB7XHJcblxyXG5cdFx0cmV0dXJuIChhOiBULCBiOiBUKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHRPZlByZXZpb3VzQ29tcGFyZXIgPSBwcmV2aW91c0NvbXBhcmVyKGEsIGIpO1xyXG5cdFx0XHRpZiAoIXJlc3VsdE9mUHJldmlvdXNDb21wYXJlcikge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50Q29tcGFyZXIoYSwgYik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0T2ZQcmV2aW91c0NvbXBhcmVyO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBEZWZhdWx0VmFsdWVQZXJUeXBlID0gKGNvbGxlY3Rpb25UeXBlOiBUKTogVCA9PiB7XHJcblxyXG5cdFx0c3dpdGNoICh0eXBlb2YgY29sbGVjdGlvblR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxUPjxhbnk+MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXR1cm4gPFQ+PGFueT5cIlwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXR1cm4gPFQ+PGFueT5mYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJvYmplY3RcIjpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoY29sbGVjdGlvblR5cGUgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxUPjxhbnk+e307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bGV0IGlzQXJyYXk6IGJvb2xlYW4gPSBBcnJheS5pc0FycmF5KGNvbGxlY3Rpb25UeXBlKTtcclxuXHRcdFx0XHRcdGlmIChpc0FycmF5KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8VD48YW55PltdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiA8VD48YW55Pnt9O1xyXG5cdFx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIExvb2tUaHJvdWdoR3JvdXBBcnJheSA9IChpdGVtOiBULCBrZXlUb0dyb3VwOiAoa2V5OiBUKSA9PiBULCBncm91cGVkQXJyYXk6IEFycmF5PFRbXT4pOiBUW10gPT4ge1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChncm91cGVkQXJyYXlbaV0ubGVuZ3RoID4gMCAmJiBrZXlUb0dyb3VwKGdyb3VwZWRBcnJheVtpXVswXSkgPT0gaXRlbSkge1xyXG5cdFx0XHRcdHJldHVybiBncm91cGVkQXJyYXlbaV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBOZWdhdGUoZXhwcmVzc2lvbjogKHZhbHVlPzogVCwgaW5kZXg/OiBudW1iZXIsIGxpc3Q/OiBUW10pID0+IGJvb2xlYW4pOiAoKSA9PiBhbnkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpOiBhbnkge1xyXG5cdFx0XHRyZXR1cm4gIWV4cHJlc3Npb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxufSJdfQ==