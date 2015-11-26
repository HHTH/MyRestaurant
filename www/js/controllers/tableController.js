app.controller('tableController',TableController);
	function TableController($routeParams,$ionicPopup,$location,$scope, $ionicSideMenuDelegate,$rootScope) {
		$scope.handleData=function(routeName){
  			$location.path(routeName);
  		};
  		//var x=$routeParams.tableId;
  		//$rootScope.tableId=$routeParams.tableId;
  	$(document).ready(function(){
		$('.table-number').click(function(){
			pos = this.id;
			console.log("huhu"+pos);
			$rootScope.tableId=pos;
			//var tableId=pos;
			$scope.handleData('/orderDetail/'+$rootScope.tableId);
			
		});
	});
  		// $scope.goToOrder=function(event){
  	// 		$(".table-number").click(function(){
  	// 			pos = this.id;
			// 	goPos(pos);
			// //	return pos;
			// 	console.log("huhu"+pos);
			// 	$rootScope.table=pos;
			// 		$scope.handleData('/orderDetail');

  	// 		});
  			//$rootScope.table=pos;
  		
  		//};
  	//	$scope.table=[1,2,3,4,5,6,7,8,9];
  		

	}