'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 * config dependency generated via grunt.
 */

angular.module('frontendApp', ['config'])
  .controller('MainCtrl', function ($scope, $http) {
    var url = 'http://private-705d2-poligonosindustriales.apiary-mock.com/company/1';
	  $http({method: 'GET', url: url}).
        success(function(data, status) {
          console.log('Retrieved detail for cia 1');
          $scope.status = status;
          $scope.company = data;
        }).
        error(function(data, status) {
          console.log('Error retrieving detail for cia 1');
          $scope.data = data || 'Request failed';
          $scope.status = status;
        });
  }).directive('isOpened', function(){
      return{
        restrict: 'E',
        templateUrl: './views/alerts/opened-alert.html',
        link: function ($scope) {
          $scope.isOpened = false;
        }
      };
  });

