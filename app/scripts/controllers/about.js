'use strict';

/**
 * @ngdoc function
 * @name krysApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the krysApp
 */
angular.module('krysApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
