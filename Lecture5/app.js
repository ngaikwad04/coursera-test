(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Nikki"
  $scope.sayHello = function () {
    return "Hello Coursera!"
  }
});

})();
