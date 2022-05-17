const chronometer = new Chronometer();

// get the DOM elements that will serve us to display the time:

const btnLeftElement = document.getElementById('btnLeft')
const btnRightElement = document.getElementById('btnRight')

const minDecElement = document.getElementById('minDec'); // minute gauche
const minUniElement = document.getElementById('minUni'); // minute droite
const secDecElement = document.getElementById('secDec'); // secondes gauche
const secUniElement = document.getElementById('secUni'); // secondes droite
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let btnLeftState = false
let startTime
let msTimer

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftState){ // Si le chrono est demarré -> arrete le chrono
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.innerHTML = "START"

    btnRightElement.setAttribute("class", "btn reset")
    btnRightElement.innerHTML = "RESET"

    chronometer.stop()
    clearInterval(msTimer)

    btnLeftState = false
  }else { // Si le chrono est pas demarré -> Demarre le chrono
    btnLeftElement.setAttribute("class", "btn stop")
    btnLeftElement.innerHTML = "STOP"

    btnRightElement.setAttribute("class", "btn split")
    btnRightElement.innerHTML = "SPLIT"

    startTime = new Date().getTime();

    chronometer.start(function () { // Met à jour le chrono chaque secondes
      minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
      minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]

      secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
      secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
    })

    msTimer = setInterval(()=>{
      const endTime = new Date().getTime();
      let calcul = (endTime - startTime).toString()

      milDecElement.innerHTML = calcul[calcul.length - 2]
      milUniElement.innerHTML = calcul[calcul.length - 1]
    },73)

    btnLeftState = true
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnLeftState) { // Si le chrono est demarré -> utilise le split
    const endTime = new Date().getTime();
    let calculMs = (endTime - startTime).toString()
    calculMs = `${calculMs[calculMs.length - 3]}${calculMs[calculMs.length - 2]}${calculMs[calculMs.length - 1]}`
    
    let split = document.createElement('li')
    split.innerHTML = `${chronometer.split()}:${calculMs}`
    splitsElement.appendChild(split)
    
  } else { // Si le chrono n'est pas demarré -> Reset
    chronometer.reset()
    
    minDecElement.innerHTML = minUniElement.innerHTML = secDecElement.innerHTML = secUniElement.innerHTML = milDecElement.innerHTML = milUniElement.innerHTML = 0 // Reset du compteur HTML

    let splitList = document.getElementById("splits") // Dirige vers le 'ol' de split
    let childCount = splitList.childElementCount // Compte le nombre de "li" presente dans la liste "Splits"

    for (let i = 0; i < childCount; i++){ // Pour chaque element dans la liste de temps marqués
      splitList.removeChild(splitList.lastChild) // Supprime le dernier element dans la liste
    }
  }
});
