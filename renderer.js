
angular.module('app', ['app.MainService', 'app.SecondService'])
  
  .controller('MainController', function ($scope, MainService, SecondService) {
    $scope.username = 'satit';

    $scope.showName = function () { 
      alert($scope.username);
    }

    $scope.fruits = MainService.getFruits();
    $scope.fruits2 = SecondService.getFruits();

  })
