// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// window.onload = function () {
//     var duration = 60 * 5; // Converter para segundos
//         display = document.querySelector('#timer'); // selecionando o timer
//     startTimer(duration, display); // iniciando o timer
// };

const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countDown');

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`january 25 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

console.log('data', hoursContainer)


const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds)
    minutesContainer.textContent = getTimeUnit(minutes)
    hoursContainer.textContent = getTimeUnit(hours)
    daysContainer.textContent = getTimeUnit(days)
}

const updateCountdow = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countDownContainer.style.display = 'flex'
}

setInterval(updateCountdow, 1000)