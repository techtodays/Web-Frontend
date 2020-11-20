const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
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
  const apiURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
  fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const list = jsObject['list'];
      let x=0;
      for (let i = 0; i < list.length; i++ ){
        if (list[i].dt_txt.includes('18:00:00')){
          document.querySelector('#temp'+x).textContent = list[i].main.temp;          
          document.querySelector('#image'+x).src="https://openweathermap.org/img/wn/"+list[i].weather[0].icon +"@2x.png";
          x=x+1;
        }
      }
    });