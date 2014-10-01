'use strict';

/**
 * @ngdoc function
 * @name krysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krysApp
 */
angular.module('krysApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
