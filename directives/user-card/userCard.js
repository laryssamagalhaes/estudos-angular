angular
	.module('app', [])
	.directive('userCard', userCard);

	function userCard() {
		return {
			restrict: 'E',
			scope: {
				user: '='
			},
			templateUrl: 'userCard.html'
		}
	}