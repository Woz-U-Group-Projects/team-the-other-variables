angular.module('starter', ['ionic', 'starter.controllers', 'ionic.contrib.tinderCards','ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function(){
        if (window.cordova && window.cordova.plugins.Keyboard){
            cordova.plugins.Keyboard.hideKeyboardAccesoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider,$urlRouterProvider){
    $stateProvider

    .state('app.Home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'src/app/home.page.html'
            }
        } 
    })

    .state('app.Profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'src/app/profile.page.html'
            }
        } 
    })

    .state('app.Matches', {
        url: '/matches',
        views: {
            'menuContent': {
                templateUrl: 'src/app/matches.page.html'
            }
        } 
    })

    .state('app.Settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'src/app/settings.page.html'
            }
        } 
    });

    $urlRouterProvider.otherwise('src/app/home.page.html');
});