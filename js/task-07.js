const textEl = document.getElementById('text')

const sizeEl = document.getElementById('font-size-control')

sizeEl.addEventListener('input', (e) => {
    const size = sizeEl.value

    textEl.style.fontSize = size + 'px'
})
