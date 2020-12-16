const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const town = jsonObject['towns'];
    let x = 0;
    for (let i = 0; i <town.length; i++){
        if (town[i].name == "Fish Haven" || town[i].name == "Preston" || town[i].name == "Soda Springs"){
            document.querySelector('#city'+x).textContent = town[i].name;
            document.querySelector('#motto'+x).textContent = town[i].motto;
            document.querySelector('#year'+x).textContent = town[i].yearFounded;
            document.querySelector('#pop'+x).textContent = town[i].currentPopulation;
            document.querySelector('#rain'+x).textContent = town[i].averageRainfall;
            document.querySelector('#event'+x).textContent = town[i].events[0];
            document.querySelector('#event1'+x).textContent = town[i].events[1];
            document.querySelector('#event2'+x).textContent = town[i].events[2];
            x = x + 1;
        }
    }
  });