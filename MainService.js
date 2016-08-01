
angular.module('app.MainService', [])

  .factory('MainService', function () {
    var users = ['Satit', 'Monalisa', 'John Doe'];
    return {
      getUsers: function () {
        return users;
      }
    }
  })
