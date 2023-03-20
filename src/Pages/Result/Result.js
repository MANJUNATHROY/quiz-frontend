import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import "./Result.css";
// import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    user: name,
    score: score,
  });
  const datapost = async (event) => {
    try {
      console.log(data);
      event.preventDefault();
      await axios
        .post("https://quiz-backend-phi.vercel.app/score/postscore", data)
        .then((res) => {
          navigate("/scoreboard");
          // console.log(res)
        });
    } catch (err) {
      console.log(err);
    }
  };
  // const [user, setUser] = useState("")
  // const [category, setCategory] = useState("")
  // const [type, setType] = useState("")
  // const [difficulty, setDifficulty] = useState("")
  // const [question, setQuestion] = useState("")
  // const [correct_answer, setCorrectanswer] = useState("")
  // const [incorrect_answers, setincorrectanswers] = useState([""])
  // setUser({ name })
  // useEffect(() => {
  // if (!name) {
  // 	navigate('/');
  // }
  // }, [name, navigate]);

  const handleScore = async (event) => {
    try {
      setData({ ...data, user: { name } });
      setData({ ...data, score: { score } });
      datapost(event);
      // 		setCategory("")
      // 		setType("")
      // 		setDifficulty("")
      // 		setQuestion("")
      // 		setCorrectanswer("")
      // 		setincorrectanswers("")
      // 		setData({ user, score, category, type, difficulty, question, correct_answer, incorrect_answers })
      // console.log(data);
      // event.preventDefault();
      // await axios.post('http://localhost:8800/post', data)
      // 	.then((res) => {
      // 		// navigate('/scoreboard');
      // 		console.log(res)
      // 	});
    } catch (err) {
      console.log(err);
    }
  };

  function reviewQuestions() {
    navigate("/review");
  }

  return (
    <div className="result">
      <span className="title">Final Score : {score} </span>
      <br></br>
      <Button
        className="bttn"
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <br></br>
      <Button
        className="bttn1"
        variant="contained"
        color="secondary"
        onClick={handleScore}
        size="large"
        style={{ alignSelf: "center", marginTop: 20, padding: 30 }}
      >
        SCORE BOARD
      </Button>
      <Button
        className="bttn1"
        variant="contained"
        color="secondary"
        onClick={reviewQuestions}
        size="large"
        style={{
          alignSelf: "center",
          marginTop: 20,
          marginLeft: 30,
          padding: 30,
        }}
      >
        Review Questions
      </Button>
    </div>
  );
};

export default Result;
