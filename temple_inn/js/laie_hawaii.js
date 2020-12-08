const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById(tname).textContent = jsObject[0].name;

  })