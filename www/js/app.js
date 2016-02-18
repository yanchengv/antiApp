// Ionic AntiApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'antiApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('antiApp', ['ionic','antiApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  //配置$ionicConfigProvider使tabs导航在底部
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');

  // if none of the under states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
  //else
  $stateProvider
    .state('tab',{
      url:'/tab',
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl: 'templates/home.html'
        }

      }


    })
    .state('tab.verification',{
      url:'/verification',
      views:{
        'tab-verification':{
          templateUrl:'templates/verification.html'
        }
      }

    })
    .state('tab.report',{
      url:'/report',
      views:{
        'tab-report':{
          templateUrl:'templates/report.html'
        }
      }

    })
    .state('tab.my',{
      url:'/my',
      views:{
        'tab-my':{
          templateUrl:'templates/my.html'
        }
      }

    })


  })


