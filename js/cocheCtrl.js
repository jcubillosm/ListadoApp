app.controller('cocheCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

	let code = $routeParams.id;
	$scope.coche = {};
	$http.get('./json/listado.json').success((data) => {
		if (data.err !== undefined) {
			window.location = "#/coches";
			return;
		}
		for (index in data.listado) {
			if(data.listado[index].id === code) {
				$scope.coche = data.listado[index];
			}
		
		}
	});

}]);