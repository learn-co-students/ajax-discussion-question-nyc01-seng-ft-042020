const fullname = document.getElementById('fullname');
console.log('CONTENT NOT YET LOADED!', fullname); // what will fullname evaluate to?
document.addEventListener('DOMContentLoaded', () => {
  const nameHeader = document.querySelector('#fullname');
  const emailHeader = document.querySelector('#email');
  const dobHeader = document.querySelector('#date_of_birth');
  const streetHeader = document.querySelector('#street');
  const cityHeader = document.querySelector('#city');
  const stateHeader = document.querySelector('#state');
  const postCodeHeader = document.querySelector('#postcode');
  const phoneHeader = document.querySelector('#phone');
  const image = document.querySelector('#profile_picture');
  console.log('CONTENT LOADED!');
  const data = fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results[0]);
      const { name } = data.results[0];
      const { email } = data.results[0];
      const { dob } = data.results[0];
      const { location } = data.results[0];
      const { phone } = data.results[0];
      const { picture } = data.results[0];
      nameHeader.textContent = `${name.title} ${name.first} ${name.last}`;
      emailHeader.textContent = `${email}`;
      dobHeader.textContent = dob.date;
      streetHeader.textContent = `${location.street.number} ${location.street.name}`;
      cityHeader.textContent = location.city;
      stateHeader.textContent = location.state;
      postCodeHeader.textContent = location.postcode;
      phoneHeader.textContent = phone;
      image.src = picture.large;
    });
});
