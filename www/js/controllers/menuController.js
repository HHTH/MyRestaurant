app.controller('menuController',modalController);

  function modalController($scope,$ionicModal,$rootScope,$ionicPopup ){
      $(document).ready(function(){
      $("#button-delete").click(function(){
        $(".id-remove").show();
      });
    });
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
     
      //Modal A
      $ionicModal.fromTemplateUrl('templates/AddFood.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.AddFood = modal;
      });
      
      //CREATE ITEM 
      $scope.createItem = function (isValid) {

        if (isValid) {
           $scope.createItem = function(u) {        
            var FoodItem = Parse.Object.extend("FoodItem");
            var foodItem= new FoodItem();
            var user=Parse.User.current();
                foodItem.set("foodName",$("#foodName").val());
            var str1= $("#foodPrice").val();
            console.log(str1);
                foodItem.set("foodPrice",parseInt(str1));
                foodItem.set("user",user);
            foodItem.save(null,{
              success:function(foodItem){
                // Execute any logic that should take place after the object is saved.
               // alert('New object created with objectId: ' +foodItem.id);
                $rootScope.items.push({'foodName':$("#foodName").val(),'foodPrice':$("#foodPrice").val()});
                var alertPopup = $ionicPopup.alert({
                  title: 'Add Item  SUCCESSFULLY'
                  });
              },
              error:function(foodItem,error){
                 // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }

            });
            $scope.AddFood.hide(); 
          };//END CREATE
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'CREATE ERROR'
          });
          return alertPopup;
        }
      }

      // change details
     

      $scope.saveEdit=function(){
          var FoodItem = Parse.Object.extend("FoodItem");
          var query = new Parse.Query(FoodItem);
          query.equalTo("foodPrice", $scope.item.foodPrice);
          query.first({
          success: function(object) {

            object.set("foodPrice", $("#nameFix").val());
            object.save();
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
          });
      }

   
    $scope.remove = function(index) {
     // var deleteItem=new FoodItem();
     //  myCartItemObject.set(JSON.parse(angular.toJson($rootScope.myCartItems[i])));
      // $rootScope.myDeleteItems = [];
      // $rootScope.myDeleteItems.push({foodName:item.foodName,foodPrice:item.foodPrice});
      $scope.items.splice(index, 1);
    
      myObject.destroy({
        success: function(myObject) {
    // The object was deleted from the Parse Cloud.
      },
        error: function(myObject, error) {
    // The delete failed.
    // error is a Parse.Error with an error code and message.
        }
      });
    }
  
    
}
  