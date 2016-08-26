myView = angular.module("test", ['angular-magic-table']);
myView.controller('test-controller', ['$scope','$http', function($scope,$http){
  $scope.test = "Hola!";
  // $http.get('https://www.mexkey.net/api/v1/showTickets.php').then(function(response){
  $http.get('https://www.mexkey.net/api/v1/showTransactions.php').then(function(response){
    $scope.datos = response.data;
  });
  $scope.magicConfig = {
<<<<<<< HEAD
    show: 10
=======
    show: 10,
    columsFormat: [
      {1: 'text'},
      {2: 'text'},
      {3: 'text'},
      {4: 'number'}      
    ]
>>>>>>> fdb519573dd1ecb24760420aa26541e2eb4a50e8
  }
}]);
