import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";

import "./App.css";
import MainContainer from "./components/MainContainter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <h1 className="heading">Hello React Router!</h1>
      <NavBar />
      <MainContainer />

      <Footer />
    </div>
  );
}

export default App;
