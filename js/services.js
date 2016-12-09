
app.service('StorageService', function($http){
   //save blob id to local storage
});

app.service('ReminderService', function($http){
	this.makeReminder = function(callGood, callBad, reminder){
		var url = 'https://jsonblob.com/api/jsonBlob';
		$http.post(url, reminder).then(funGood, funBad);
		function funGood(response){
			callGood(response);
		};
						
		function funBad(response){
			callBad(response.status, response.statusText);
		}
	}
});

app.service('getService', function($http){
	this.getReminder = function(callGood, callBad, blob){
		var url = 'https://jsonblob.com/api/jsonblob/' + blob;
		console.log(url);
		$http.get(url).then(funGood, funBad);
		function funGood(response){
			callGood(response);
			console.log("resp from service " + response.data);

		}
		function funBad(response){
			callBad(response.statusText);
		}
	}
});

//  app.service('deleteService', function($http)){
// 	this.deleteReminder = function(callGood, callBad, blob){
// 	var url = 'https://jsonblob.com/api/jsonBlob/' + blob; 
// 	$http.delete(url).then(funGood, funBad);
// 	function funGood(response){
// 		callGood(response);
// 	}
// 	function funBad(response){
// 		callBad(response);
// 	}
// 	}
// }

app.service('updateService', function($http){
	this.updateReminder = function(callGood, callBad, blob, reminder){
		var url = 'https://jsonblob.com/api/jsonblob/' + blob;
		console.log("us url in " + url);
		$http.put(url, reminder).then(funGood, funBad);
		function funGood(response){
			callGood(response.status);
			console.log("from updateService " + response);
		}
		function funBad(response){
			callBad(response.status);
			console.log("status from updateService " + response.statusText);
		}
	}
});


