import React from "react";
import { Button } from "../../UI/Button";

export const Landing = () => {
  return (
    <div>
      <h3>landing</h3>
      <p>
        <Button routeLocation={"TimerPage"}>Simple Timer</Button>
        <Button routeLocation={"StopwatchPage"}>Stopwatch</Button>
      </p>
    </div>
  );
};
