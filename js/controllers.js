

//8e9bc91c-bdf5-11e6-871b-d5f98e7425e7

//fc2e78d1-bdf5-11e6-871b-4f6c7f682805

//fc2e78d1-bdf5-11e6-871b-4f6c7f682805

app.controller('majorTom', function($scope, ReminderService,getService, updateService, DeleteService){

$scope.$on("$ionicView.beforeEnter", function(){
   // handle event
   $scope.theBlob = JSON.parse(localStorage.getItem("blobID"));
	console.log("blob from onload localStorage: " + $scope.theBlob);
	if($scope.theBlob){
		$scope.exists = true;
   getService.getReminder(reminder, noReminder, $scope.theBlob);
}else{
		$scope.exists = false;
		$scope.reminder = {
		title: '',
		description: '',
		priority: '',
		complete: false
		

	}

}
  //deal with getItem response

  function reminder(response){
  		//$scope.reminder.title = response.title;
  		//$scope.reminder.title = response.title;
  		$scope.reminder = {
  			title: response.data.title,
  			description: response.data.description,
  			priority: response.data.priority,
  			complete: response.data.complete
  		}
  		console.log("reminder title " + $scope.reminder.title);
  		console.log(response);
  }

  function noReminder(response){
  	console.log(response);
  }

});
	
	// $scope.reminder = {
	// 	title: '',
	// 	description: '',
	// 	priority: '',
	// 	complete: false
		

	// }

	//$scope.exists = false;
//priority
	$scope.getPriority = function(prior){
		$scope.reminder.priority = prior;
		console.log($scope.reminder.priority);
		
	}


//make Reminder
	$scope.makeReminder = function(){
		$scope.reminder = $scope.reminder;
		ReminderService.makeReminder(responseGood, responseBad, $scope.reminder)
		//$scope.exists = true;
	};
//deal with makeReminder response, set in local storage
	function responseGood(response){
		$scope.exists = true;
		$scope.blobID = response.headers("x-jsonblob");
		//send blobID to StorageService
		console.log($scope.blobID);
		console.log(response.data);
		localStorage.setItem("blobID", JSON.stringify($scope.blobID));
		$scope.theThing = JSON.parse(localStorage.getItem("blobID"));
		console.log("blob from localStorage: " + $scope.theThing);
	}
	function responseBad(response){
		
		console.log("something's wrong");
	}


$scope.updateReminder = function(){
//call service to update blob
	updateService.updateReminder(rGood, rBad, $scope.theBlob, $scope.reminder);
}
function rGood(response){
	alert("updated");
		//$scope.blobID = response.headers("x-jsonblob");
// getService.getReminder(reminder, noReminder, $scope.blobID);
// console.log(response.headers("x-jsonblob"));
 	getService.getReminder(good, bad, $scope.theBlob);
		function good(response){
			$scope.reminder = {
  			title: response.data.title,
  			description: response.data.description,
  			priority: response.data.priority,
  			complete: response.data.complete
  			}
  			console.log("marie" + $scope.reminder.title + response.data.title);
		}
		function bad(response){
			console.log("from bad function in update reminder " + response.status);
		}


}

function rBad(response){
	console.log("from rBad " + response.status);
}

 $scope.deleteReminder = function(){
 	//call servic
 	
 	DeleteService.deleteReminder(good, bad, $scope.theBlob);
 	function good(response){
 	$scope.exists = false;
 	localStorage.clear();
 	console.log(response.status);
 		$scope.reminder = {
		title: '',
		description: '',
		priority: '',
		complete: false
		

	}
 	}
 	function bad(response){
 	console.log(response.status);

 	}
		
 }


	

});
















