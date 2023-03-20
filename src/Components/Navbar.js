import React from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = () => {

  const navigate=useNavigate();

  const [error, setError] = useState(false);
  function navigatehome(){
    navigate("/")
  }
  const navigateform=(e)=>{
    console.log("Hello")
    navigate("/form")
    e.preventDefault();
  }

  function navigatebookmark(e){
  //  e.preventDefault();

    navigate("/bookmarklist")
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Button className="navbar-brand">
          Quiz
        </Button>
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
              <Button className="nav-link" aria-current="page" onClick={navigatehome}>
                Home
              </Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" onClick={navigateform}>
                Create Quiz
              </Button>
            </li>

            <li className="nav-item">
              <Button className="nav-link" onClick={navigatebookmark}>
                Admin Panel
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
