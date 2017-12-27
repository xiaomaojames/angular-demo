import {app} from "../app";
app.directive("formtest",["$injector",function ($injector) {

    return{
        socpe:{},
        templateUrl:'directive/formtest.html',
        link:function ($scope) {
            var $validationProvider = $injector.get('$validation');

            $scope.success = function(message) {
                alert('Success ' + message);
            };

            $scope.error = function(message) {
                alert('Error ' + message);
            };


            $scope.submit= function(form) {
                $validationProvider.validate(form)
                    .success($scope.success)
                    .error($scope.error);
            };
            $scope.form3 = {

                checkValid: $validationProvider.checkValid,
                submit: function(form) {
                    $validationProvider.validate(form)
                        .success($scope.success)
                        .error($scope.error);
                },
                reset: function(form) {
                    $validationProvider.reset(form);
                }
            };
        }
    }
}]);