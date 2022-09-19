const allCategories = document.querySelectorAll('.item')
console.log(allCategories)
console.log(`Number of categories: ${allCategories.length}`)



const categoriesArray = [...allCategories].map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  ).join("\n");
console.log(categoriesArray);


