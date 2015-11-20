angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
	 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       Parse.User.logOut();
      var currentUser = Parse.User.current();
      // goto login interface
      $location.path("/login");     
      $rootScope.username = "";  
     } else {
       console.log('You are not sure');
     }
   });
 };
}