const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector('.btnbtn-primary')
  const picture = document.querySelector('#profile_picture')
  const fullname = document.querySelector('#fullname')
  const email = document.querySelector('#email')
  const street = document.querySelector('#street')
  const ctiy = document.querySelector('#city')
  const state = document.querySelector('#state')
  const postcode = document.querySelector('#postcode')
  const phone = document.querySelector('#phone')
  const cell = document.querySelector('#cell')
  const date_of_birth = document.querySelector('#date_of_birth')


  button.addEventListener('click', function(e){
    let data = fetch('https://randomuser.me/api/')
        .then( res => res.json() )
        .then( json => profile(json) )
    
    function profile(info) {
      picture.src = info.results[0].picture.thumbnail
      fullname.textContent = info.results[0].name.first + " " + info.results[0].name.last
      email.textContent = info.results[0].email
      street.textContent = info.results[0].location.street.number + " " + info.results[0].location.street.name
      city.textContent = info.results[0].location.city
      state.textContent = info.results[0].location.state
      postcode.textContent = info.results[0].location.postcode
      phone.textContent = info.results[0].phone
      cell.textContent = info.results[0].cell
      date_of_birth.textContent = info.results[0].dob.date
      

      

    }
  })



});

