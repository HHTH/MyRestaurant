app.controller('orderDetailController',OrderDetailController);
	function OrderDetailController($routeParams,$ionicPopup,$location,$scope,$rootScope) {
		$scope.tableId=$rootScope.tableId;
		$rootScope.tableId=$routeParams.tableId;
		
	}