const password = document.getElementById('password');
const repeat = document.getElementById('re-password');
const button = document.querySelector('.createBtn');
const notMatching = document.querySelector('.not-matching');

let passwordText = "";
let repeatText = "";

password.addEventListener('input', (e) =>{
    passwordText = e.target.value
})

repeat.addEventListener('input', (e) =>{
    repeatText = e.target.value;
})

button.addEventListener('click', (event) =>{
    if(passwordText !== repeatText){
        console.log('not matching');
        event.preventDefault();
    }
})

