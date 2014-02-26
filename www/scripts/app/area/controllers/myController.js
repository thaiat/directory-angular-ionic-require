define([
    '../module',
    '../namespace'
], function (module, namespace) {

    var name = namespace + '.myController';

    var dependencies = ['$scope', namespace + '.myService'];
    var controller = function ($scope, myService) {
        var vm = this;
        vm.message = 'Hello World';
        vm.title = "This is a title";

        myService.log();
    };

    module.controller(name, dependencies.concat(controller));

});