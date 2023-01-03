let valueEl = Number(document.querySelector('#value').textContent)

let counterValue = document.querySelector('#value')

const dekrBtn = document.querySelector('#counter').firstElementChild
const inkrBtn = document.querySelector('#counter').lastElementChild

inkrBtn.addEventListener('click', () => {
    valueEl += 1

    counterValue.innerText = valueEl
})

dekrBtn.addEventListener('click', () => {
    valueEl -= 1

    counterValue.innerText = valueEl
})
