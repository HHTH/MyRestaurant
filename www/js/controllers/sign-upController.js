

app.controller('sign-upController',SignupController);

function SignupController($ionicPopup,$scope,$location) {  
    $scope.submitForm = function (isValid) {

        if (isValid) {
            var user =new Parse.User();
            user.set("username", $("#username").val());
            user.set("password", $("#password").val());
            user.set("email", $("#email").val());
            user.set("fullname",$("#fullname").val());
            user.signUp(null, {
                success: function(user) {
                    var alertPopup = $ionicPopup.alert({
                    title: 'Sign up SUCCESSFULLY'
                    });
                    $location.path( "/login" );
                    },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                    }
                });

		  

          }else{
			var alertPopup = $ionicPopup.alert({
     		title: 'Sign up ERROR'
			});
			return alertPopup;

	  	}
	}
    
}
// //cái này đúng
// app.controller('sign-upController',function($scope){
//       $scope.submitForm = function(isValid) {
//      // Kiểm tra nếu form ok, thì xuất thông báo
//      if (isValid) {
//        alert('Form Validation thành công');
//      // showAlert();
//      }else{
//       alert('Error'); 
//      }
 
//    };
// });
  // var AccountObject = Parse.Object.extend("AccountObject");
            // var account = new AccountObject();
            
            // account.save({username:80,fullname:81},{
            //     success: function(Object){
            //         alert("saved");
            //     },
            //     error: function(model,error){
            //         alert("error");
            //     }
            // });
// var username=$("#username").val();
            // var fullname=$("#fullname").val();
            // var email=$("#email").val();
            
            // var saveData=  function (_username,_fullname,_email){
            //     var Account3=Parse.Object.extend("Account3");
            //     var user =new Account3();
            //     user.save({fullname: _fullname, username: _username,email: _email});
            // }
            // saveData(username,fullname,email);