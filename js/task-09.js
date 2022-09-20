function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}

const fone = document.querySelector("body")
const button = document.querySelector("button")
const text = document.querySelector("span")
console.log(fone)
console.log(button)
console.log(text)
button.addEventListener("click", changeColor)

function changeColor() {
  const newColor = fone.style.backgroundColor = getRandomHexColor();

  text.textContent = newColor;
}


