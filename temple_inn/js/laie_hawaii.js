const apiURL = '/temple_inn/js/temple.json';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temples = jsObject['new_temples'];
    document.getElementById('tname').textContent = temples[0].name;
    document.getElementById('taddress').textContent = temples[0].address;
    document.getElementById('tnumber').textContent = temples[0].number;
    document.getElementById('temail').textContent = temples[0].email;
    document.getElementById('tservices').innerHTML = temples[0].services;
    document.getElementById('thistory').innerHTML = temples[0].history;
    document.getElementById('tordinance').innerHTML = temples[0].ordinance_schedule;
    document.getElementById('tsession').innerHTML = temples[0].session_schedule;
    document.getElementById('tcloser').innerHTML = temples[0].temple_closure_schedule;
  });