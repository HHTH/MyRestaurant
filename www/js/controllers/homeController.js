
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


      // $scope.logOut = function() {
      // //log out of application
      // Parse.User.logOut();
      // var currentUser = Parse.User.current();
      // // goto login interface
      // $location.path("/login");     
      // $rootScope.username = "";  
      // };
      $scope.logOut = function() {
      //log out of application
       // $scope.showPopup = function() {
      //   $scope.showConfirm = function() {
          var confirmPopup = $ionicPopup.confirm({
         title: 'Consume Ice Cream',
         template: 'Are you sure you want to eat this ice cream?'
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
   //     };

    //  };
    };

  }
	
