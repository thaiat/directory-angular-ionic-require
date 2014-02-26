define([
        '../module',
        '../namespace',
        '../../common/namespace'
    ],
    function (module, namespace, namespaceCommon) {
        'use strict';

        var name = namespace + ".EmployeeIndexController";
        var dependencies = ['$scope', namespaceCommon + '.EmployeeService'];
        var controller = function ($scope, EmployeeService) {
            var vm = this;
            vm.searchKey = "";
            vm.clearSearch = function () {
                vm.searchKey = "";
                findAllEmployees();
            };

            vm.search = function () {
                EmployeeService.findByName(vm.searchKey).then(function (employees) {
                    vm.employees = employees;
                });
            };

            var findAllEmployees = function () {
                EmployeeService.findAll().then(function (employees) {
                    vm.employees = employees;
                });
            };

            findAllEmployees();
        };

       

        module.controller(name, dependencies.concat(controller));

    });