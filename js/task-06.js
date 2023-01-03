let inputEL = document.getElementById('validation-input')

let inputLength = inputEL.dataset.length

const input = document.querySelector('input')
inputEL.addEventListener('change', (e) => {
    const text = e.target.value

    if (text.length === +inputLength) {
        inputEL.classList.add('valid')
        inputEL.classList.remove('invalid')
    } else {
        inputEL.classList.add('invalid')
        inputEL.classList.remove('valid')
    }
})
