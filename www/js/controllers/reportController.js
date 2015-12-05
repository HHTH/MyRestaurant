app.controller('reportController',reportchartController);

  function reportchartController($scope,$ionicModal,$rootScope,$ionicPopup ){
  	$rootScope.Amount=[];
  	$rootScope.User=[];
    var FoodItem = Parse.Object.extend("FoodItem");
    var query= new Parse.Query(FoodItem);
	 query.find({
	    success:function(results) {
	    	$scope.$apply(function(){
	        console.log("Total: "+results.length);
	         $rootScope.Amount.push({'foodMenu':results.length});
	     });
	    },
	    error:function(error) {
	        alert("Error when getting objects!");
	    }
	});
 	var User = Parse.Object.extend("User");
    var query= new Parse.Query(User);
	 query.find({
	    success:function(results) {
	    	$scope.$apply(function(){
	        console.log("Total: "+results.length);
	         $rootScope.Amount.push({'User':results.length});
	     });
	    },
	    error:function(error) {
	        alert("Error when getting objects!");
	    }
	});
  }