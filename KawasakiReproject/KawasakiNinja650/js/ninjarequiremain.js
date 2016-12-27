requirejs.config({
	//By default load any module IDs from js
	baseUrl: '/KawasakiNinja650',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
	}
});

requirejs(['js/commonjs'], function () {
	var common = new Kawasaki.Common();
	var currentMobile = common.isMobile();
	//if (currentMobile) {
	requirejs([
			'js/sections/commercial/components/commercialvideo',
			'js/sections/commercial/components/commercialcontent',
			'js/sections/commercial/commercial']);
	//}
	//else {
		//requirejs(['js/sections/virtual']);
	//}
});