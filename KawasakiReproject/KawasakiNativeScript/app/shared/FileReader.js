"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var documents = fs.knownFolders.currentApp();
var FileReader = (function () {
    function FileReader() {
    }
    FileReader.ReadJSON = function (path) {
        var jsonFile = documents.getFile(path);
        return new Promise(function (resolve, reject) {
            jsonFile.readText().then(function (content) {
                var data = JSON.parse(content);
                resolve(data);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBa0M7QUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUU3QztJQUFBO0lBaUJBLENBQUM7SUFkaUIsbUJBQVEsR0FBdEIsVUFBdUIsSUFBWTtRQUMvQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFlO2dCQUNyQyxJQUFJLElBQUksR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdMLGlCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5sZXQgZG9jdW1lbnRzID0gZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUmVhZGVyIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBSZWFkSlNPTihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xyXG4gICAgICAgIGxldCBqc29uRmlsZSA9IGRvY3VtZW50cy5nZXRGaWxlKHBhdGgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxPYmplY3Q+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAganNvbkZpbGUucmVhZFRleHQoKS50aGVuKChjb250ZW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gPEFycmF5PE9iamVjdD4+SlNPTi5wYXJzZShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==