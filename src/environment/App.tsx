import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CookieNotice from "./CookieNotice";
import ConsentModeBanner from "./ConsentModeBanner";
import "../../dist/style.css";
import "./App.styles.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/cookie-notice" element={<CookieNotice />} />
      <Route
        path="/"
        element={
          <ul>
            <li>
              <Link to="/cookie-notice">Cookie Notice</Link>
            </li>
            <li>
              <Link to="/consent-mode-banner">Consent Mode Banner</Link>
            </li>
          </ul>
        }
      />
      <Route
        path="/consent-mode-banner"
        element={
          <>
            <ConsentModeBanner />
            <img
              src="https://images.unsplash.com/photo-1714836999719-86884fbe3ee2"
              alt="placeholder"
              style={{
                width: "100%",
                height: "100svh",
              }}
            />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
