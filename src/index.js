function updateWeather(response) {
  // !!!! ADD a condition about the unit system !
  console.log(response.data.temperature.current);
  // city
  let cityElement = document.querySelector(".weather-app-city");
  cityElement.innerHTML = response.data.city;
  console.log(cityElement.innerHTML);

  // temperature
  let temperatureElement = document.querySelector(".weather-temperature");
  let temp = response.data.temperature.current;

  console.log(response.data);
  temperatureElement.innerHTML = `${Math.round(temp)}°C`;

  // weather description
  let wDescription = document.querySelector(".weather-description");
  let apiWeatherDescription = response.data.condition.description;
  wDescription.innerHTML = apiWeatherDescription;

  // wind speed
  // !!! add a condition for the unit
  let windElement = document.querySelector(".wind-speed");
  let windSpeedData = response.data.wind.speed;
  windSpeedData = Math.round(windSpeedData);
  windElement.innerHTML = `${windSpeedData}km/h`;

  // humidity content
  let humidityElement = document.querySelector(".humidity-content");
  let humidityData = response.data.temperature.humidity;
  humidityElement.innerHTML = `${humidityData}%`;

  // DateTime update
  let dateTimeElement = document.querySelector(".current-dateTime");
  let dateTimeData = response.data.time;
  dateTimeData = new Date(dateTimeData * 1000);
  let fullDate = dateTimeFormat(dateTimeData);
  console.log(fullDate);

  dateTimeElement.innerHTML = fullDate;
  //   console.log(`${day}, ${month} ${date} ${hour}:${mn}`);

  // Icon & text below
  let iconElement = document.querySelector(".weather-icon-display");
  let iconUrl = response.data.condition.icon_url;
  let iconAltText = response.data.condition.icon;
  let icon = `<img
                  src=${iconUrl}
                  alt=${iconAltText}
                  class="src"
              />`;
  iconElement.innerHTML = icon;
}

function dateTimeFormat(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan.",
    "Feb",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let day = weekDays[date.getDay()];
  let month = months[date.getMonth()];
  let daysDate = date.getDate();
  if (daysDate < 10) {
    daysDate = `0${daysDate}`;
  }
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let mn = date.getMinutes();
  if (mn < 10) {
    mn = `0${mn}`;
  }

  // console.log(`${day}, ${month} ${daysDate} ${hour}:${mn}`);
  let fullDate = `${day}, ${month} ${daysDate} ${hour}:${mn}`;
  return fullDate;
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
