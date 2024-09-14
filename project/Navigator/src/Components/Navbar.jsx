import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4">
              <NavLink className="text-white text-decoration-none" to="/">Todo
                
              </NavLink>
              <NavLink className="text-white text-decoration-none" to="/display">
               DisplayData
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
