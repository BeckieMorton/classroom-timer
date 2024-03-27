import { Route } from "react-router-dom";
import { TimerPage } from "../pages/TimerPage";
import { Home } from "../pages/Home";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/TimerPage" element={<TimerPage />} />
  </>
);

export default routes;
