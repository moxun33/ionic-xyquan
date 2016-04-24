// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    /*  $rootScope.$on("$locationChangeStart", function (event, next, current) {
          if (AuthService.isLoggedIn($window)) {
              //登录
              //event.preventDefault();
          } else {
              //未登录
              $location.path('/login');
              //event.preventDefault();
          }
      });*/
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
      $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.views.maxCache(0);
      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('center');

      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');
    $ionicConfigProvider.scrolling.jsScrolling(false);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
          controller: 'IndexCtrl'
  })

  // Each tab has its own nav history stack:


      .state('tab.newest', {
          url: '/newest',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/tab-dash-newest.html',
                  controller: 'DashCtrl'
              }
          }
      })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
     /* .state("state1",{templateUrl:"state1.html"})
      .state("state2",{templateUrl:"state2.html"})
      .state("state3",{templateUrl:"state3.html"})*/


  .state('tab.category', {
      url: '/category',
      views: {
        'tab-category': {
          templateUrl: 'templates/tab-category.html',
          controller: 'CategoryCtrl'
        }
      }
    })


      .state('tab.publish', {
          url: '/publish',
          views: {
              'tab-publish': {
                  templateUrl: 'templates/tab-publish.html',
                  controller: 'PublishCtrl'
              }
          }
      })
      .state('tab.discovery', {
          url: '/discovery',
          views: {
              'tab-discovery': {
                  templateUrl: 'templates/tab-discovery.html',
                  controller: 'DiscoveryCtrl'
              }
          }
      })

      .state('tab.account', {
          url: '/account',
          views: {
              'tab-account': {
                  templateUrl: 'templates/tab-account.html',
                  controller: 'AccountCtrl'
              }
          }
      })
       /*首页列表的物体详情*/
      .state('tab.goodsDetail', {
          url: '/goodsDetail',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/goods-detail.html',
                  controller: 'GoodsDetailCtrl'
              }}
      })
      /*分类 start*/

      .state('tab.category-search', {
          url: '/category-search',
          views: {
              'tab-category': {
                  templateUrl: 'templates/category-search.html',
                  controller: 'CategoryCtrl'
              }
          }
      })
      /*分类详情*/
      .state('tab.category-detail', {
          url: '/category-detail',
          views: {
              'tab-category': {
                  templateUrl: 'templates/category-detail.html',
                  controller: 'CatGoodsDetailCtrl'
              }
          }

      })

      /* 分类中物体详情*/
      .state('tab.catGoodsDetail', {
          url: '/catGoodsDetail',
          views: {
              'tab-category': {
                  templateUrl: 'templates/cat-goods-detail.html',
                  controller: 'CatGoodsCtrl'
              }}
      })

    /*发现*/
      .state('tab.ask', {
          url: '/ask',
          views: {
              'tab-discovery': {
                  templateUrl: 'templates/discovery-ask.html',
                  controller: 'DiscoveryCtrl'
              }
          }
      })
      .state('tab.ask-publish', {
          url: '/ask-publish',
          views: {
              'tab-discovery': {
                  templateUrl: 'templates/discovery-ask-publish.html',
                  controller: 'DiscoveryCtrl'
              }
          }
      })
      .state('tab.topic', {
          url: '/topic',
          views: {
              'tab-discovery': {
                  templateUrl: 'templates/discovery-topic.html',
                  controller: 'DiscoveryCtrl'
              }
          }
      })
      .state('tab.topic-detail', {
          url: '/topic-detail',
          views: {
              'tab-discovery/': {
                  templateUrl: 'templates/discovery-topic-detail.html',
                  controller: 'DiscoveryCtrl'
              }
          }
      })


    /*账号*/

      .state('tab.account-profile', {
        url: '/account-profile',
          views: {
              'tab-account': {
                  templateUrl: 'templates/account-profile.html',
                  controller: 'AccountCtrl'
              }
          }
      })
      .state('tab.account-email', {
        url: '/account-email',
          views: {
              'tab-account': {
                  templateUrl: 'templates/account-email.html',
                  controller: 'AccountCtrl'
              }
          }
      })
      .state('tab.account-setting', {
        url: '/account-setting',

          views: {
              'tab-account': {
                  templateUrl: 'templates/account-setting.html',
                  controller: 'AccountCtrl'
              }
          }
      })


      .state('tab.account-published', {
          url: '/account-published',

          views: {
              'tab-account': {
                  templateUrl: 'templates/account-published.html',
                  controller: 'AccountCtrl'
              }
          }
      })
      .state('tab.account-bookmark', {
          url: '/account-bookmark',

          views: {
              'tab-account': {
                  templateUrl: 'templates/account-bookmark.html',
                  controller: 'AccountCtrl'
              }
          }
      })
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
        });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
