require.config({
    urlArgs : 'bust=v1' + (new Date().getTime()),
    waitSeconds : 20, //make sure it is enough to load all scripts
    paths : {
        'angular' : 'libs/angular/1.2.9/angular',
        'ionic' : 'libs/ionic/0.9.23/ionic',
       
        'angularIonic' : 'libs/ionic/0.9.23/ionic-angular',
        'angularUiRouter' : 'libs/angular/angular-ui/0.2.8/angular-ui-router',
        'angularSanitize' : 'libs/angular/1.2.9/angular-sanitize',
        'angularAnimate' : 'libs/angular/1.2.9/angular-animate'

    },
    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angularUiRouter' : {
            deps : ['angular']
        },
        'angularAnimate' : {
            deps : ['angular']
        },
        'angularSanitize' : {
            deps : ['angular']
        },
        'angularIonic' : {
            deps : [
                'angularAnimate',
                'angularSanitize',
                'angularUiRouter'
            ]
        }

    }
});

require([
        'angular',
        'app/namespace',
        'app/app',
        'app/routes'
    ],
    function (angular, namespace) {
        var onDeviceReady = function () {

            angular.bootstrap(document, [namespace]);

        };
        document.addEventListener('deviceready', onDeviceReady);
    });