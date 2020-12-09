const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temples = jsObject['new_temples'];
    document.getElementById('tname').textContent = temples[3].name;
    document.getElementById('taddress').textContent = temples[3].address;
    document.getElementById('tnumber').textContent = temples[3].number;
    document.getElementById('temail').textContent = temples[3].email;
  });