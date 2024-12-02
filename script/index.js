// index.js

const Input = document.getElementById('enter')
const select = document.getElementById('numb')
const button = document.getElementById('basebutton')
const paragrah = document.getElementById('result')
const restartButton = document.getElementById('restartbutton')

button.addEventListener('click', () => {
    const numberr = parseInt(Input.value, 10)
    const secondNumber = parseInt(select.value, 10)
    if (isNaN(numberr)) {
        paragrah.textContent = 'enter a valid base number'
        paragrah.style.color = 'red'
        return
    }

    const convertNum = numberr.toString(secondNumber)

    paragrah.textContent = `${numberr} to base ${secondNumber} is ${convertNum}`

})
