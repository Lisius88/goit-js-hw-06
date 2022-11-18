const input = document.querySelector("input")
let totalLenght = input.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

input.addEventListener("blur", () => {
  if (input.value.length === intTotallenght) {
    input.classList.remove("invalid")
    input.classList.add("valid")
  }
  if (input.value.length !== intTotallenght) {
    input.classList.remove("valid")
    input.classList.add("invalid")
  }
})
