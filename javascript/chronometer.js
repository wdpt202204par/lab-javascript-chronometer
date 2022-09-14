class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback()
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60; // rest of the division by 60
  }
  computeTwoDigitNumber(num) {
    if (num < 10) {
      return `0${num}`; // add a 0
    } else {
      return `${num}`;  // just convert to a string
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());

    return `${mm}:${ss}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}