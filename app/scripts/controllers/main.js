'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 * config dependency generated via grunt.
 */

var frontend = angular.module('frontendApp');

frontend.controller('MainCtrl', ['$scope','$http','ENV',function ($scope, $http, ENV) {

    //demo purposes
    console.log('ENV information: ',ENV);

    var url = ENV.apiEndpoint;
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
  }])
frontend.directive('isOpened', function(){
      return{
        restrict: 'E',
        templateUrl: './views/alerts/opened-alert.html',
        link: function ($scope) {
          $scope.isOpened = false;
        }
      };
  });

