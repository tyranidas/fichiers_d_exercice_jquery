fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>{
    console.log(users) 
    displayUsers(users)
  })


function displayUsers(users){
  const div = document.querySelector("#users");
  const tab = document.createElement("table");
  tab.classList.add("table", "table-striped", "table-bordered", "text-center");
  const thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  
 let titresTab = Object.keys(users[0]);
 titresTab.forEach(titre => {
  if (titre != "id")
  {
  const th = document.createElement("th");
  th.innerHTML = `${titre}`
  th.id = titre;
  thead.appendChild(th);
  }
 })
 tab.appendChild(thead);
 const tbody = document.createElement("tbody");
 users.forEach(user => {
  let tr = document.createElement("tr");
  let titresTd = Object.keys(users[0]);
  titresTd.forEach(titre => {
    console.log(titre);
    if (titre != "id")
    {
    let td = document.createElement("td");
      if (titre == "address")
      {
        td.innerHTML = `${user.address.suite} ${user.address.street} ${user.address.zipcode} ${user.address.city}`
      }
      else if (titre == 'company')
      {
        td.innerHTML = `${user.company.name} pouet pouet`;
      }
      else {
        td.innerHTML = user[titre];
      }
     tr.appendChild(td);
  }
  })
    tbody.appendChild(tr);
 })
 

tab.appendChild(tbody);
div.appendChild(tab);
 
}