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
    $urlRouterProvider.otherwise('/login')
  }

})();
