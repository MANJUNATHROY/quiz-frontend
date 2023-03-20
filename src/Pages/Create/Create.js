import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import "./Create.css";
const Create = ({ postData, setPostData, qnarray }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    selectedFile: [],
  });
  // const fileSelectedHandler = (event) => {
  //   setState({
  //     ...state,
  //     selectedFile: event.target.files[0],
  //   });
  //   // console.log(state)
  // };

  // const fileuploadhandle = () => {
  //   const formdata = new FormData();
  //   formdata.append("testImage", state.selectedFile, state.selectedFile.name);
  //   console.log(formdata);
  //   axios.post("https://quiz-backend-phi.vercel.app/upload", formdata).then((res) => {
  //     console.log(res);
  //   });
  // };
  const handleCreate = async (event) => {
    qnarray.push(postData);
    navigate("/createdqn");
    try {
      event.preventDefault();
      await axios
        .post("https://quiz-backend-phi.vercel.app/question/postquestion", postData)
        .then((res) => {
          // window.location.reload();

          console.log(qnarray);
          // navigate('/createdqn')
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <Form>
    // 	<Form.Group className="mb-3">
    // 		<Form.Label>difficulty :</Form.Label>
    // 		<br></br>
    // 		<Form.Control
    // 			name="difficulty"
    // 			type="text"
    // 			placeholder="Enter difficulty"
    // 			onChange={(e) =>
    // 				setPostData({ ...postData, difficulty: e.target.value })
    // 			}
    // 		/>
    // 	</Form.Group>

    // 	<Form.Group className="mb-3">
    // 		<Form.Label>question :</Form.Label>
    // 		<br></br>
    // 		<Form.Control
    // 			name="question"
    // 			type="text"
    // 			placeholder="Type your Question here"
    // 			onChange={(e) =>
    // 				setPostData({ ...postData, question: e.target.value })
    // 			}
    // 		/>
    // 	</Form.Group>

    // 	<Form.Group className="mb-3">
    // 		<Form.Label>correct_answer :</Form.Label>
    // 		<br></br>
    // 		<Form.Control
    // 			name="correct_answer"
    // 			type="text"
    // 			placeholder="Enter correct_answer"
    // 			onChange={(e) =>
    // 				setPostData({ ...postData, correct_answer: e.target.value })
    // 			}
    // 		/>
    // 	</Form.Group>
    // 	<Form.Group className="mb-3">
    // 		<Form.Label>Why is it correct ? :</Form.Label>
    // 		<br></br>
    // 		<Form.Control
    // 			name="Why is it correct ?"
    // 			type="text"
    // 			placeholder="Enter the description"
    // 			onChange={(e) => setPostData({ ...postData, reason: e.target.value })}
    // 		/>
    // 	</Form.Group>

    // 	<Form.Group className="mb-3">
    // 		<Form.Label>incorrect_answers :</Form.Label>
    // 		<br></br>
    // 		<Form.Control
    // 			name="incorrect_answers"
    // 			type="text"
    // 			placeholder="Enter incorrect_answers"
    // 			onChange={(e) =>
    // 				setPostData({
    // 					...postData,
    // 					incorrect_answers: e.target.value.split(","),
    // 				})
    // 			}
    // 		/>
    // 	</Form.Group>
    // </Form>
    <section>
      <div className="major">
        <label>Grade :</label>
        <br></br>
        <input
          type="text"
          name="Grade"
          placeholder="enter Class"
          onChange={(event) =>
            setPostData({ ...postData, grade: event.target.value })
          }
          id="difficulty"
        />
        <br></br>
        <br></br>
        <label>Difficulty :</label>
        <br></br>
        <input
          type="text"
          name="difficulty"
          placeholder="enter difficulty level"
          onChange={(event) =>
            setPostData({ ...postData, difficulty: event.target.value })
          }
          id="difficulty"
        />
        <br></br>
        <br></br>
        {/* <label>Upload Image :</label>
        <br></br>
        <input type="file" name="image" onChange={fileSelectedHandler} />
        <br></br>
        <Button onClick={fileuploadhandle} className="bttn">
          Upload
        </Button> */}
        <br></br>
      </div>
      <div className="minor">
        <label>Question :</label>
        <br></br>
        <input
          type="text"
          name="question"
          placeholder="type your question here"
          onChange={(event) =>
            setPostData({ ...postData, question: event.target.value })
          }
          id="question"
        />
        <br></br>
        <br></br>
        <label>Correct Answer :</label>
        <br></br>
        <input
          type="text"
          name="correct_answer"
          placeholder="enter correct answer"
          onChange={(event) =>
            setPostData({ ...postData, correct_answer: event.target.value })
          }
          id="correct_answer"
        />
        <br></br>
        <br></br>
        <label>Why is it correct? :</label>
        <br></br>
        <input
          type="text"
          name="reason"
          placeholder="enter reason"
          id="reason"
          onChange={(event) =>
            setPostData({ ...postData, reason: event.target.value })
          }
        />
        <br></br>
        <br></br>
        <label>incorrect_answers :</label>
        <br></br>
        <input
          type="text"
          name="incorrect_answers"
          placeholder="enter incorrect_answers"
          onChange={(event) => {
            setPostData({
              ...postData,
              incorrect_answers: event.target.value.split(","),
            });
          }}
          id="incorrect_answers"
        />
        <br></br>
        <Button
          className="bttn"
          variant="primary"
          type="submit"
          onClick={handleCreate}
        >
          Create another question
        </Button>
      </div>
    </section>
  );
};

export default Create;
