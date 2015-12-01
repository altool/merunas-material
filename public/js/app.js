var app = angular.module('myApp',
[
  'ui.router',
  'ngMaterial',
  'ngFileUpload',
  'ngImgCrop',
  'ngSanitize',
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('show', {
      url: '/users',
      templateUrl: 'views/showUsers.html'
    })
    .state('form', {
      url: '/form',
      templateUrl: 'views/añadirArticulo.html',
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/panels.html'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'views/signin.html'
    });

  $urlRouterProvider.otherwise('/');
});

app.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('deep-purple');
});
