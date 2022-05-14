class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(callback) {
    // ... your code goes here

    const intervalId = setInterval( () => {
      this.currentTime += 1;
    }, 1000);
  }


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }


  computeTwoDigitNumber(value) {
    // ... your code goes here

    
    return `"${this.getMinutes}" ${this.getSeconds}`;

  }
  

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
