
app.controller('homeController',ContentController);
	function ContentController($ionicPopup,$location,$scope, $ionicSideMenuDelegate,$rootScope) {
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
   
        var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm Log out',
        template: 'Are you sure you want to log out?'
        });
        confirmPopup.then(function(res) {
          if(res) {
          Parse.User.logOut();
          var currentUser = Parse.User.current();
        // goto login interface
          $location.path("/login");     
          $rootScope.username = "";  
          } else {
          console.log('You are not sure');
          $location.path("/home");   
          }
        });
      };

  }
	
