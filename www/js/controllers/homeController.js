
app.controller('homeController',ContentController);
	function ContentController($location,$scope, $ionicSideMenuDelegate) {
  		$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  		};


  		$scope.handleData=function(routeName){
  			$location.path(routeName);
  		};

  		$scope.Home=function(){
  			$scope.handleData('/home');
  		};

	}
