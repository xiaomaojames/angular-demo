import {app} from "../app";

app.directive("demo", [function () {
    return {
        link: function (s) {
            scope.aa = 22;
        },
        controller: function () {
            this.aa = 123;
        }
    }
}]);