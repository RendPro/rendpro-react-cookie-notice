import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieNotice from "./CookieNotice";
import "../../dist/style.css";
import "./App.styles.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/cookie-notice" element={<CookieNotice />} />
      <Route path="/" element={<h1>Index</h1>} />
      <Route path="/consent-mode-banner" element={<h1>Policy</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
