class Chronometer {
  constructor() {
    this.currentTime  = 0;
    this.intervalId   = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1);
  }

  getMinutes() {
    const minutes = this.currentTime / (60 * 1000);   // '* 1000' because of Iteration #5 (counting in milliseconds instead of seconds)
    const rounded = Math.floor(minutes);

    return rounded;
  }

  getSeconds() {
    const currentSeconds = Math.floor(this.currentTime / 1000) % 60; // '/ 1000': same as getMinutes()

    return currentSeconds;
  }

  // Extra function to get hundredths of seconds (iteration #5)
  getHundredths() {
    const currentHundredthOfSecond = Math.floor(this.currentTime / 10) % 100;

    return currentHundredthOfSecond;
  }

  computeTwoDigitNumber(value) {
    let result = String(value);

    if (result.length === 1){
      return `0${result}`;
    }

    return String(value);
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

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
