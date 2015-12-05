app.controller('orderController',OrderDetailController);
function OrderDetailController($routeParams,$ionicPopup,$location,$scope,$rootScope) {
	$scope.myOrder1 = JSON.parse(localStorage.getItem("order1"));
	$scope.myOrder2 = JSON.parse(localStorage.getItem("order2"));
	$scope.myOrder3 = JSON.parse(localStorage.getItem("order3"));
	$scope.myOrder4 = JSON.parse(localStorage.getItem("order4"));
	$scope.myOrder5 = JSON.parse(localStorage.getItem("order5"));
	$scope.myOrder6 = JSON.parse(localStorage.getItem("order6"));
	$scope.myOrder7 = JSON.parse(localStorage.getItem("order7"));
	$scope.myOrder8 = JSON.parse(localStorage.getItem("order8"));
	$scope.myOrder9 = JSON.parse(localStorage.getItem("order9"));
	// suppose we have a book object
// 	$rootScope.orders=[];
// 	$scope.myCartItems=[];
// 	var Order = Parse.Object.extend("Order");
// 	var order=new Order();
// //var Topping = Parse.Object.extend("Specialty");
// var MyCartItems = Parse.Object.extend("MyCartItems");
// var myCartItem=order.relation("myCartItem");
// var query = new Parse.Query(Order);
// query.find({
//   success: function(results) {
//   	$scope.$apply(function(){
//     for(var i = 0; i < results.length; i++) {
//       var order = results[i];
//       var relation = order.relation('myCartItem');
//       relation.query().find({
      	
//         success: function(myCartItem) {
//         	$scope.$apply(function(){
//           // toppings is a list of toppings for this pizza
// 		          for(var j = 0; j < myCartItem.length; j++) {
// 		            console.log(myCartItem[j].get("foodName"));
// 		         	$scope.myCartItems.push({'foodName':myCartItem[j].get("foodName")});
// 		          }
//            //   $rootScope.orders.push({'myCartItem':$scope.myCartItems});
//           });
//         }
//       });
//     $rootScope.orders.push({'cart':order.get("cartSum")});

//     }
//     });
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });
}