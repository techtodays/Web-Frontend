const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const town = jsonObject['towns'];
    for (let i = 0; i < town.length; i++ ){
        if (town[i].name == "Fish Haven" || town[i].name == "Preston" || town[i].name == "Soda Springs"){
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let italic = document.createElement('i');
            let p0 = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');
            
            h2.textContent = town[i].name;    
            div.appendChild(h2);
            italic.textContent = town[i].motto;
            p0.appendChild(italic);
            div.appendChild(p0);
            p1.textContent = "Year Founded:" + town[i].yearFounded;
            div.appendChild(p1);
            p2.textContent = "Population:" + town[i].currentPopulation;
            div.appendChild(p2);
            p3.textContent = "Rainfall:" + town[i].averageRainfall;
            div.appendChild(p3);
            image.setAttribute("src", town[i].photo);
            div.appendChild(image);
            document.querySelector('.box').appendChild(div); 
        }
    }
  });


