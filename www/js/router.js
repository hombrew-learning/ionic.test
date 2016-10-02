(function () {
  'use strict';

  angular
    .module('starter')
    .config(routesConfig)

  routesConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ]
  function routesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state(
        'login',
        {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
        }
      )
      .state(
        'app',
        {
          url: '/app',
          templateUrl: 'templates/app.html',
          controller: 'AppController'
        }
      )

    $urlRouterProvider.otherwise('/login')
  }

})();
