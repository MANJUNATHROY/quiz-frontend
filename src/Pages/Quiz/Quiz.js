import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../Question/Question";
import "./Quiz.css";

const Quiz = ({ name, arr, questions, score, setScore, setQuestions, i }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(1);
  // arr[i++] = [questions[currQues]]
  // console.log(arr)
  //arr.push(questions[currQues]);
  // console.log(arr)
  console.log(questions);
  useEffect(() => {
    // 	// console.log(questions);
    // 	// handleShuffle(questions)
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);
  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);

    // while (1) {// handleShuffle([questions(questions => [...questions].sort(() => Math.random() - 0.5))]);
    // 	option.sort(() => Math.random() - 0.5);
    // 	if (option[currQues]?.question !== "") {
    // 		// arr.push(option[currQues])
    // 		// console.log(arr)
    // 		// console.log(option[currQues].question);
    // 		// changearray(option[currQues])
    // 		return option;
    // 	}
    // }
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome,{name}</span>

      {questions ? (
        <>
          <div className="quizinfo">
            {/* <span>{questions[currQues].category}</span> */}
            <span>Score:{score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            // questions={questions[currQues]?.question !== "" ? questions : handleShuffle(questions)}
            questions={questions}
            options={options}
            arr={arr}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            i={i}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 110 }}
          color="inherit"
          size={120}
          thickeness={2}
        />
      )}
    </div>
  );
};

export default Quiz;
