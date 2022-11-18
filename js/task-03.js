const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector("ul")
console.log(list)
function createMarkup() {
  const markup = images.map(image => {
    const { url, alt } = image;
    return `<li><img src=${url} alt=${alt} width="400px" height="300px"></li>`
  }).join('')
  list.insertAdjacentHTML("beforeend", markup)
}
createMarkup()
list.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-around;")