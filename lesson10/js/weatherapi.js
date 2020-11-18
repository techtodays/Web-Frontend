const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('current-environment').textContent = jsObject.weather[0].description;
    document.getElementById('current-humidity').textContent = jsObject.main.humidity;
    document.getElementById('current-speed').textContent = jsObject.wind.speed;
    const image = 'jsObject.weather[0].icon' + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('icon').setAttribute('src', image);
    document.getElementById('icon').setAttribute('alt', desc);
  });
  const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
    });