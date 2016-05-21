angular
	.module('app', [])
	.directive('login', login);

	function login() {
		return {
			restrict: 'A',
			scope: {
				email: '@',
				senha: '@',
			},
			link: function (scope, elemment, attr){
				elemment.on('click', function(){
					if(scope.email == "laryssa@gmail.com" && scope.senha == 12345){
						console.log("Logou!");
					} else {
						 console.log('deu ruim');
					}
				});
			}
		}
	}