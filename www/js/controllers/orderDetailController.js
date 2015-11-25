app.controller('orderDetailController',OrderDetailController);
	function OrderDetailController($ionicPopup,$location,$scope,$rootScope) {
		$scope.table=$rootScope.table;
	}