const button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value")
}

let totalValue = 0;
const increment = (evt) => {
    totalValue += 1
    button.span.textContent = totalValue;
};
const decrement = (evt) => {
    totalValue -= 1

    button.span.textContent = totalValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);



