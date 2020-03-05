var app = angular.module('listadoApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http',function($scope,$http){
  
	$scope.menuSuperior = 'templates/menu.html';

}]);