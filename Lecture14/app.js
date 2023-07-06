(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = 0;

  $scope.showNumberOfWatchers = function () {
    console.log('# no watchers: ', $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter ++;
  };

  $scope.$watch(function (){
    console.log("Digest Loop Fired.");
  })

  // $scope.$watch('onceCounter', function (newValues, oldValues){
  //   console.log("old values: ", oldValues);
  //   console.log("new values: ", newValues);
  // });
  //
  // $scope.$watch('counter', function (newValues, oldValues){
  //   console.log("counter old values: ", oldValues);
  //   console.log("counter new values: ", newValues);
  // });


}

})();
