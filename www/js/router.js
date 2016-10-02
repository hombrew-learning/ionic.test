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
        'vista1',
        {
          url: '/vista1',
          template: '<div class="padding"><h2>Vista 1</h2><button class="button button-positive" ui-sref="vista2">A Vista 2</button></div>'
        }
      )
      .state(
        'vista2',
        {
          url: '/vista2',
          template: '<div class="padding"><h2>Vista 2</h2><button class="button button-assertive" ui-sref="vista1">A Vista 1</button></div>'
        }
      )

    $urlRouterProvider.otherwise('/vista1')
  }

})();
