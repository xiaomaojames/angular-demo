import {app} from "../../app";

app.directive("leftMenu", function () {
    return {
        link: function () {
        console.log("leftMenu is run");
        }
    }
})