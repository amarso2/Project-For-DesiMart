let searchForm=document.querySelector('.search-form');
    document.querySelector('#searchbtn').onclick = () => {
    searchForm.classList.toggle('active');
    login.classList.remove('active');
    menubox.classList.remove('active');
}
let login=document.querySelector('.login-form');
    document.querySelector('#userbtn').onclick = () => {
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    menubox.classList.remove('active');
}

let menubox=document.querySelector('.navbar');
    document.querySelector('#menubtn').onclick = () => {
    menubox.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
}


window.onscroll = () => {
    searchForm.classList.remove('active');
    login.classList.remove('active');
    menubox.classList.remove('active');
}






// code for sign up

// Get form element
const form = document.getElementById('signup-form');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Get user inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // You can perform further validation here
  // For simplicity, let's just log the inputs
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  // Here you can send the data to your backend for further processing
});
