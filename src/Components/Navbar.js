import React from "react";
import { Button, TextField } from "@mui/material";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = ({ setName }) => {
  const [error, setError] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Quiz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/form">
                Create Quiz
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/bookmarklist">
                Admin Panel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
