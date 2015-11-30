// app.controller('orderDetailController',OrderDetailController);
// 	function OrderDetailController($routeParams,$ionicPopup,$location,$scope,$rootScope) {
// 		$scope.tableId=$rootScope.tableId;
// 		$rootScope.tableId=$routeParams.tableId;
		

// 		$scope.items=$rootScope.items;
// 		$scope.query={}
// 		$scope.queryBy='$';
// 		$scope.orderProp="foodName";
// 	}

app.controller('orderDetailController',OrderDetailController);
	function OrderDetailController($routeParams,$ionicPopup,$location,$scope,$rootScope) {
		$scope.tableId=$rootScope.tableId;
		$rootScope.tableId=$routeParams.tableId;
		
		
		//$scope.items=$rootScope.items;
		$rootScope.items = [];

      var FoodItem=Parse.Object.extend("FoodItem");
          var query= new Parse.Query(FoodItem);
          query.find({
            success:function(results){
              $scope.$apply(function(){
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    
                        $rootScope.items.push({'foodName':object.get("foodName"),'foodPrice':object.get("foodPrice")});
                      
                }
              });
            },
            error: function(){
                alert("Error: " + error.code + " " + error.message);
            }
          });
		$scope.query={}
		$scope.queryBy='$';
		$scope.orderProp="foodName";

  //   var Order=Parse.Object.extend("Order");
  //   var Order =new Order();
  // //  var OrderDetail=Parse.Object.extend("OrderDetail");
  //   var relation=Order.relation("OrderDetail");
  //   relation.add(FoodItem);
  //   Order.save();
   $scope.myCartItems = [];
		$scope.addToList=function(item){
       $scope.myCartItems.push(item);

		};

	}