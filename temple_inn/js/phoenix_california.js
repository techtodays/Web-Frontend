const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temples = jsObject['new_temples'];
    document.getElementById('tname').textContent = temples[2].name;
    document.getElementById('taddress').textContent = temples[2].address;
    document.getElementById('tnumber').textContent = temples[2].number;
    document.getElementById('temail').textContent = temples[2].email;
    document.getElementById('tservices').innerHTML = temples[2].services;
    document.getElementById('thistory').innerHTML = temples[2].history;
    document.getElementById('tordinance').innerHTML = temples[2].ordinance_schedule;
    document.getElementById('tsession').innerHTML = temples[2].session_schedule;
    document.getElementById('tcloser').innerHTML = temples[2].temple_closure_schedule;
  });