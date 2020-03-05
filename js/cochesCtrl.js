app.controller('cochesCtrl', ['$scope','$http', function($scope,$http){
	let limit = 4; 
	let total = 0;
	$scope.coches = {};
	$scope.position = limit ;
	$scope.previousBtn = true;

	// Llamada al mock para obtener los datos a mostrar
	$http.get('./json/listado.json').success((data) => {
		$scope.coches = data;
		total = data.listado.length;
	});

	$scope.next = function(){
		total
				$scope.position = total > $scope.position ? $scope.position + limit : $scope.position; 
		$scope.previousBtn = $scope.position > limit ? false : true;
		$scope.nextBtn = $scope.position >= total ? true : false; 

	}
	$scope.previous = function() {
		$scope.position = $scope.position > limit  ? $scope.position - limit : $scope.position; 
		$scope.previousBtn = $scope.position <= limit ? true : false;
		$scope.nextBtn = $scope.position < total ? false : true;
	}

}]);