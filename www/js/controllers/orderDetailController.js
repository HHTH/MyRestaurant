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
        console.log($scope.myCartItems[1]);
        localStorage.setItem("order"+$scope.tableId, JSON.stringify($rootScope.myCartItems));
        var Order=Parse.Object.extend("Order");
        var order =new Order();
     
        var MyCartItems = Parse.Object.extend("MyCartItems");
        var list = [];
        var count = $rootScope.myCartItems.length;
          if(count > 0){
            for (var i = 0; i < count; i++) {
            var myCartItemObject = new MyCartItems();
            myCartItemObject.set(JSON.parse(angular.toJson($rootScope.myCartItems[i])));
            list.push(myCartItemObject);
          }
        var user=Parse.User.current();
        order.set("user",user);
        order.set("cartSum",$scope.cartSum());
        Parse.Object.saveAll(list, {
          success: function(objs) {
              // objects have been saved...
              var relation=order.relation("myCartItem");
              relation.add(list);
              order.save(); 
              //order.add("myCartItem",myCartItemObject);

              console.log("success");
              var alertPopup = $ionicPopup.alert({
                  title: 'SEND SUCCESSFULLY'
                  });
              $location.path("/table");
          },
          error: function(error) { 
              // an error occurred...
              console.log("error");
          }
          });
          }
      
      }
      
        $("#show-search").hide();
          $("#search-orderdetails").click(function(){
            $("#show-search").show(300);    
          });
          $("#hide-search").click(function(){
            $("#show-search").hide(1000);  
          }); 
  
}

