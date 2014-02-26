define([
    '../module',
    '../namespace'
], function (module, namespace) {
    'use strict';

    var name = namespace + ".myConstant";

    module.constant(name, {
        value1 : 'this is value1'
    });

});