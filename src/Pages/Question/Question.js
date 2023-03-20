import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Review from "../Review/Review";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  arr,
  correct,
  setScore,
  score,
  setQuestions,
  i,
}) => {
  const questions3 = [];
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleShuffle = (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  };
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      // arr.push(questions[currQues])
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    arr.push(questions[currQues]);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues === 10) {
      // arr.push(questions[currQues])
      navigate("/result");
    }
    // else if (questions[currQues].question === "") {
    // 	setQuestions(handleShuffle(questions));
    // 	setCurrQues(currQues);
    // 	if (1)
    // 		handleNext()
    // }
    else if (selected) {
      console.log(currQues);
      setCurrQues(currQues + 1);
      handleShuffle(questions);
      setSelected();
      // arr.push(questions[currQues])
    } else setError("Please select an option first");
  };
  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h5>Question {currQues} :</h5>

      <div className="singleQuestion ">
        <h5>{questions[currQues].question}</h5>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)} `}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 10 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

// import { Button } from "@material-ui/core";
// import { useState } from "react";
// import { useHistory } from "react-router";
// import "./Question.css";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

// const Question = ({
//   currQues,
//   setCurrQues,
//   questions,
//   options,
//   correct,
//   setScore,
//   score,
//   setQuestions,
// }) => {
//   const [selected, setSelected] = useState();
//   const [error, setError] = useState(false);

//   const history = useHistory();

//   const handleSelect = (i) => {
//     if (selected === i && selected === correct) return "select";
//     else if (selected === i && selected !== correct) return "wrong";
//     else if (i === correct) return "select";
//   };

//   const handleCheck = (i) => {
//     setSelected(i);
//     if (i === correct) setScore(score + 1);
//     setError(false);
//   };

//   const handleNext = () => {
//     if (currQues > 8) {
//       history.push("/result");
//     } else if (selected) {
//       setCurrQues(currQues + 1);
//       setSelected();
//     } else setError("Please select an option first");
//   };

//   const handleQuit = () => {
//     setCurrQues(0);
//     setQuestions();
//   };

//   return (
//     <div className="question">
//       <h1>Question {currQues + 1} :</h1>

//       <div className="singleQuestion">
//         <h2>{questions[currQues].question}</h2>
//         <div className="options">
//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           {options &&
//             options.map((i) => (
//               <button

//                 key={i}
//                 onClick={() => handleCheck(i)}
//                 disabled={selected}
//               >
//                 {i}
//               </button>
//             ))}
//         </div>
//         <div className="controls">
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             style={{ width: 185 }}
//             href="/"
//             onClick={() => handleQuit()}
//           >
//             Quit
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             style={{ width: 185 }}
//             onClick={handleNext}
//           >
//             {currQues > 20 ? "Submit" : "Next Question"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;
