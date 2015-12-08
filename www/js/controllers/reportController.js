app.controller('reportController',reportchartController);

  function reportchartController($scope,$ionicModal,$rootScope,$ionicPopup ){
  		$scope.username=$rootScope.username;
  		$scope.email=$rootScope.email;
 //  	$rootScope.Amount=[];
   		$rootScope.users=[];
 //    var FoodItem = Parse.Object.extend("FoodItem");
 //    var query= new Parse.Query(FoodItem);
	//  query.find({
	//     success:function(results) {
	//     	$scope.$apply(function(){
	//         console.log("Total: "+results.length);
	//          $rootScope.Amount.push({'foodMenu':results.length});
	//      });
	//     },
	//     error:function(error) {
	//         alert("Error when getting objects!");
	//     }
	// });
	$ionicModal.fromTemplateUrl('templates/AddStaffModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.AddStaffModal = modal;
      });
         //CREATE ITEM 
      $scope.createStaff = function (isValid) {

        if (isValid) {
           $scope.createStaff = function(u) {        
            var User = Parse.Object.extend("User");
            var user= new User();
            
                user.set("username",$("#staffName").val());
         		user.set("email",$("#staffEmail").val());
         		user.set("password",$("#staffPassword").val());
        
            user.save(null,{
              success:function(foodItem){
                // Execute any logic that should take place after the object is saved.
               // alert('New object created with objectId: ' +foodItem.id);
                $rootScope.users.push({'userName':$("#staffName").val(),'staffEmail':$("#staffEmail").val(),'staffPassword':$("#staffPassword").val()});
                var alertPopup = $ionicPopup.alert({
                  title: 'Add Staff  SUCCESSFULLY'
                  });
              },
              error:function(foodItem,error){
                 // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }

            });
            $scope.AddStaffModal.hide(); 
          };//END CREATE
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'CREATE ERROR'
          });
          return alertPopup;
        }
      }
 	var User = Parse.Object.extend("User");
    var query= new Parse.Query(User);
    //var currentUser = Parse.User.current();
   // query.notContainedIn("_User", Parse.User.current());
	  query.find({
	    success:function(results) {
	    	$scope.$apply(function(){
	        console.log("Total: "+results.length);
	          for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                      $rootScope.users.push({'userName':object.get("username"),'email':object.get("email")});

               }
	     });
	    },
	    error:function(error) {
	        alert("Error when getting objects!");
	    }
	});
   // query.notContainedIn("username",
   //                   currentUser.get("username"));
  }