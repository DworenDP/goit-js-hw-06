const list = document.querySelectorAll('.item')

console.log(`Кількість категорій: ${list.length}`)

const ul = document.querySelectorAll('#categories>li')
console.log('🚀 ~ file: task-01.js:10 ~ ul', ul)

ul.forEach((el) => {
    console.log(
        `Категорія: ${el.firstElementChild.textContent}, 
        Кількість елементів: ${el.lastElementChild.children.length}`
    )
})
