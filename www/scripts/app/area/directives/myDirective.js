define([
    '../module',
    '../namespace'
], function (module, namespace) {
    var name = 'myDirective';
    var dependencies = [];
    var directive = function () {
        return {
            restrict : 'E',
            replace : true,
            scope : {
                info : '=info'
            },
            templateUrl : 'scripts/app/area/directives/myDirective.html'
        };
    };
    module.directive(name, dependencies.concat(directive));
});