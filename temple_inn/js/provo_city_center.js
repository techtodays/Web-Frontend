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
    document.getElementById('tservices').innerHTML = temples[3].services;
    document.getElementById('thistory').innerHTML = temples[3].history;
    document.getElementById('tordinance').innerHTML = temples[3].ordinance_schedule;
    document.getElementById('tsession').innerHTML = temples[3].session_schedule;
    document.getElementById('tcloser').innerHTML = temples[3].temple_closure_schedule;
  });