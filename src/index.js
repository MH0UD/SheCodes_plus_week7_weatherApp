function updateWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector(".weather-temperature");
  let temp = response.data.temperature.current;

  console.log(response.data);
  let cityElement = document.querySelector(".weather-app-city");
  cityElement.innerHTML = response.data.city;
  console.log(cityElement.innerHTML);
  temperatureElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
  // api call
  apiToken = "3bb10a1f4o479a6e4e2c3cb7at836bff";

  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiToken}`;
  console.log(apiURL);
  axios.get(apiURL).then(updateWeather);
}

function runSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);

searchFormElement.addEventListener("submit", runSearchSubmit);

searchCity("Munich");
