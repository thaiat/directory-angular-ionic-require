define([
        '../module',
        '../namespace'
    ],
    function (module, namespace) {
        'use strict';

        var name = namespace + ".myService";

        var dependencies = ['$log', namespace + '.a', namespace + '.myConstant'];
        var service = function ($log, a, myConstant) {

            return {
                log : function () {
                    $log.debug("log message " + a + " " + myConstant.value1);
                },
                add : function (v1, v2) {
                    return v1 + v2;
                }

            };
        };

        module.factory(name, dependencies.concat(service));
    });