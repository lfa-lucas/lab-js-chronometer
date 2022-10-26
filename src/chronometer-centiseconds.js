
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      
      this.currentTime++;      

      if (printTimeCallback) printTimeCallback();
      if (this.currentTime > 359990) clearInterval(this.intervalId);

    }, 10)    
   }  

  getMinutes() {
    return Math.floor(this.currentTime / 6000);    
  }

  getSeconds() {
    return (Math.floor(this.currentTime / 100) % 60);    
  }

  getCentiseconds() {
    return (this.currentTime % 100);
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
    let cents = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${cents}`;    
  }
}
