define([
        '../module',
        '../namespace',
        '../../common/namespace'
    ],
    function (module, namespace, namespaceCommon) {
        'use strict';

        var name = namespace + ".EmployeeReportsController";
        var dependencies = ['$scope', '$stateParams', namespaceCommon + '.EmployeeService'];
        var controller = function ($scope, $stateParams, EmployeeService) {
            var vm = this;
            EmployeeService.findByManager($stateParams.employeeId).then(function (employees) {
                vm.employees = employees;
            });
        };

        module.controller(name, dependencies.concat(controller));

    });