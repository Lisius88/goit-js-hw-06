const button = {
    inc: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value")
}
console.log(button.span.textContent)
button.inc.addEventListener("click", onClickInc)
button.add.addEventListener("click", onClickAdd)

let value = 0
console.log(value)

function onClickAdd(e) {
    value -= 1
    button.span.textContent = value
}
function onClickInc(e) {
        value += 1
    button.span.textContent = value
}



