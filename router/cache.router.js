import {app} from "../app";

export const router = app.config(function($stateProvider){
    $stateProvider.state("demo.cache",{
        url:"cache",
        views:{
            "demo":{
                templateUrl:"tpls/cache/cache.view.html"
            }
        }
    })
});