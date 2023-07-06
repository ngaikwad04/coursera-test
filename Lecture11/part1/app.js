(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.staetOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "I like to eat healthy food!";
  };

  $scope.feedNikki = function () {
    $scope.staetOfBeing = "fed";
  }
}

})();
