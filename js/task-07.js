let input = document.querySelector("input")
let span = document.querySelector("span")

input.addEventListener("input", () => {
    console.log(input.value)
    span.style.fontSize = input.value + "px";
})
