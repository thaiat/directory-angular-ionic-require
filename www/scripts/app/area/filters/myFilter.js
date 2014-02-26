define([
    '../module',
    '../namespace'
], function (module, namespace) {

    var name = 'myFilter';
    var dependencies = [];
    var filter = function () {
        return function (input) {

            return input.toUpperCase();
        };
    };
    module.filter(name, dependencies.concat(filter));

});