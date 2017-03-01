(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', ['$scope', function ($scope) {

            $scope.message = "";

            $scope.check = function () {
                if (!$scope.lunch_menu) {
                    $scope.message = "Please enter data first";
                    return;
                }

                var items = $scope.lunch_menu.split(',');
                items = items.filter(function(n){ return n });
                
                if (items.length <= 3)
                    $scope.message = "Enjoy!";
                else
                    $scope.message = "Too much!";
            };

        }]);

})();
