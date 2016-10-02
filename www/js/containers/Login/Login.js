(function () {
  'use strict'

  angular
    .module('starter')
    .config(routeConfig)
    .controller('LoginController', LoginController)

  routeConfig.$inject = ['$stateProvider']
  function routeConfig($stateProvider) {
    $stateProvider
      .state(
        'login',
        {
          url: '/login',
          templateUrl: 'js/containers/Login/Login.html',
          controller: 'LoginController'
        }
      )
  }

  function LoginController() {

  }
})()
