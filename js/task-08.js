const form = document.querySelector("form")
console.dir(form)
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
  return alert("Всі поля мають бути заповнені")
  }
  const formData = new FormData(event.currentTarget)
  formData.forEach((value, name) => {
  })
  const formObject = {
    email: email.value,
    password: password.value,
  }
  console.log(formObject)
}
