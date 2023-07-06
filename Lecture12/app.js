(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.staetOfBeing = "hungry";
  $scope.cookiesCost = .45;

  $scope.sayMessage = function () {
    var msg = "Nikki likes to eat healthy food!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Nikki likes to eat healthy food!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.feedNikki = function () {
    $scope.staetOfBeing = "fed";
  };
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}

})();
