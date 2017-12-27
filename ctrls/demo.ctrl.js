import {app} from "../app";
import {formtest} from "../directive/formtest";

app.controller("demoCtrl", ["$injector", "$scope", function ($injector, $scope) {

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



}]);

export const demoCtrl = "demoCtrl";