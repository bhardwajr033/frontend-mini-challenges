import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import GuessTheNumber from "./pages/GuessTheNumber";
import TelephoneFormatter from "./pages/TelephoneFormatter";
import LightAndDarkMode from "./pages/lightAndDarkMode";
import ToastPopUp from "./pages/ToastPopUp";
import CssShapes from "./pages/CssShapes";
import PasswordStrength from "./pages/PasswordStrength";
import StarRating from "./pages/StarRating";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/GuessTheNumber" element={<GuessTheNumber />} />
        <Route path="/TelephoneFormatter" element={<TelephoneFormatter />} />
        <Route path="/LightAndDarkMode" element={<LightAndDarkMode />} />
        <Route path="/ToastPopUp" element={<ToastPopUp />} />
        <Route path="/CssShapes" element={<CssShapes />} />
        <Route path="/PasswordStrength" element={<PasswordStrength />} />
        <Route path="/StarRating" element={<StarRating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
