define([
    '../module',
    '../namespace'
], function (module, namespace) {
    'use strict';

    module.config([
        '$provide',
        function ($provide) {
            $provide.value(namespace + '.a', 123);
        }
    ]);

});