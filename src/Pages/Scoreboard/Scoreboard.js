import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Scoreboard.css";
import Table from "react-bootstrap/Table";

const Scoreboard = () => {
  const [data, setData] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  function handledata() {
    if (data.user === "") {
      return 0;
    }
    return 1;
  }
  useEffect(() => {
    axios.get(`https://quiz-backend-phi.vercel.app/score/score`).then((response) => {
      setShowLoading(true);
      setData(response.data);
    });
  }, []);
  return (
    <div>
      {showLoading ? (
        <div className="scoreboard-main-container">
          <div className="score-head-row">
            <div className="score-column">Name</div>
            <div className="score-column">Score</div>
          </div>
          <div className="scoreboard-score">
            {" "}
            {data.map((dat) => {
              if (dat.user !== "") {
                return (
                  <div className="score-row">
                    <div className="score-column">{dat.user}</div>
                    <div className="score-column">{dat.score}</div>
                  </div>
                );
              }
            })}
          </div>
          <div className="scoreboard-button-container">
            <Button
              className="btn"
              variant="contained"
              color="secondary"
              size="large"
              style={{ alignSelf: "center", marginTop: 20 }}
              href="/"
            >
              Go to homepage
            </Button>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>

    // <Button className="btn"
    // 	variant="contained"
    // 	color="secondary"
    // 	size="large"
    // 	style={{ alignSelf: "center", marginTop: 20 }}
    // 	href="/"
    // >Go to homepage</Button>

  );
};

export default Scoreboard;
