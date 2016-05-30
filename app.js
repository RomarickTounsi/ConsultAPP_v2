"Use strict";

app.engine('html', require('hogan-express'));
var myApp =  angular.module('myApp', []);



/* myApp.controller('DivideCtrl', function($scope){
	
	$scope.numberData = {
		value1: 1,
		value2: 1
	}
	
	$scope.divide = function(val1, val2){
		window.alert(val1/val2);
	}
}); */

myApp.controller('AppCtrl', function($scope){
	
	$scope.model = {
		firstNamme: "Romarick",
		lastName: "Tounsi"
	}
	
	$scope.testFunction = function(){
		window.alert("Hi from Angular");
	}
});