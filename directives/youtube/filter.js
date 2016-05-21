angular
.module('app')
.filter('trusted', function($sce){
	return function(url) {
	    return $sce.trustAsResourceUrl(url);
	};
})
.filter('removeYoutubeString', function(){
	return function(url) {
	    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
	};
});