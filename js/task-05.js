const input = document.querySelector('input')
console.log(input)
const output = document.querySelector('h1')
console.log(output)
input.addEventListener("input", (e) => {
    output.textContent = e.currentTarget.value;
    if (e.currentTarget.value === '') {
        output.textContent = "Hello, Anonymous!"
    }
})
