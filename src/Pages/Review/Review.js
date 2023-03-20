// import React from 'react'
// import { useState } from 'react';
import "./Review.css";
import { Button } from "react-bootstrap";
const Review = ({ arr }) => {
  // const [i, setI] = useState(1);
  console.log(arr);
  console.log("hello");
  return (
    <div>
      {arr.map((ques, i) => {
        if (i < 11) {
          return (
            <div className="review-container">
              <div className="review-ques">
                <h5>Question {i + 1}</h5> <p>{ques.question}</p>
              </div>
              {/* {setI(i + 1)} */}
              <div className="review-correct-ans">
                <h5> correct answer :</h5> <p>{ques.correct_answer}</p>
              </div>
              <div className="review-expl">
                <h5>Explanation :</h5> <p>{ques.reason}</p>
              </div>
            </div>
          );
        }
      })}
      <br></br>
      <br></br>
      <div className="review-center">
        <Button href="/">Go to Homepage</Button>
      </div>
    </div>
  );
};

export default Review;
