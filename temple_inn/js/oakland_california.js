const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temples = jsObject['new_temples'];
    document.getElementById('tname').textContent = temples[1].name;
    document.getElementById('taddress').textContent = temples[1].address;
    document.getElementById('tnumber').textContent = temples[1].number;
    document.getElementById('temail').textContent = temples[1].email;
    document.getElementById('tservices').innerHTML = temples[1].services;
    document.getElementById('thistory').innerHTML = temples[1].history;
    document.getElementById('tordinance').innerHTML = temples[1].ordinance_schedule;
    document.getElementById('tsession').innerHTML = temples[1].session_schedule;
    document.getElementById('tcloser').innerHTML = temples[1].temple_closure_schedule;
  });