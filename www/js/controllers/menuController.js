
app.controller('menuController',modalController);

	function modalController($scope,$ionicModal,$rootScope,$ionicPopup ){
      
      $rootScope.items = [];
      // $scope.doRefresh=function(){
      var FoodItem=Parse.Object.extend("FoodItem");
          var query= new Parse.Query(FoodItem);
          query.find({
            success:function(results){
              $scope.$apply(function(){
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                     // $scope.doRefresh=function(){
                        $rootScope.items.push({'foodName':object.get("foodName"),'foodPrice':object.get("foodPrice")});
                        //alert(object.id + ' - ' + object.get('playerName'));
                    //     $scope.$broadcast('scroll.refreshComplete');
                    //     $scope.$apply()
                    // }
                }
              });
            },
            error: function(){
                alert("Error: " + error.code + " " + error.message);
            }
          });
      //   $scope.$broadcast('scroll.refreshComplete');
      //   $scope.$apply()
      // }
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
            foodItem.set("foodPrice", parseInt(str1) );
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
      $ionicModal.fromTemplateUrl('templates/ChangeDetails.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.ChangeDetails = modal;
      });
      $scope.EditFood = function () {
       $scope.EditFood.show();
       $rootScope.items.push({'foodName':$("#foodName").val(),'foodPrice':$("#foodPrice").val()});
     }

      $scope.DeleteFood = function () {
       $scope.DeleteFood.show();
     }
     
      //Edit food
      $ionicModal.fromTemplateUrl('templates/EditFood.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.EditFood = modal;
      });
      // EDIT ITEM
      $scope.EditItem = function (isValid) {

        if (isValid) {
           $scope.EditItem = function(u) {        
            var FoodItem = Parse.Object.extend("FoodItem");
            var foodItem= new FoodItem();
            var user=Parse.User.current();
                foodItem.set("foodName",$("#foodName").val());
            var str1= $("#foodPrice").val();
            foodItem.set("foodPrice", parseInt(str1) );
            foodItem.set("user",user);
            foodItem.save(null,{
              success:function(foodItem){
                // Execute any logic that should take place after the object is saved.
               // alert('New object created with objectId: ' +foodItem.id);
                $rootScope.items.push({'foodName':$("#foodName").val(),'foodPrice':$("#foodPrice").val()});
                var alertPopup = $ionicPopup.alert({
                  title: 'Edit Item  SUCCESSFULLY'
                  });
              },
              error:function(foodItem,error){
                 // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }

            });
            $scope.EditFood.hide(); 
          };//END CREATE
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'EDIT ERROR'
          });
          return alertPopup;
        }
      }

      // DELETE ITEM
      $ionicModal.fromTemplateUrl('templates/DeleteFood.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.DeleteFood = modal;
      });

      $scope.DeleteFood = function (isValid) {

        if (isValid) {
           $scope.DeleteFood = function(u) {        
            var FoodItem = Parse.Object.extend("FoodItem");
            var foodItem= new FoodItem();
            var user=Parse.User.current();
                foodItem.set("foodName",$("#foodName").val());
            var str1= $("#foodPrice").val();
            foodItem.set("foodPrice", parseInt(str1) );
            foodItem.set("user",user);
            foodItem.save(null,{
              success:function(foodItem){
                // Execute any logic that should take place after the object is saved.
               // alert('New object created with objectId: ' +foodItem.id);
                $rootScope.items.push({'foodName':$("#foodName").val(),'foodPrice':$("#foodPrice").val()});
                var alertPopup = $ionicPopup.alert({
                  title: 'Edit Item  SUCCESSFULLY'
                  });
              },
              error:function(foodItem,error){
                 // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }

            });
            $scope.DeleteFood.hide(); 
          };//END CREATE
        } else {
          var alertPopup = $ionicPopup.alert({
            title: 'DELETE ERROR'
          });
          return alertPopup;
        }
      }


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

    //   $scope.remove = function(index) {
    //   $scope.items.splice(index, 1);

    // };
    $scope.remove = function(item) {
      var item=new FoodItem();
    for(var i=0; i<$scope.items.length; i++) {
      if($scope.items[i] == item) {
        $scope.items.splice(i, 1);
        item.destroy({
          success: function(object) {

            alert("success");
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
        break;
      }
    }
  }

}
     // $scope.deleteItem(id){}
