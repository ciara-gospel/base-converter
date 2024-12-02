// index.js

const Input = document.getElementById('enter')
const select = document.getElementById('num')
const button = document.getElementById('basebutton')
const paragrah = document.getElementById('result')
const restartButton = document.getElementById('restartbutton')

button.addEventListener('click', () => {
  const number = parseInt(Input.value, 10)
  const secondNumber = parseInt(select.value, 10)
  if (isNaN(number)) {
    paragrah.textContent = 'enter a valid base number'
    paragrah.style.color = 'red'
    return
  }

    const convertNum = number.toString(secondNumber)

    paragrah.textContent = `${number} to base ${secondNumber} is ${convertNum}`

})