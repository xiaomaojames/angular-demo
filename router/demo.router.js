import {app} from "../app";
import {demoCtrl} from "../ctrls/demo.ctrl"
import {custominputCtrl} from "../ctrls/custom_input.ctrl";

export const router = app.config(function ($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.otherwise('/');
    const demo = {
        name: 'demo',
        url: '/demo',
        views:{
            "main":{
                templateUrl: 'tpls/demo.html',
                controller: "demoCtrl"
            }
        }

    };

    const custominput = {
        name: 'custominput',
        url: "/custominput",
        "main":{
            templateUrl: "tpls/custominput.view.html",
            controller: "custominputCtrl"
        }

    }

    $stateProvider.state(demo).state(custominput);
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);


