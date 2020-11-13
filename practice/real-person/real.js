const requestURL = 'https://pipl.ir/v1/getPerson';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const person = jsonObject['person'];
    const marriage = jsonObject['marriage'];
    const personal = jsonObject['personal'];
    const online= jsonObject['online_info'];
    var list = ['marriage', 'personal', 'online_info'];
    for (let i = 0; i < prophets.length; i++ ) {
        let section = document.createElement('section');
        let p0 = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
    }
});
      