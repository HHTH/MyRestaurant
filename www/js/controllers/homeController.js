
app.controller('homeController',ContentController);
	function ContentController($location,$scope, $ionicSideMenuDelegate,$rootScope) {
  		$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  		};


  		$scope.handleData=function(routeName){
  			$location.path(routeName);
  		};

  		$scope.Home=function(){
  			$scope.handleData('/home');
  		};
      
      $scope.username=$rootScope.username;


      $scope.logOut = function() {
       
      //log out of application
      Parse.User.logOut();
      var currentUser = Parse.User.current();
      // goto login interface
      $location.path("/login");     
      $rootScope.username = "";  
      };

      
};
