const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
]

// створюю пустий масив списку ulEL з id="ingredients"
const ulEL = document.querySelector('#ingredients')

// за допомогою методу reduce розбираю масив ingredients на елементи та укладаю
// кожен елемент масиву за допомогою шаблонної строки в елементи списку
const list = ingredients.reduce((str, item) => str + `<li>${item}<li>`, '')

// за допомогою властивості innerHTML додаю список елементів в DOM-дерево
ulEL.innerHTML = list
