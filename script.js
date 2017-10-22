// JavaScript Document
(function(){
	
	var button = document.querySelector("#button"),
		errorDiv = document.querySelector("#errorDiv"),
		positionDiv = document.querySelector("#positionDiv");
	errorDiv.style.display = "none";	
	positionDiv.style.display = "none";
	
	function showError(text){
		errorDiv.innerHTML = text;
		errorDiv.style.display = "";
	}
	
	function showPosition(lat, lon){
		var adress = "http://bing.com/maps/default.aspx?cp="+lat+","+lon;
		positionDiv.innerHTML = "<a href='"+adress+"'>"+adress+"</a>";
		positionDiv.style.display = "";
	}
	
	if(!navigator.geolocation){
		
		showError("Twoja przeglądarka nie wspiera geolokalizacji!");
		
	}else{
		button.onclick = function(){ 
			navigator.geolocation.getCurrentPosition(function(position){
			
				showPosition(position.coords.latitude, position.coords.longitude);

			},function(errorObj){

				showError(errorObj.message);

			},
				{
				enableHighAccuracy: false,
				timeout: 50000,

			}

			);
		};
	}
	
})();