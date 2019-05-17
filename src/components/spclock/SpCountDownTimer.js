
export const SpCountDownTimer = (spDateTime) => {

  const spCounDownTimer = {};

  let countDownDate = new Date(spDateTime).getTime();
  if(Number.isNaN(countDownDate)){
      throw "Invalid date";
  }
  let today = new Date().getTime();
  let difference = countDownDate - today;

  if(difference < 0){
    throw "Invalid date";
  }else{
    spCounDownTimer.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    spCounDownTimer.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    spCounDownTimer.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    spCounDownTimer.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

return spCounDownTimer;
}

export default {
  SpCountDownTimer
}
