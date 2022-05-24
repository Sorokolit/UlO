const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

// ДЗ
const colors = ['#e1ff00', '#99ff00', '#00ffb3', '#02572f', '#445702']


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        // console.log(event.target)
        // console.log(event.target.getAttribute('data-time'))
        time = parseInt(event.target.getAttribute('data-time'))
        // console.log(time)
        screens[1].classList.add('up')
        statrGame()

    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        //console.log(event.target)
        event.target.remove()
        createRandomCircle()

    }
})

function statrGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${time}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    /*const coordinates = board.getBoundingClientRect()
    console.log(coordinates)*/
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    // ДЗ
    const color = getRandomColor()

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    // ДЗ
    circle.style.background = `${color}`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
    return colors[Math.floor(Math.random() * colors.length)]
}

// ДЗ
function getRandomColor() {
    // return colors[Math.floor(Math.random() * colors.length)]
}

