(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['$scope', 'mainPageService', mainPageController]);

	function mainPageController($scope, mainPageService) {
		var vm = this;

		vm.showNavigation = false;

		vm.fbLogin = fbLogin;

		init();

		function init(){

		}

		function fbLogin() {
			mainPageService.fbLogin().then(function(response){
				vm.showNavigation = true;
			});
		}
	}
})();