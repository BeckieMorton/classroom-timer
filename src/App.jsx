import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
