import React, { useState, useEffect } from 'react';
import './counter.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Counter = ({ limit }) => {
  const [seconds, setSeconds] = useState(limit);
  const [timeLimit, setTimeLimit] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(limit);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    else if (!isActive && (seconds !== 0)) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <div className='counter_sec'>
        <div className="time">
          {seconds}s
        </div>
        <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle} disabled={!seconds}>
            {isActive ? 'Pause' : 'Play'}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className='circle_counter'>
        <CountdownCircleTimer
          size={170}
          strokeWidth={10}
          isPlaying = {isActive && seconds>0}
          duration
          colors={'#A30000'}
        >
        </CountdownCircleTimer>
      </div>
    </div>
  );
};
