angular
	.module('app', [])
	.directive('youtube', youtube);

	function youtube() {
		return {
			restrict: 'E',
			scope: {
				link: '@'
			},
			templateUrl: 'youtube.html'
		}
	}