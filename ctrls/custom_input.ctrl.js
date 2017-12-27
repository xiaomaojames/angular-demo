import {app} from "../app";
import all from "../directive/custom_input.directive";
import all from "../directive/demo.directive";

app.controller('custominputCtrl', ["$scope", "$validation", function (s, $validation) {
    s.click = function () {
        s.aaa = 123456;
    }

    s.validate = function (form) {
        $validation.validate(form).success(function () {
            alert("success");
        }).error(function(){
            alert("error");
        });
    }

}]);