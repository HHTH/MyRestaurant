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
   
    $rootScope.myCartItems = [

    ];


		$scope.addToList=function(item){
      //item = angular.copy(item);

      var str= $("#foodQuantity").val();
      
      $rootScope.myCartItems.push({foodName:item.foodName,foodPrice:item.foodPrice,foodQuantity:parseInt(str)});
      console.log($scope.myCartItems[0]);
      
	}
  $scope.cartSum = function(){
            var sum =0;
            $scope.myCartItems.forEach(function(item){
                sum += item.foodQuantity * item.foodPrice;
            });

            return sum;
        }

  $scope.sendOrder=function(){
        console.log($scope.myCartItems[0]);
        localStorage.setItem("order"+$scope.tableId, JSON.stringify($rootScope.myCartItems));
        var Order=Parse.Object.extend("Order");
        var order =new Order();
        var relation=order.relation("selected");
        for (var i=0; i< $rootScope.myCartItems.length;i++){
        relation.add($rootScope.myCartItems[i].foodName);
        }// đoạn này 
        order.save(); 
      // $location.path("/table");
      }
  $("#show-search").hide();
      $("#search-orderdetails").click(function(){
        $("#show-search").show(500);    
      });
      $("#hide-search").click(function(){
        $("#show-search").hide(1000);  
      }); 
  
}

