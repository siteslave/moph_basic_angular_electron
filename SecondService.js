
angular.module('app.SecondService', [])

  .factory('SecondService', function () {
    var fruits = ['Orange', 'Apple', 'Mango'];
    return {
      getFruits: function () {
        return fruits;
      }
    }
  })