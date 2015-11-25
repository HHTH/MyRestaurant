app.controller('tableController',TableController);
	function TableController($ionicPopup,$location,$scope, $ionicSideMenuDelegate,$rootScope) {
		$scope.handleData=function(routeName){
  			$location.path(routeName);
  		};

  		$scope.goToOrder=function(event){
  			$rootScope.table=event.attributes['data-id'].value;
  			$scope.handleData('/orderDetail');
  		};
  		//$scope.table=[1,2,3,4,5,6,7,8,9];
  		

	}