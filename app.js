let password1 = document.getElementById('password-1');
let password2 = document.getElementById('password-2');
let password3 = document.getElementById('password-3');
let password4 = document.getElementById('password-4');
let password;

let btnEl = document.getElementById('btn-el');

function generatePassword() {
  let chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*=?()ABCDEFGHIJKLMNOPQRSTUVWXYZ!';
  password = '';
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

function displayPassword() {
  generatePassword();
  password1.value = password;
  generatePassword();
  password2.value = password;
  generatePassword();
  password3.value = password;
  generatePassword();
  password4.value = password;
}

btnEl.addEventListener('click', displayPassword);
