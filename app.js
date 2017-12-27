import * as angular from "angular";
import all from "@uirouter/angularjs";
import  all from "angular-validation/dist/angular-validation";
import  all from "angular-validation/dist/angular-validation-rule";
let myapp =angular.module("app",["ui.router",'validation', 'validation.rule']);
console.log("im app");
export const app =myapp;
