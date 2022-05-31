import "./App.css";
import React, { useState } from "react";

const App = () => {
  const futureDate = new Date("10 Apr 2023");
  const currentDate = new Date();
  const distance = (futureDate - currentDate) / 1000;

  const [timer, setTimer] = useState(distance);
  const [counter, setCounter] = useState(0);

  const days = Math.floor(distance / 3600 / 24);
  const hours = Math.floor(timer / 3600) % 24;
  const minutes = Math.floor(timer / 60) % 60;
  const seconds = Math.floor(timer) % 60;

  const handleStopStart = (action) => {
      if(action === 'start') {
        setCounter(
          setInterval(() => {
            setTimer((timer) => timer - 1);
          }, 1000)
        );
      }
      else if(action === 'stop') {
        if (counter) {
          clearInterval(counter);
        }
        setCounter(0);
      }
  };
  return (
    <div className="body">
      <div className="App">
        <h1>CountDown</h1>
        <div className="timer">
          <p>{days<10 ? '0'+days : days}</p>
          <p>:</p>
          <p>{hours<10 ? '0'+hours : hours}</p>
          <p>:</p>
          <p>{minutes<10 ? '0'+minutes: minutes}</p>
          <p>:</p>
          <p>{seconds<10 ? '0'+seconds: seconds}</p>
        </div>
        {
          counter ? 
          (<button onClick={() => handleStopStart('stop')}>Stop</button>) :
        (<button onClick={() => handleStopStart('start')}>Start</button>)
        }
      </div>
    </div>
  );
};

export default App;
