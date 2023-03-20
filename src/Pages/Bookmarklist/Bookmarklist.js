import React from "react";
// import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Form from "react-bootstrap/Form";
import "./Bookmarklist.css";
import { useEffect, useState } from "react";
import frm from "../Form/Form";
import axios from "axios";
import { blue } from "@mui/material/colors";
// import { SendTimeExtensionSharp } from "@mui/icons-material";
// import BookmarkCard from "../Form/bookmarkcard";
// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max);
// }

let x = 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Bookmarklist = () => {
  const [data, setData] = useState("");
  const [category, setCategory] = useState("");
  const [flag, setFlag] = useState(0);
  const [subcategory, setSubCategory] = useState("");
  const [noduplicatecat, setNoDuplicatecat] = useState("");
  const [noduplicatesubcat, setNoDuplicatesubcat] = useState("");
  const arr = [];
  const [showLoading, setShowLoading] = useState(false);
  const [cat, setCat] = useState("");
  // let timer = setTimeout(() => setShowLoading(true), 1000)
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://quiz-backend-phi.vercel.app/question/question`).then((response) => {
      //console.log(response.data)
      setShowLoading(true);
      setData(response.data);
      console.log(response.data);
      const cats = response.data.map((q) => q.category);
      console.log(cats);
      const withoutDuplicatescat = [...new Set(cats)];
      setNoDuplicatecat(withoutDuplicatescat);
      // if(response.data.category===category){
      // 	arr.push(response.data.subcategory)
      // }
      // console.log(arr)
      // clearTimeout(timer)
      // setTimeout(setData, 1000)
    });
  }, []);
  // const [loading, setLoading] = useState(false)
  function handleHome() {
    navigate("/");
  }
  const handleDelete = (item) => {
    console.log(item);
    // setLoading(true)
    axios.delete("https://quiz-backend-phi.vercel.app/question/" + item)
      .then((res) => {
        // setLoading(false)
        window.location.reload();
      });

    // { loading && window.location.reload() }
  };

  return (
    <div>
      {showLoading ? (
        <div>
          {/* <Form.Group className="mb-3">
						<Form.Label>category :</Form.Label><br></br>
						<Form.Control name="category" type="text" placeholder="Enter category" />
					</Form.Group> */}
          <div className="main-booklist-container">
            <div className="bookmarklist-dropdown">
              <TextField
                className="dropdown"
                select
                label="Select Category"
                value={cat}
                onChange={(e) => {
                  setCat(e.target.value);
                  {
                    data.map((subcat) => {
                      if (subcat.category === e.target.value) {
                        arr.push(subcat.subcategory);
                      }
                    });
                  }
                  setCategory([...new Set(arr)]);
                }}
              >
                {noduplicatecat.map((cat) => {
                  if (cat !== "") {
                    return (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    );
                  }
                })}
              </TextField>

              <TextField
                className="dropdown"
                select
                label="Select subcategory"
                value={subcategory}
                onChange={(e) => {
                  setSubCategory(e.target.value);
                  setFlag(1);
                }}
              >
                {/* const withoutDuplicatessubcat = [...new Set(arr)];
							console.log(withoutDuplicatessubcat) */}
                {category.length &&
                  category.map((subcat) => {
                    if (subcat !== "") {
                      return (
                        <MenuItem key={subcat} value={subcat}>
                          {subcat}
                        </MenuItem>
                      );
                    }
                  })}
              </TextField>
            </div>
          </div>
          {/*
					<Form.Group className="mb-3">
						<Form.Label>sub category :</Form.Label><br></br>
						<Form.Control name="sub category" type="text" placeholder="Enter sub category" onChange={(e) => setPostData(e.target.value)} />
					</Form.Group> */}
          <div className="main-booklist-container">
            {data.map((dat) => {
              if (flag === 1) {
                if (dat.subcategory === subcategory) {
                  return (
                    <div className="question-box">
                      <div className="ques">
                        <h2>{dat.question}</h2>
                      </div>
                      <div className="ans">
                        <div className="corr-ans">{dat.correct_answer}</div>
                        <div>
                          {" "}
                          {dat.incorrect_answers.map((incorrect) => (
                            <div className="incorr-ans"> {incorrect}</div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <button
                          className="bookmark-btn"
                          onClick={() => handleDelete(dat._id)}
                        >
                          Delete This Question
                        </button>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="home-btn">
        <button className="go-to-home" onClick={handleHome}>
          Go To Homepage
        </button>
      </div>
    </div>
  );
};

// console.log(data);
// let {state} = useLocation();
// console.log(state.data)
// return (
// 	<div>
{
  /* <p>{state.data.category}</p>
      {data.map((dat) =>
      (
        <Col span={4} className="p-4">
          <h2>{dat.question}</h2>
          <p>correct_answer: {dat.correct_answer}</p>
          <p>incorrect_answers: {dat.incorrect_answers}</p>
        </Col>
      )
      )} */
}

// </div>

// </Container>,

export default Bookmarklist;
