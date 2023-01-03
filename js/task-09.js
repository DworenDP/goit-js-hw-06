function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const bodyEl = document.querySelector('body')

const color = getRandomHexColor()

const buttonColor = document.querySelector('.change-color')
console.log(buttonColor)
buttonColor.addEventListener('click', changecolor)

const spanColor = document.querySelector('.color')
console.log(spanColor)
spanColor.textContent = color

bodyEl.style.backgroundColor = color

function changecolor() {
    bodyEl.style.backgroundColor = color
    spanColor.textContent = color
    const color = getRandomHexColor()
    bodyEl.style.backgroundColor = getRandomHexColor()
}
