import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      Stopwatch
      <div>
        <h1>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
        </h1>
        <div>
          <button onClick={() => setStart(true)}>Start</button>
          <button onClick={() => setStart(false)}>Stop</button>
          <button
            onClick={() => {
              setTime(0);
              setStart(flase);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div>
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};
