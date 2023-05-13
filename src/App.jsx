import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import GuessTheNumber from "./pages/GuessTheNumber";
import TelephoneFormatter from "./pages/TelephoneFormatter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/GuessTheNumber" element={<GuessTheNumber />} />
        <Route path="/TelephoneFormatter" element={<TelephoneFormatter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
