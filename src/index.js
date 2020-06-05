const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const button = document.getElementsByClassName("btn-primary")[0]
console.log(button)

const name = document.getElementById('fullname')
const email = document.getElementById('email')
const street = document.getElementById('street')

function assignData(json) {
  const person = json['results'][0]
  name.innerText = person['name']['title'] + ' ' + person['name']['first'] + ' ' + person['name']['last']
}

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => assignData(json) )
}

button.addEventListener('click', fetchData)

fetchData()

