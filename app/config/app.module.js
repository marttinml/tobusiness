/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch"];
    var customModules       = ["Home","Help","Profile","Inbox","Tiempoaire"];
    var componentsModules   = ["alHeader","alFooter","alMenu",'alCarriers','alMontos'];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('app', modules);

})();