import {app} from "../app";

app.directive("custominput", [function () {
    return {
        require: "ngModel",
        templateUrl: 'directive/custominput.directive.html',

        link: function (s, element, attr, ctrl) {
            console.log(ctrl);
            var listener = function (ev) {
                attr.value = new Date().getTime();
                console.log(attr.value);
                ctrl.$setViewValue(attr.value);
            };

            element.find("button").on('click', listener);

            ctrl.$render = function () {

                element.find("span").text(ctrl.$viewValue);

            };
          //  view=>model
            ctrl.$parsers.push(function (v) {
               return v = v + "vm";
            });
//model=>view
            ctrl.$formatters.push(function(v){
               return v=v+"mv";
            })
            // attr.$observe('value', ctrl.$render);
        }
    }
}]);