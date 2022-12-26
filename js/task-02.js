const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
]

const ulEL = document.querySelector('#ingredients')

const list = ingredients.reduce((str, item) => str + `<li>${item}<li>`, '')

ulEL.innerHTML = list
