const requestURL = 'https://www.ahfx.com/person.php';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const person = jsonObject['person'];
    const marriage = person['marriage'];
    const personal = person['personal'];
    const online = person['online_info'];
    
    let card1 = document.createElement('section');
    let h2 = document.createElement('h2');
    let eye = document.createElement('p');
    let password  = document.createElement('p');
    let email = document.createElement('p');
    let city = document.createElement('p');
    let children = document.createElement('p');
    let ip = document.createElement('p');

    card1.appendChild(h2);
    card1.appendChild(eye);
    card1.appendChild(password);
    card1.appendChild(email);
    card1.appendChild(city);
    card1.appendChild(children);
    card1.appendChild(ip);
    
    h2.textContent = personal.name;
    h2.textContent = personal.last_name;
    document.querySelector(div.card).appendChild(card1);
});
      