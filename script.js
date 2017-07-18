var app = angular.module("payment", []); 

app.controller("paymentController", function($scope, $timeout, $interval) {
	$scope.screenNo = 1;
	var screens = [1,2,3,4,16,17,18,19,20,21,22];// by preview
	var counter = 1;

	$interval(function(){
		$scope.screenNo = screens[counter];
		if(screens[counter] == 21){
			runProgressBar();
		}
		if(counter < screens.length - 1){
			counter++;
		}else{
			counter = 0;
		}
	}, 2000)

	// For integration-progress-bar animation uncomment below
	// $timeout(function() {
	// 	runProgressBar()
	// }, 500);

	function runProgressBar(){
	    var elem = document.getElementById("integration-progress-bar"); 
	    var width = 1;
	    var id = setInterval(frame, 7);
	    function frame() {
	        if (width >= 99) {
	            clearInterval(id);
	        } else {
	            width++; 
	            elem.style.width = width + '%'; 
	        }
	    }
	}

});