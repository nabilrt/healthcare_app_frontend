import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import PatientLayout from "./components/layouts/test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/patient/dashboard" element={<PatientLayout path="dashboard" />} />
        <Route exact path="/patient/viewProfile" element={<PatientLayout path="viewProfile" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
