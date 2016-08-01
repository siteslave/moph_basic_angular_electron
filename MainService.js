
angular.module('app.MainService', [])

  .factory('MainService', function () {
    var fruits = ['Apple', 'Banana', 'Mango'];
    return {
      getFruits: function () {
        return fruits;
      }
    }
  })
