angular.module('exampleApp', ['ui.router', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl : 'views/header.html'
                },
				'content': {
					templateUrl : 'views/home.html'
				},
				'footer' : {
					templateUrl : 'views/footer.html'
				}
            }
        })
	
		.state('app.about', {
			url:'about',
			views: {
				'content@': {
					templateUrl: 'views/about.html'
				}
			}
		});
	
    $urlRouterProvider.otherwise('/');
	
});