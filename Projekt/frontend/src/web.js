import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./register";
import Login from "./login";
import Weather from "./weather";
import Quote from "./quote";

function web() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/cytat" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default web;