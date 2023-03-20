// import React from 'react'

// class Form extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: ""
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//  	handleChange(event) {
// 	this.setState({ value: event.target.value });
// }
// handleSubmit(event) {
// 	event.preventDefault();
// }

// render() {
// 	return (
// 		<div className="form">
// 			<form onSubmit={this.handleSubmit}>
// 				<label>Question Text</label>
// 				<textarea value={this.state.value} onChange={this.handleChange} /><br></br>
// 				<label>Option 1</label>
// 				<textarea value={this.state.value} onChange={this.handleChange} /><br></br>
// 				<label>Option 2</label>
// 				<textarea value={this.state.value} onChange={this.handleChange} /><br></br>
// 				<label>Option 3</label>
// 				<textarea value={this.state.value} onChange={this.handleChange} /><br></br>
// 				<label>Option 4</label>
// 				<textarea value={this.state.value} onChange={this.handleChange} /><br></br>
// 				<input type="submit" value="submit" />
// 			</form>
// 		</div>
// 	)
// }

// }

// export default Form

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bookmarklist from "../Bookmarklist/Bookmarklist";
import Categories from "../Categories/Categories";
import React, { useState, useRadioButtons } from "react";
import "./Form.css";

const Frm = ({ postData, setPostData }) => {
  // const [input, getInputvalue] = useRadioButtons("category");
  const navigate = useNavigate();
  // const [filled, setFilled] = useState(false);
  // const dispatch = useDispatch();
  // const navigateHome = () => {
  // 	// 👇️ navigate to /
  // 	navigate('/');
  // };

  // const handleCreate = async (event) => {
  //   try {
  //     event.preventDefault();
  //     await axios
  //       .post("http://localhost:8800/question/postquestion", postData)
  //       .then((res) => {
  //         window.location.reload();
  //       });
  //     // setFilled(!filled);
  //     // const data = { postData }

  //     // dispatch({ type: 'BOOKMARKS', payload: data });
  //     // navigate("/");
  //     // navigate('/bookmarklist')
  //     // console.log(postData);

  //     // axios.post('http://localhost:8800/post', postData);
  //     // let res = fetch("http://localhost:8800", {
  //     // 	method: "POST",
  //     // 	body: JSON.stringify({ postData }),
  //     // }
  //     // );
  //     // let resJson = res.json();
  //     // if (res.status === 200) {
  //     // 	console.log("User created successfully");
  //     // 	console.log(postData);
  //     // } else {
  //     // 	console.log("Some error occured");
  //     // }
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // console.log(event.currentTarget);
  // };

  const handleSubmit = async (event) => {
    try {
      navigate("/type");
      // console.log(postData)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Choose the name of the quiz :</Form.Label>
        <br></br>
        <Form.Control
          name="sub category"
          type="text"
          placeholder="Enter name of quiz"
          onChange={(e) =>
            setPostData({ ...postData, subcategory: e.target.value })
          }
        />
      </Form.Group>

      {/* <div>
        <input
          type="radio"
          name="category"
          id="category"
          checked={input === "Maths"}
          // checked={this.state.category === ""}
          {...getInputvalue}
          onChange={(e) => {
            console.log(getInputvalue)
          }}
          value="Maths"
        />
        Mathematics&nbsp;&nbsp;&nbsp;
        <input type="radio" name="category" id="category" value="General Knowledge" />General Knowledge&nbsp;&nbsp;&nbsp;
        <input type="radio" name="category" id="category" value="Science" />Science
      </div> */}

      <Form.Group className="mb-3">
        <Form.Label>Category :</Form.Label>
        <br></br>
        <Form.Control
          name="category"
          type="text"
          placeholder="Enter category"
          onChange={(e) => {
            setPostData({ ...postData, category: e.target.value });
          }}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label>type :</Form.Label>
        <br></br>
        <Form.Control
          name="type"
          type="text"
          placeholder="Enter type"
          onChange={(e) => setPostData({ ...postData, type: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>difficulty :</Form.Label>
        <br></br>
        <Form.Control
          name="difficulty"
          type="text"
          placeholder="Enter difficulty"
          onChange={(e) =>
            setPostData({ ...postData, difficulty: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>question :</Form.Label>
        <br></br>
        <Form.Control
          name="question"
          type="text"
          placeholder="Enter question"
          onChange={(e) =>
            setPostData({ ...postData, question: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>correct_answer :</Form.Label>
        <br></br>
        <Form.Control
          name="correct_answer"
          type="text"
          placeholder="Enter correct_answer"
          onChange={(e) =>
            setPostData({ ...postData, correct_answer: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Why is it correct ? :</Form.Label>
        <br></br>
        <Form.Control
          name="Why is it correct ?"
          type="text"
          placeholder="Enter the description"
          onChange={(e) => setPostData({ ...postData, reason: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>incorrect_answers :</Form.Label>
        <br></br>
        <Form.Control
          name="incorrect_answers"
          type="text"
          placeholder="Enter incorrect_answers"
          onChange={(e) =>
            setPostData({
              ...postData,
              incorrect_answers: e.target.value.split(","),
            })
          }
        />
      </Form.Group> */}

      {/* <Form.Group className="mb-3">
				<Form.Label>incorrect_answer2 :</Form.Label><br></br>
				<Form.Control name="incorrect_answer2" type="text" placeholder="Enter incorrect_answer2" onChange={(e) => setPostData({ ...postData, incorrect_answers:(e.target.value) })} />
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>incorrect_answer3 :</Form.Label><br></br>
				<Form.Control name="incorrect_answer3" type="text" placeholder="Enter incorrect_answer3" onChange={(e) => setPostData({ ...postData, incorrect_answers: incorrect_answers.push(e.target.value) })} />
			</Form.Group><br></br><br></br> */}
      {/* <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      {/* <span className="span1">
				correct answer :
				<input id="1" type="radio" value="1" name="radio" />1
				<input id="2" type="radio" value="2" name="radio" />2
				<input id="3" type="radio" value="3" name="radio" />3
				<input id="4" type="radio" value="4" name="radio" />4
			</span> */}
      <br></br>
      <br></br>
      <Button className="bttn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Frm;
