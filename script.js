function startapp() {

  let apiAddress = "https://fcc-weather-api.glitch.me/api/current?";
  const city = document.querySelector(".print-city");
  const country = document.querySelector(".print-country");
  const current = document.querySelector(".print-current");
  const temperature = document.querySelector(".print-temperature");
  const how = document.querySelector(".print-how");

  let date = new Date();
  current.innerHTML = `${date.toDateString()} ⏰`;
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

  function getWeather(lat, lon) {
    var urlString = apiAddress + lat + "&" + lon;
    fetch(urlString)
      .then(resp => resp.json())
      .then(getSepecific)
  }

  function getSepecific(responseAgain) {
    let currentTempInCelsius = Math.round(responseAgain.main.temp * 10) / 10;
    console.log(responseAgain.weather[0].main);
    city.innerText = `${responseAgain.name}, ${responseAgain.sys.country} 🏡`;
    temperature.innerText = `${responseAgain.main.temp} ${String.fromCharCode(176)} C 🌡️`;
    //print correct weather description with emoji
    if (responseAgain.weather[0].main === "Clouds") {
      how.innerText = `${responseAgain.weather[0].main} ☁️`;
    } else if (responseAgain.weather[0].main === "Rain") {
      how.innerText = `${responseAgain.weather[0].main} 🌧️`;
    } else if (responseAgain.weather[0].main === "Sunny") {
      how.innerText = `${responseAgain.weather[0].main} ☀️`;
    } else if (responseAgain.weather[0].main === "Snow") {
      how.innerText = `${responseAgain.weather[0].main} 🌨️`;
    } else if (responseAgain.weather[0].main === "Fog") {
      how.innerText = `${responseAgain.weather[0].main} 🌫️`;
    } else if (responseAgain.weather[0].main === "Clear") {
      how.innerText = `${responseAgain.weather[0].main} 🛩️`;
    } else {
      how.innerText = `${responseAgain.weather[0].main}`;
    }
  }
}

startapp();