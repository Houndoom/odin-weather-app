import {WeatherDetails} from './weatherDetails.js';

export {setupHeader, setupMain, updateWeatherItem};

/* Set up the site header */

const setupHeader = function() {
  const header = document.createElement('div');
  header.classList.add('header');

  const pageTitle = document.createElement('div');
  pageTitle.classList.add('page-title');
  pageTitle.textContent = "Houndoom's Weather App";

  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');

  const searchBarLabel = document.createElement('label');
  searchBarLabel.for = 'search-bar-input';
  searchBarLabel.textContent = "Enter location here:";

  const searchBarInputError = document.createElement('div');
  searchBarInputError.classList.add('search-bar-input-error');

  const searchBarInput = document.createElement('input');
  searchBarInput.type = 'text';
  searchBarInput.id = 'search-bar-input';

  const searchBarError = document.createElement('div');
  searchBarError.classList.add('search-bar-error');

  searchBarInputError.appendChild(searchBarInput);
  searchBarInputError.appendChild(searchBarError);
  
  const searchButton = document.createElement('button');
  searchButton.id = 'search-button';
  searchButton.textContent = 'Go';

  searchBar.appendChild(searchBarLabel);
  searchBar.appendChild(searchBarInputError);
  searchBar.appendChild(searchButton);

  header.appendChild(pageTitle);
  header.appendChild(searchBar);

  document.querySelector('body').appendChild(header);
}

/* Display the weather content */

const setupMain = function () {

  // Location heading 

  const location = document.createElement('div');
  location.classList.add('location');

  const locationName = document.createElement('div');
  locationName.classList.add('location-name');

  const locationWeatherImg = document.createElement('img');
  
  location.appendChild(locationName);
  location.appendChild(locationWeatherImg);

  // Weather details

  const weatherDetails = document.createElement('div');
  weatherDetails.classList.add('weather-details');

  const weatherDetailsList = document.createElement('ul');

  // Set up each weather item

  const weatherDetailsArray = [
    new WeatherDetails('temp', 'Temperature', '℃'),
    new WeatherDetails('feels-like', 'Feels Like', '℃'),
    new WeatherDetails('pressure', 'Pressure', 'hPa'),
    new WeatherDetails('humidity', 'Humidity', '%'),
    new WeatherDetails('wind-speed', 'Wind Speed', 'm/s')
  ]

  for (let i of weatherDetailsArray) {
    let listItem = document.createElement('li');
    listItem.id = i.id;

    let weatherLabel = document.createElement('div');
    weatherLabel.classList.add('weather-label');
    weatherLabel.textContent = `${i.label}:`;

    let weatherValue = document.createElement('div');
    weatherValue.classList.add('weather-value');
    
    let weatherUnit = document.createElement('div');
    weatherUnit.classList.add('weather-unit');
    weatherUnit.textContent = i.unit;

    listItem.appendChild(weatherLabel);
    listItem.appendChild(weatherValue);
    listItem.appendChild(weatherUnit);

    weatherDetailsList.appendChild(listItem);
  }

  weatherDetails.appendChild(weatherDetailsList);

  // Main

  const main = document.createElement('div');
  main.classList.add('main');

  main.appendChild(location);
  main.appendChild(weatherDetails);

  document.querySelector('body').appendChild(main);

}

/* Updates specific weather value */

const updateWeatherItem = function (item, value) {
  const weatherItem = document.querySelector(`#${item} .weather-value`);
  weatherItem.textContent = value;
}