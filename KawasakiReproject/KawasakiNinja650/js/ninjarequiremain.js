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

var commonJsFiles = ['js/models/enums/svgenums.js', 'js/models/commercialmodel.js', 'js/models/vtrmodel',
			'js/models/socialmodel', 'js/models/researchtoolsModel', 'js/commonjs', 'js/main-index', 'js/abstractions/slide.abstraction'];

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
				'js/sections/vtr/components/vtrmodal',
				'js/sections/vtr/vtr'];

var socialIndex = 'js/sections/social/social-index';
var socialPartialViews = [
				'js/sections/social/components/socialheader',
				'js/sections/social/socialcommunity'];

var researchIndex = 'js/sections/researchtools/research-index';
var researchToolsPartialViews = [
				'js/sections/researchtools/components/researchtoolsheader',
				'js/sections/researchtools/components/researchtoolslinks',
				'js/sections/researchtools/researchtools'];


var finalPartialViews = commercialPartialViews.concat(vtrPartialViews)
						.concat(socialPartialViews)
						.concat(researchToolsPartialViews);

requirejs(commonJsFiles, function () {
	var common = new Kawasaki.Common();
	if (common.isMobile()) {
		requirejs(['js/sections/commercial/devicetypes/commercial-mobile', 'js/sections/vtr/devicetypes/vtr-mobile',
			'js/sections/social/devicetypes/social-mobile',
			'js/sections/researchtools/devicetypes/research-mobile',
			commercialIndex, vtrIndex, socialIndex, researchIndex], function () {
			requirejs(finalPartialViews);
		});
	}
	else if (common.isTablet()) {
		requirejs(['js/sections/commercial/devicetypes/commercial-tablet', 'js/sections/vtr/devicetypes/vtr-tablet',
			'js/sections/social/devicetypes/social-tablet',
			'js/sections/researchtools/devicetypes/research-tablet',
			commercialIndex, vtrIndex, socialIndex, researchIndex], function () {
			requirejs(finalPartialViews);
		});
	}
	else {

		requirejs(['js/sections/commercial/devicetypes/commercial-desktop', 'js/sections/vtr/devicetypes/vtr-desktop',
			'js/sections/social/devicetypes/social-desktop',
			'js/sections/researchtools/devicetypes/research-desktop',
			commercialIndex, vtrIndex, socialIndex, researchIndex], function () {
			requirejs(finalPartialViews);
		});
	}
});