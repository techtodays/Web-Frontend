const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temples = jsObject('temples')
    document.getElementById(tname).textContent = temples[0].name;

  })