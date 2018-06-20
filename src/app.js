const btn = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progreso = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'

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
    for (let i  in  progreso) {
       progreso[i];
    }
    return render + progreso ;
  });
}; 
// hacer variable para que carguen todas las promesas juntas con un if y && 
