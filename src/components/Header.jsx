import React from "react";
import {
  Button,
  FormControl,
  Form,
  NavDropdown,
  Nav,
  NavLink,
  Container,
  NavbarBrand,
} from "react-bootstrap";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">LoopLAB</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Explore</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Create</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Share</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
