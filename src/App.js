import "./App.css";
import React from "react";
import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Review from "./Pages/Review/Review";
import Result from "./Pages/Result/Result";
import Scoreboard from "./Pages/Scoreboard/Scoreboard";
import Create from "./Pages/Create/Create";
import Createdqn from "./Pages/Createdqn/Createdqn";
import Frm from "./Pages/Form/Form";
import Type from "./Pages/Type/Type";
import Bookmarklist from "./Pages/Bookmarklist/Bookmarklist";
import Navbar from "./Components/Navbar";

function App() {
  const [datas, setDatas] = useState("");
  const i = 0;
  const [arr, setArr] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [qnarray, setQnarray] = useState([]);
  const savedqnarray = [];
  const fetchdata = [];

  const [postData, setPostData] = useState({
    category: "",
    subcategory: "",
    grade: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    reason: "",
    incorrect_answers: [""],
  });

  const handleShuffle = (datas) => {
    // return questions.sort(() => Math.random() - 0.5);
    // handleShuffle([questions(questions => [...questions].sort(() => Math.random() - 0.5))]);
    return datas.sort(() => Math.random() - 0.5);
  };

  const fetchQuestions = async (category, subcategory, data) => {
    {
      data.map((input) => {
        if (input.category === category && input.subcategory === subcategory) {
          fetchdata.push(input);
        }
      });
    }

    console.log(data);
    console.log(fetchdata);
    handleShuffle(fetchdata);
    setQuestions(fetchdata);
  };
  return (
    <div className="app">
      <Navbar />

      <div className="main-app-container">
        <div className="main-container container-fluid">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    name={name}
                    setName={setName}
                    fetchQuestions={fetchQuestions}
                  />
                }
              />
            </Routes>

            <Routes>
              <Route
                path="/quiz"
                element={
                  <Quiz
                    name={name}
                    arr={arr}
                    questions={questions}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                    i={i}
                  />
                }
              />
            </Routes>
            <Routes>
              <Route
                path="/result"
                element={<Result name={name} score={score} />}
              />
            </Routes>
            <Routes>
              <Route
                path="/createquiz"
                element={
                  <Create
                    postData={postData}
                    setPostData={setPostData}
                    qnarray={qnarray}
                  />
                }
              />
            </Routes>
            <Routes>
              <Route
                path="/type"
                element={<Type postData={postData} setPostData={setPostData} />}
              />
            </Routes>
            <Routes>
              <Route
                path="/form"
                element={<Frm postData={postData} setPostData={setPostData} />}
              />
            </Routes>
            <Routes>
              <Route path="/bookmarklist" element={<Bookmarklist />} />
            </Routes>
            <Routes>
              <Route path="/scoreboard" element={<Scoreboard />} />
            </Routes>
            <Routes>
              <Route
                path="/createdqn"
                element={
                  <Createdqn qnarray={qnarray} savedqnarray={savedqnarray} />
                }
              />
            </Routes>
            <Routes>
              <Route path="/review" element={<Review arr={arr} />} />
            </Routes>
          </Router>
          
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
