app.controller('loginController',loginController);

function loginController($ionicPopup,$scope,$location,$rootScope) {  
    $scope.loginForm = function (isValid) {

        if (isValid) {
            Parse.User.logIn($("#username").val(), $("#password").val(), {
  			      success: function(user) {
    		      // Do stuff after successful login.
    		        var alertPopup = $ionicPopup.alert({
     		        title: 'Log In  SUCCESSFULLY'
   		          });
                var currentUser = Parse.User.current();
                  if (currentUser) {
                  // do stuff with the user
                  $rootScope.username=currentUser.get("username");
                  $rootScope.email=currentUser.get("email");
                  $location.path("/home");
                  } else {
                  // show the signup or login page
                  }

   		          //$location.path( "/home" );

  			       },
  			      error: function(user, error) {
    		      // The login failed. Check error to see why.
    		        var alertPopup = $ionicPopup.alert({
     		        title: 'Username or password is wrong'
			          });
			         return alertPopup;
  			      }
			      });
  		  }else{
			   var alertPopup = $ionicPopup.alert({
     		 title: 'Log in ERROR'
			});
			return alertPopup;

	  	}
	}
    
}