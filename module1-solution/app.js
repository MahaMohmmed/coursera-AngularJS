(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.item = "";
      $scope.massage = "";
    
      $scope.IsTooMuch = function() {
        $scope.listOfItem = $scope.item.split(',');
        
        $scope.massage = "Please enter data first!"

        if($scope.listOfItem.length <= 3 && $scope.item != ""){
          $scope.massage = "Enjoy!"
        };
        
        if($scope.listOfItem.length >3){
          $scope.massage = "Too much!!"
        }
        
      };
      
    }
    
    })();
    