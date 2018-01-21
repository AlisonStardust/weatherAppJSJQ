
var apiAddress = "https://fcc-weather-api.glitch.me/api/current?";

$( document ).ready(function(){
  var lat, lon, temp;
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    })
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  });  

  function getWeather(lat, lon) {
  var urlString = apiAddress + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#how").text(result.weather[0].main);
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      var currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
    }
  });
}


var x = new Date();
document.getElementById("current").innerHTML = x;