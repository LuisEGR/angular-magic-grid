magicTable = angular.module('angular-magic-table',[]);
<<<<<<< HEAD
=======

>>>>>>> fdb519573dd1ecb24760420aa26541e2eb4a50e8
magicTable.directive('magicGrid', function() {
  return {
    restrict: 'E',
    scope: {
      datos: "=",
      config: "="
    },
    transclude: true,
<<<<<<< HEAD
    templateUrl: 'templates/mg-table.html'
=======
    templateUrl: 'templates/mg-table.html',
    controller: ['$scope', function magicController($scope){
      $scope.search_text = "";
      console.log($scope.config);
    }]
>>>>>>> fdb519573dd1ecb24760420aa26541e2eb4a50e8
  };
});
