class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (arguments.length > 0) {
      callback();
    }
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    const rounded = Math.floor(minutes);

    return rounded;

  }

  getSeconds() {
    const currentSeconds = this.currentTime % 60;

    return currentSeconds;
  }

  computeTwoDigitNumber(value) {
    let result = String(value)
    if (result.length === 1){
      return `0${result}`;
    }

    return String(value)
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const strMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const strSeconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${strMinutes}:${strSeconds}`;
  }
}

document.querySelectorAll(".number").forEach(element => element.innerHTML = "X");


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
