import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Orange from "./Orange";
import Yellow from "./Yellow";
import Green from "./Green";
import Indigo from "./Indigo";
import Violet from "./Violet";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/red" element={<Red />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/indigo" element={<Indigo />} />
        <Route path="/violet" element={<Violet />} />
      </Routes>
    </div>
  );
}
