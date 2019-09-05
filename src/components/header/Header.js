import React from "react";
import logo from "../../images/bb_logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div>
          <img className="bb-logo" src={logo} alt="Butternut Box Logo" />
        </div>
        <p className="name-title" to="/">
          Wendy Gonzalez
        </p>
      </div>
    </header>
  );
}
