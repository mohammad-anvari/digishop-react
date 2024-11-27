import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Incredibleoffers from "../Incredibleoffers/Incredibleoffers";

const App = () => {
  return (
    <>
      <div className="fs mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Incredible-offers" element={<Incredibleoffers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
