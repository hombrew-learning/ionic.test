(function () {
  'use strict'

  angular
    .module('starter')
    .config(routeConfig)
    .controller('AppController', AppController)

  routeConfig.$inject = ['$stateProvider']
  function routeConfig($stateProvider) {
    $stateProvider
      .state(
        'app',
        {
          url: '/app',
          templateUrl: 'js/containers/App/App.html',
          controller: 'AppController'
        }
      )
  }

  AppController.$inject = ['$scope']
  function AppController($scope) {
    var
      main = $scope;

    main.ratingArr = [
      { value: 1,
        icon: 'ion-ios-star-outline'},
      { value: 2,
        icon: 'ion-ios-star-outline'},
      { value: 3,
        icon: 'ion-ios-star-outline'},
      { value: 4,
        icon: 'ion-ios-star-outline'},
      { value: 5,
        icon: 'ion-ios-star-outline'}
    ];
    main.setRating = setRating;

    function setRating(val) {
      var rtgs = main.ratingArr
      for (var i = 0; i < rtgs.length; i++) {
        if (i < val) {
          rtgs[i].icon = 'ion-ios-star'
        } else {
          rtgs[i].icon = 'ion-ios-star-outline'
        }
      }
    }
  }
})()
