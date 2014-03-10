define([
        'angular',
        'app/app',
        './area/namespace'
    ],
    function (angular, app, namespaceArea) {
        'use strict';

        return app.config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state('area', {
                        url : '/area',
                        templateUrl : 'scripts/app/area/templates/area.html',
                        controller : namespaceArea + '.myController as vm'
                    })
                    .state('employee-index', {
                        url : '/employees',
                        templateUrl : 'scripts/app/employee-index/templates/employee-index.html',
                        controller : 'directory.employeeIndex.EmployeeIndexController as vm'
                    })
                    .state('employee-detail', {
                        url : '/employee/:employeeId',
                        templateUrl : 'scripts/app/employee-detail/templates/employee-detail.html',
                        controller : 'directory.employeeDetail.EmployeeDetailController as vm'
                    })
                    .state('employee-reports', {
                        url : '/employee/:employeeId/reports',
                        templateUrl : 'scripts/app/employee-reports/templates/employee-reports.html',
                        controller : 'directory.employeeReports.EmployeeReportsController as vm'
                    });

                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise('/employees');

            }
        ]);
    });