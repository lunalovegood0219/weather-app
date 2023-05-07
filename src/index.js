//date and time
let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = daysOfTheWeek[currentDate.getDay()];
let formatDate = ` ${currentDay} ${currentHours} : ${currentMinutes}`;
let dayTime = document.querySelector("#current-time");
dayTime.innerHTML = formatDate;
//search engine
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchInputDisplay = document.querySelector("#current-city");
  searchInputDisplay.innerHTML = searchInput.value;
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let city = searchInput.value;
  function displyayWeather(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    
    let currentTemp = document.querySelector("#main-temp");
    currentTemp.innerHTML = ` ${temperature}°C TODAY`;
    let humidityValue = Math.round(response.data.main.humidity);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML=`${humidityValue}%`;
    let windSpeed = Math.round(response.data.wind.speed);
    let wind = document.querySelector("#wind");
    wind.innerHTML= `${windSpeed}`;
    let weatherDescription = (response.data.weather[0].main);
    let describe = document.querySelector("#describe");
    describe.innerHTML=`${weatherDescription}`;
  }
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiCall).then(displyayWeather);

}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", search);
//Fahrenheit and Celsius
//function changeUnitToF() {
  //let changeUnitBtnF = document.querySelector("#main-temp");
  //changeUnitBtnF.innerHTML = "66°F TODAY";
//}
//let btnF = document.querySelector("#btn-f");
//btnF.addEventListener("click", changeUnitToF);
//function changeUnitToC() {
  //let changeUnitBtnC = document.querySelector("#main-temp");
  //changeUnitBtnC.innerHTML = "19°C TODAY";
//}
//let btnC = document.querySelector("#btn-c");
//btnC.addEventListener("click", changeUnitToC);
let apiKey = "17ad6e67aa629189f73b053634668b20";
let city = searchInput.value;
function displyayWeather(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#main-temp");
  currentTemp.innerHTML = `TODAY ${temperature}°C`;
}
let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiCall).then(displyayWeather);

function regionTemp(responsebtn) {
  let temperatureRegion = Math.round(responsebtn.data.main.temp);
  let currentTempRegion = document.querySelector("#main-temp");
  currentTempRegion.innerHTML = `TODAY ${temperatureRegion}°C`;
}

function currentLoc() {
  function currentPosition(position) {
    let latApi = position.coords.latitude;
    let lonApi = position.coords.longitude;
    let apiCallLoc = `https://api.openweathermap.org/data/2.5/weather?lat=${latApi}&lon=${lonApi}&appid=${apiKey}&units=metric`;
    axios.get(apiCallLoc).then(regionTemp);
  }
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let regionBtn = document.querySelector("#region-btn");
regionBtn.addEventListener("click", currentLoc);