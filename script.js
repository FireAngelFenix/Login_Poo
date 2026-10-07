const form = document.getElementById('login');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const status = document.getElementById('status');
const btn = document.getElementById('submit');

document.getElementById('toggle').addEventListener('click', e => {
  const show = pass.type === 'password';
  pass.type = show ? 'text' : 'password';
  e.currentTarget.textContent = show ? 'Ocultar' : 'Mostrar';
  e.currentTarget.setAttribute('aria-pressed', show);
});

function setError(input, msg){
  document.getElementById(input.id + '-err').textContent = msg;
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}

function validate(){
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const a = setError(email, email.value.trim() === '' ? 'Escribe tu correo electrónico.'
    : emailOk ? '' : 'Ingresa un correo válido, por ejemplo nombre@ejemplo.com.');
  const b = setError(pass, pass.value === '' ? 'Escribe tu contraseña.'
    : pass.value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres.' : '');
  return a && b;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  status.textContent = ''; status.className = 'status';
  if(!validate()) return;
  btn.disabled = true; btn.textContent = 'Iniciando sesión…';
  // Demostración: aquí iría la llamada a tu servidor (fetch a tu API).
  setTimeout(() => {
    btn.disabled = false; btn.textContent = 'Iniciar sesión';
    status.textContent = 'Sesión iniciada (demostración, sin servidor).';
    status.classList.add('ok');
  }, 900);
});

[email, pass].forEach(i => i.addEventListener('input', () => setError(i, '')));
