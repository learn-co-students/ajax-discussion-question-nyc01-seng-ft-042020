const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


const button = document.querySelector("body > div > div.row.align-items-end > div:nth-child(2) > button");

button.addEventListener("click", function(){
  fetch('https://randomuser.me/api/').then(function(response){
    return response.json();
  }).then(function(json){


  document.getElementById("fullname").textContent =  json['results'][0]['name']['first'] + json['results'][0]['name']['last'];

    console.log(json['results'][0]['name']['first'])
  })

})