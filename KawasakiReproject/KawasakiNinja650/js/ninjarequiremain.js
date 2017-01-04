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


var commercialIndex = 'js/sections/commercial/commercial-index';
var commercialPartialViews = [
				'js/sections/commercial/components/commercialvideo',
				'js/sections/commercial/components/commercialcontent',
				'js/sections/commercial/components/commercialscroller',
				'js/sections/commercial/commercial'];

var vtrIndex = 'js/sections/vtr/vtr-index';
var vtrPartialViews = [
				'js/sections/vtr/components/vtrvideo',
				'js/sections/vtr/components/vtrcontent',
				'js/sections/vtr/vtr'];

requirejs(['js/models/commercialmodel.js', 'js/commonjs', 'js/abstractions/slide.abstraction'], function () {
	var common = new Kawasaki.Common();
	if (common.isMobile()) {
		requirejs(['js/sections/commercial/devicetypes/commercial-mobile', commercialIndex], function () {
			requirejs(commercialPartialViews);
		});
	}
	else if (common.isTablet()) {
		requirejs(['js/sections/commercial/devicetypes/commercial-tablet', commercialIndex], function () {
			requirejs(commercialPartialViews);
		});
	}
	else {
		requirejs(['js/sections/commercial/devicetypes/commercial-desktop', commercialIndex], function () {
			requirejs(commercialPartialViews);
		});
	}
});