import React, { useState } from "react";
import "../CSS/Navbar.css";
import logo from "../Images/logo4.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navtext">
        CONTROLLER OF EXAMINATIONS
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/circular">Circular</a>
        <a href="/new">Question Bank</a>
        {/* <a href="/timetable">Time Table</a> */}
        <a href="/contact">Contact</a>
        <a href="/adminlogin">Admin</a>
        <a href="/timetable"></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
