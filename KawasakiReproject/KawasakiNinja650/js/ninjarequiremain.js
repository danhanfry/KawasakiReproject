﻿requirejs.config({
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


/*'js/sections/commercial/devicetypes/commercial-desktop'*/

requirejs(['js/models/commercialmodel.js', 'js/commonjs', 'js/abstractions/commercial.abstraction'], function () {
	var common = new Kawasaki.Common();
	if (common.isMobile()) {
		
	}
	else if (common.isTablet()) {

	}
	else {
		requirejs(['js/sections/commercial/devicetypes/commercial-desktop', 'js/sections/commercial/commercial-index'], function () {
			requirejs([
				'js/sections/commercial/components/commercialvideo',
				'js/sections/commercial/components/commercialcontent',
				'js/sections/commercial/components/commercialscroller',
				'js/sections/commercial/commercial']);
		});
	}
});

//requirejs(['js/commonjs', 'js/sections/commercial/commercial-index'], function () {
//	var common = new Kawasaki.Common();
//	var currentMobile = common.isMobile();
//	//if (currentMobile) {
//	requirejs([
//			'js/sections/commercial/components/commercialvideo',
//			'js/sections/commercial/components/commercialcontent',
//			'js/sections/commercial/components/commercialscroller',
//			'js/sections/commercial/commercial']);
//	//}
//	//else {
//		//requirejs(['js/sections/virtual']);
//	//}
//});