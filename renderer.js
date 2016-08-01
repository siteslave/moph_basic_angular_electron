
angular.module('app', [
  'ui.router',
  'app.MainService',
  'app.SecondService'
])

  .config(function ($stateProvider, $urlRouterProvider) { 

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('main', {
        url: '/',
        templateUrl: './templates/main.html',
        // controller: 'MainController'
    })
    .state('users', {
        url: '/users',
        templateUrl: './templates/users.html',
        controller: function ($scope, MainService) {
          $scope.users = MainService.getUsers();
        }
    })
    .state('about', {
        url: '/about/:id',
        templateUrl: './templates/about.html',
        controller: function ($scope, $stateParams) {
          console.log($stateParams.id);
        }
    })
  })  
  
  // .controller('MainController', function ($scope) {


  // })
