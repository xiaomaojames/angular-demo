import {app} from "../app";
import all from "./demo.router";
import all from "./cache.router";
export const router = app.config(function ($stateProvider) {
    $stateProvider.state('/', {
        url: "/",
        views: {
            main: {
                templateUrl:"tpls/list.view.html"
            }
        }
    });
});