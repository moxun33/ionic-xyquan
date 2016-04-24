angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html",
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


        .state('tab.category', {
            url: '/category',
            views: {
                'tab-category': {
                    templateUrl: 'templates/tab-category.html',
                    controller: 'CategoryCtrl'
                }
            }
        })

        .state('tab.category-search', {
            url: '/category-search',
            views: {
                'tab-category': {
                    templateUrl: 'templates/category-search.html',
                    controller: 'CategoryCtrl'
                }
            }
        })
        .state('tab.category-detail', {
            url: '/category-detail',
            views: {
                'tab-category': {
                    templateUrl: 'templates/category-detail.html',
                    controller: 'CategoryCtrl'
                }
            }
        })

        .state('tab.goods-detail', {
            url: '/goods-detail',
            views: {
                'tab-category': {
                    templateUrl: 'templates/goods-detail.html',
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
                'tab-discovery': {
                    templateUrl: 'templates/discovery-topic-detail.html',
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


        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'

        })

        .state('messageDetail', {
            url: '/messageDetail/:messageId',
            templateUrl: "templates/message-detail.html",
            controller: "messageDetailCtrl"
        })



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/tab/dash");
});