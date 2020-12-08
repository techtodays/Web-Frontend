const apiURL = 'https://ishalsey.github.io/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const new_temples = jsObject['new_temples'];
    document.getElementById(tname).textContent = new_temples[0].name;
    document.getElementById(taddress).textContent = temples[0].address;
    document.getElementById(tnumber).textContent = temples[0].number;
    document.getElementById(temail).textContent = temples[0].email;
  });