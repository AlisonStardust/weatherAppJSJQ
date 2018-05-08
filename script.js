//gonna rewrite it in ES6
let apiAddress = "https://fcc-weather-api.glitch.me/api/current?";
const city = document.querySelector(".print-city");
const country = document.querySelector(".print-country");
const current = document.querySelector(".print-current");
const temperature = document.querySelector(".print-temperature");
const how = document.querySelector(".print-how");

function startapp() {
  current.innerHTML = new Date();
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
    .then(resp => resp.json())
    .then(getSepecific)
}

function getSepecific(responseAgain) {
  console.log(responseAgain, responseAgain.weather[0].main, responseAgain.weather[0].description);
  city.innerText = `${responseAgain.name}, ${responseAgain.sys.country} 🏡`;
  temperature.innerText = `${responseAgain.main.temp} 🌡️`;
  if (responseAgain.weather[0].main === "Clouds") {
    how.innerText = `${responseAgain.weather[0].main} ☁️`;
  } else if (responseAgain.weather[0].main === "Rain") {
    how.innerText = `${responseAgain.weather[0].main} 🌧️`;
  } else if (responseAgain.weather[0].main === "Sunny") {
    how.innerText = `${responseAgain.weather[0].main} ☀️`;
  } else if (responseAgain.weather[0].main === "Sunny") {
    how.innerText = `${responseAgain.weather[0].main} 🌨️`;
  }
}

startapp();
/*

      let currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
    }
  });
}
*/