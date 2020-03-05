app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'templates/home.html',
			controller: 'inicioCtrl'
		})
		.when('/coches',{
			templateUrl: 'templates/coches.html',
			controller: 'cochesCtrl'
		})
		.when('/coche/:id',{
			templateUrl: 'templates/coche.html',
			controller: 'cocheCtrl'
		})
		//TODO: Añadir otras páginas
		.otherwise({
			redirectTo: '/'
		});


});