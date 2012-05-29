function onBodyLoad() {
	// Load Cordova specific stuff here. They all use global variables
	var GLOBAL_LIBS = [];
	if (window.CORDOVA_MODULE !== undefined) {
		GLOBAL_LIBS.push(CORDOVA_MODULE);
	}
	if (window.PLATFORM_MODULE !== undefined) {
		GLOBAL_LIBS.push(PLATFORM_MODULE);
	}
	GLOBAL_LIBS.push('mediawiki');
	if (window.CORDOVA_PLUGINS !== undefined) {
		GLOBAL_LIBS = GLOBAL_LIBS.concat(CORDOVA_PLUGINS);
	}
	require(GLOBAL_LIBS, function() {
		document.addEventListener('deviceready', onDeviceReady, false);
	});
}

function onDeviceReady() {
	require(["jquery", "l10n", 'jquery.localize', 'app'], function($, l10n) {
		l10n.initLanguages();
	});
}

onBodyLoad();
