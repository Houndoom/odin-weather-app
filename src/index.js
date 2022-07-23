import getWeather from './getWeather.js';
import './style.css';
import {setupHeader, setupMain, updateAllWeatherItems, setInputError} from './displayControl.js'

setupHeader();

let firstSearch = 0;

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', updateWeather)

async function updateWeather() {
  const searchBarInput = document.getElementById('search-bar-input');
  const loc = searchBarInput.value;
  let json = await getWeather(loc);
  if (json) {
    if (firstSearch === 0) {
      setupMain(); // Display results only for the first successful search
      firstSearch = 1;
    }
    setInputError('');
    updateAllWeatherItems(json);
  } else {
    setInputError('Please enter a valid location');
  }
}