//gonna rewrite it in ES6
let apiAddress = "https://fcc-weather-api.glitch.me/api/current?";

function startapp() {
  var lat, lon, temp;
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
      console.log(apiAddress);
      getWeather(lat, lon);
    })
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function getWeather(lat, lon) {
  var urlString = apiAddress + lat + "&" + lon;
  fetch(urlString)
    .then(resp => console.log(resp))
}

startapp();
/*
$(document).ready(function(){
  var lat, lon, temp;
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
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
      let currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
    }
  });
}

let x = new Date();
document.getElementById("current").innerHTML = x;
*/