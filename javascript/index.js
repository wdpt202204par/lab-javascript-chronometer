const chronometer = new Chronometer();

// get the DOM elements that will serve us to display the time:

let btnLeftElement = document.getElementById('btnLeft')
let btnRightElement = document.getElementById('btnRight')

const minDecElement = document.getElementById('minDec'); // minute gauche
const minUniElement = document.getElementById('minUni'); // minute droite
const secDecElement = document.getElementById('secDec'); // secondes gauche
const secUniElement = document.getElementById('secUni'); // secondes droite
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let btnLeftState = false

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftState){ // Si le chrono est demarré -> arrete le chrono
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.innerHTML = "START"

    btnRightElement.setAttribute("class", "btn reset")
    btnRightElement.innerHTML = "RESET"

    chronometer.stop()

    btnLeftState = false
  }else { // Si le chrono est pas demarré -> Demarre le chrono
    btnLeftElement.setAttribute("class", "btn stop")
    btnLeftElement.innerHTML = "STOP"

    btnRightElement.setAttribute("class", "btn split")
    btnRightElement.innerHTML = "SPLIT"

    chronometer.start(function () { // Met à jour le chrono chaque secondes
      minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
      minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]

      secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
      secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
    })

    btnLeftState = true
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnLeftState) { // Si le chrono est demarré -> utilise le split
    let split = document.createElement('li')
    split.innerHTML = chronometer.split()
    splitsElement.appendChild(split)
    
  } else { // Si le chrono n'est pas demarré -> Reset
    chronometer.reset()
    minDecElement.innerHTML = 0
    minUniElement.innerHTML = 0

    secDecElement.innerHTML = 0
    secUniElement.innerHTML = 0

    let splitList = document.getElementById("splits") // Dirige vers le 'ol' de split
    //console.log(splitList.childElementCount)

    for (let i = 0; i < splitList.childElementCount; i++){ // Pour chaque element dans la liste de temps marqués
      splitList.removeChild(splitList.lastChild) // Supprime le dernier element dans la liste
    }
  }
});
