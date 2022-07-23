import {WeatherDetails} from './weatherDetails.js';

export {setupHeader, setupMain};

/* Function to set up the site header */

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

  const searchBarInput = document.createElement('input');
  searchBarInput.type = 'text';
  searchBarInput.id = 'search-bar-input';

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Go';

  searchBar.appendChild(searchBarLabel);
  searchBar.appendChild(searchBarInput);
  searchBar.appendChild(searchButton);

  header.appendChild(pageTitle);
  header.appendChild(searchBar);

  document.querySelector('body').appendChild(header);
}

/* Function to display the weather content */

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