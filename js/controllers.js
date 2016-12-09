

//8e9bc91c-bdf5-11e6-871b-d5f98e7425e7

//fc2e78d1-bdf5-11e6-871b-4f6c7f682805

//fc2e78d1-bdf5-11e6-871b-4f6c7f682805

app.controller('majorTom', function($scope, ReminderService,getService){

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
  //call a service with $scope.blobId,

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

	$scope.getPriority = function(prior){
		$scope.reminder.priority = prior;
		console.log($scope.reminder.priority);
		//console.log(prior);
		console.log($scope.reminder.title);
		console.log($scope.reminder.description);
		console.log($scope.reminder.complete);
	}



	$scope.makeReminder = function(){
		$scope.reminder = $scope.reminder;
		ReminderService.makeReminder(responseGood, responseBad, $scope.reminder)
		//$scope.exists = true;
	};

	function responseGood(response){
		//$scope.theId = response;
		$scope.blobID = response.headers("x-jsonblob")
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


	// $scope.clearStorage = function(){
	// 	localStorage.clear();
	// }
	// $scope.getPriority = function(reminder.priority){
	// 	//$scope.reminder.priority = reminder.priority;
	// // 	console.log("rem prior is " + reminder.priority);
	// // 		console.log($scope.reminder.title);
	// // console.log($scope.reminder.desc);
	// // console.log($scope.reminder.priority);

	// }

// function Reminder(name, desc, priority){
// 		this.name = name;
// 		this.desc = desc;
// 		this.getPriority = function(priority){
// 			$scope.priority = priority;}
// 			;
// 		// this.done = complete;
// 		// this.
// }	
// 	$scope.makeReminder = function(name, desc,priority){
// 	$scope.reminder = 	new Reminder(name,desc);
// 	console.log($scope.reminder.title);
// 	console.log($scope.reminder.desc);
// 	console.log($scope.priority);
	
// 	}
// $scope.updateReminder = function(){
// //call service to update blob
// getService.getReminder(rGood, rBad, $scope.theBlob);

// function rGood(){
// 
// };
// function rBad(){

// }
// }

// $scope.deleteReminder = function(){
//  getService.deleteReminder(rGood, rBad, $scope.theBlob);

//  function rGood(response){
// console.log(response);
//  };
//  function rBad(response){
// 	console.log(response);
//  }
// }

// //localStorage.clear();	
// }
	

});
















