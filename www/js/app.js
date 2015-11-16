
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngRoute']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    Parse.initialize("OyPX5kW24DhxjzrkxabQjxQWPOjdTfcM2KNGUMON", "IIULH9uftVy0wmeax72P3yDyfsEbAislcMxiX4Kk");
  });
});
app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/first', {
          templateUrl: 'templates/first.html',
         // controller: 'firstController'
        })
        .when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'loginController'
        })
        .when('/sign-up', {
          templateUrl: 'templates/sign-up.html',
          controller: 'sign-upController'
        })
        .when('/home', {
          templateUrl: 'templates/home.html',
          controller: 'homeController'
        })
        .when('/table', {
          templateUrl: 'templates/table.html',
         // controller: 'tableController'
        })
        .when('/menu', {
          templateUrl: 'templates/menu.html',
         // controller: 'tableController'
        })

        
        .otherwise({
          redirectTo: '/first'
        });
    }
  ]);
 
 
  