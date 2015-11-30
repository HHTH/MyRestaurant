app.controller('orderController',OrderDetailController);
function OrderDetailController($routeParams,$ionicPopup,$location,$scope,$rootScope) {
	$scope.myOrder1 = JSON.parse(localStorage.getItem("order1"));
	$scope.myOrder2 = JSON.parse(localStorage.getItem("order2"));
	$scope.myOrder3 = JSON.parse(localStorage.getItem("order3"));
	$scope.myOrder4 = JSON.parse(localStorage.getItem("order4"));
	$scope.myOrder5 = JSON.parse(localStorage.getItem("order5"));
	$scope.myOrder6 = JSON.parse(localStorage.getItem("order6"));
	$scope.myOrder7 = JSON.parse(localStorage.getItem("order7"));
	$scope.myOrder8 = JSON.parse(localStorage.getItem("order8"));
	$scope.myOrder9 = JSON.parse(localStorage.getItem("order9"));
}