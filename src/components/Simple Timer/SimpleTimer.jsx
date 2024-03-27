import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const SimpleTimer = () => {
  const [pause, setPause] = useState(false);
  const [num, setNum] = useState(10);

  let intervalRef = useRef();

  const decreaseNum = () => {
    setNum((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        clearInterval(intervalRef.current);
        return 0;
      }
    });
  };

  const startTimer = () => {
    intervalRef.current = setInterval(decreaseNum, 1000);
  };

  useEffect(() => {
    if (!pause) {
      startTimer();
    }
    return () => clearInterval(intervalRef.current);
  }, [pause]);

  const toggleTimer = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  const resetTimer = () => {
    setNum(10);
  };

  return (
    <div>
      <h3>Simple Counter</h3>
      <p>Count down from: </p>
      <input value={num} placeholder="enter number here" type="number" />
      <p>{num}</p>
      <button onClick={toggleTimer}>{pause ? "Start" : "Stop"}</button>
      <button onClick={resetTimer}>Reset</button>
      <button onCLick={startTimer}>Start </button>
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};
