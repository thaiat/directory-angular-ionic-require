define([
    '../module',
    '../namespace',
    '../../common/namespace'
], function (module, namespace, namespaceCommon) {

    var name = namespace + '.EmployeeDetailController';

    var dependencies = ['$scope', '$stateParams', namespaceCommon + '.EmployeeService'];
    var controller = function ($scope, $stateParams, EmployeeService) {
        var vm = this;
        EmployeeService.findById($stateParams.employeeId).then(function (employee) {
            vm.employee = employee;
        });
    };

    module.controller(name, dependencies.concat(controller));

});