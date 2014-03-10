define([
        'angular',
        './namespace',
        './common/namespace',
        './employee-detail/namespace',
        './employee-reports/namespace',
        './employee-index/namespace',
        './area/namespace',
        'ionic',
        'angularAnimate',
        'angularUiRouter',
        'angularIonic',
        './common/module.require',
        './employee-detail/module.require',
        './employee-index/module.require',
        './employee-reports/module.require',
        './area/module.require'
    ],
    function (angular, namespace, namespaceCommon, namespaceEmployeeDetail, namespaceEmployeeReports, namespaceEmployeeIndex, namespaceArea) {
        'use strict';

        var app = angular.module(namespace, [
            'ionic',
            'ngAnimate',
            'ui.router',
            namespaceCommon,
            namespaceEmployeeDetail,
            namespaceEmployeeReports,
            namespaceEmployeeIndex,
            namespaceArea
        ]).run(function () {
            //
        });
        return app;
    });