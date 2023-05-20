import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employee" element={<Employee />} />
        </Routes>
    </div>
  );
}
