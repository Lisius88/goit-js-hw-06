const btn = document.querySelector("button")
const background = document.querySelector("body")
const span = document.querySelector(".color")

btn.addEventListener("click", onClick)

function onClick(e) {
  const newColor = background.style.backgroundColor = getRandomHexColor()
  span.textContent = newColor
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}

