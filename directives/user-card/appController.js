angular
	.module('app')
	.controller('appController', appController);

	function appController() {
		var vm = this;

		vm.user = {
			nome: 'laryssa',
			email: 'email@gmail.com'
		};
	}