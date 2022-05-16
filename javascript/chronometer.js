class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(fn) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
      if (fn) {
        fn()
      }

    }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }


  computeTwoDigitNumber(value) {
    let time = value
    if (time < 10) {
      time = `0${time}`
    }

    return `${time}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let Minutes = this.computeTwoDigitNumber(this.getMinutes())
    let secondes = this.computeTwoDigitNumber(this.getSeconds())

    return `${Minutes}:${secondes}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
