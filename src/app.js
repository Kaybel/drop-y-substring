const btn = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
.then (response => response.json())
.then(data => {
  console.log(data);
  renderUsers(data);
})


const renderUsers = data => {
  btn.addEventListener('click', () => {
    // forIn recorre objetos y accede a las propiedades
    // for y forEach recorre arrays
    const render = data.forEach(element => {
      return container.innerHTML += `<p>${element.name.toUpperCase()}</p>`
    });
    return render;
  });
}; 
