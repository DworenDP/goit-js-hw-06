const btnEl = document.querySelector('.change-color')
const outputEl = document.querySelector('.color')
const bodyEl = document.querySelector('body')

btnEl.addEventListener('click', (event) => {
    bodyEl.style.backgroundColor = outputEl.textContent = getRandomHexColor()
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}
