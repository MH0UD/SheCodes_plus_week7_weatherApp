function runSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector(".weather-app-city");
  cityElement.innerHTML = searchInput.value;
  console.log(cityElement.innerHTML);
}

let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);

apiToken = "3bb10a1f4o479a6e4e2c3cb7at836bff";
searchFormElement.addEventListener("submit", runSearchSubmit);
