
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;    
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      
      this.currentTime++;      

      if (printTimeCallback) printTimeCallback();
      if (this.currentTime > 3599) clearInterval(this.intervalId);

    }, 1000)    
   }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);    
  }

  getSeconds() {
    return this.currentTime % 60;    
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;    
  }
}
