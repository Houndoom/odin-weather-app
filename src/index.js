import getWeather from './getWeather.js';
import './style.css';
import {setupHeader, setupMain, updateWeatherItem} from './displayControl.js'

setupHeader();

let firstSearch = 0;

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', updateWeather)

async function updateWeather() {
  const searchBarInput = document.getElementById('search-bar-input');
  const loc = searchBarInput.value;
  const searchBarError = document.querySelector('.search-bar-error');
  let json = await getWeather(loc);
  if (json) {
    if (firstSearch === 0) {
      setupMain();
      firstSearch = 1;
    }
    searchBarInput.setCustomValidity('');
    searchBarError.textContent = '';

    const locationName = document.querySelector('.location-name');
    locationName.textContent = json.name;

    updateWeatherItem('temp', parseFloat(json.main.temp).toFixed(0));
    updateWeatherItem('feels-like', parseFloat(json.main.feels_like).toFixed(0));
    updateWeatherItem('pressure', json.main.pressure);
    updateWeatherItem('humidity', json.main.humidity);
    updateWeatherItem('wind-speed', json.wind.speed);

    console.log(json.weather[0].icon);
    const locationWeatherImg = document.querySelector('.location img');
    locationWeatherImg.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;

  } else {
    searchBarInput.setCustomValidity('Invalid');
    searchBarError.textContent = 'Please enter a valid location';
  }
}