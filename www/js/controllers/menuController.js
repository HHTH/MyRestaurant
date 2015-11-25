app.controller('menuController',modalController);

	function modalController($scope,$ionicModal,$rootScope,$ionicPopup ){
      
      $rootScope.items = [];
      // $scope.doRefresh=function(){
      var FoodItem=Parse.Object.extend("FoodItem");
          var query= new Parse.Query(FoodItem);
          query.find({
            success:function(results){
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                     // $scope.doRefresh=function(){
                        $rootScope.items.push({'foodName':object.get("foodName"),'foodPrice':object.get("foodPrice")});
                        //alert(object.id + ' - ' + object.get('playerName'));
                    //     $scope.$broadcast('scroll.refreshComplete');
                    //     $scope.$apply()
                    // }
                }
            },
            error: function(){
                alert("Error: " + error.code + " " + error.message);
            }
          });
      //   $scope.$broadcast('scroll.refreshComplete');
      //   $scope.$apply()
      // }
      //Modal A
      $ionicModal.fromTemplateUrl('templates/modalA.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalA = modal;
      });
      
      //CREATE ITEM 
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
        $scope.modalA.hide(); 
      };//END CREATE

     // $scope.deleteItem(id){}

       
    
  }