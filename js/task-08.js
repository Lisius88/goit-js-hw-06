const form = document.querySelector('form')
form.addEventListener("submit", onSubmit)

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (password.value === '' || email.value === '') {
    alert("Enter your email and password!")
  }

  const objectForValid = {
    email: email.value,
    password: password.value,
  }
  console.log(objectForValid)

  form.reset();
}