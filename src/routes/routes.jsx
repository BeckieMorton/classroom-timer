import { Route } from "react-router-dom";
import { TimerPage } from "../pages/TimerPage";
import { Stopwatch } from "../components/Stopwatch/Stopwatch";
import { Home } from "../pages/Home";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/TimerPage" element={<TimerPage />} />
    <Route path="/StopwatchPage" element={<Stopwatch />} />
  </>
);

export default routes;
