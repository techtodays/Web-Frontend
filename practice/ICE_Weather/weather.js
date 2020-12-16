const apiURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
  fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const list = jsObject['list'];
      let x = 0;
      for (let i = 0; i < list.length; i++){
        if (list[i].dt_txt.includes('18:00:00')){
            document.querySelector('#day'+x+'high').textContent = list[i].main.temp;
            x = x + 1;
        }
      }
    });
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d2c90ad44951af43f107a0a469f8dc50&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const main = jsObject['main'];
    const weather = jsObject['weather'];
    document.getElementById('currentTemp').textContent = main.temp;
    document.getElementById('weatherType').textContent = weather[0].description;
  });
    window.addEventListener('load',(event)=>{
        for(i = 0; i <= 6; i++){
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let d = new Date().getDay();
            let new2 = d + i;
            if(new2 > 6){
              new2 = new2 - 7;
            }
            document.querySelector('#day'+i).textContent = days[new2];
        }
    });
    