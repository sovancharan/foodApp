import React, { useState, useEffect } from "react";

const SalesTimer = () => {
 let endDate = new Date("2023-11-31T23:59:59");
 const calculateTimeRemaining = () => {
  const now = new Date();
  const targedivate = new Date(endDate);

  const timeDiff = targedivate - now;

  if (timeDiff <= 0) {
   // Sale has ended
   return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
   };
  }

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
   days: String(days).padStart(2, '0'),
   hours: String(hours % 24).padStart(2, "0"),
   minutes: String(minutes % 60).padStart(2, "0"),
   seconds: String(seconds % 60).padStart(2, "0"),
  };
 };

 const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

 useEffect(() => {
  const timer = setInterval(() => {
   setTimeRemaining(calculateTimeRemaining);
  }, 1000);

  return () => clearInterval(timer); // Cleanup the timer on component unmount
 }, [endDate]); // Re-run useEffect when the endDate changes

 return (
  <div className="salesTimerMainDiv"
  // style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}
  >
   {/* <table style={{ width: '100%' }}> */}
   {/* <thead> */}
   <div className="row timerHeading">
    <div className="col-3" >Days</div>
    <div className="col-3">Hours</div>
    <div className="col-3">Minutes</div>
    <div className="col-3">Seconds</div>
   </div>
   {/* </thead> */}
   {/* <tbody> */}
   <div className="row timerValueMainDiv">
    <div className="col-3 "><span className="timerValue"> {timeRemaining.days}</span></div>
    <div className="col-3 "> <span className="timerValue">{timeRemaining.hours}</span></div>
    <div className="col-3 "> <span className="timerValue">{timeRemaining.minutes}</span></div>
    <div className="col-3 "> <span className="timerValue">{timeRemaining.seconds}</span></div>
   </div>
   {/* </tbody> */}
   {/* </table> */}
  </div>
 );
};

export default SalesTimer;
