import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import "./Createdqn.css"

const Createdqn = ({ qnarray, savedqnarray }) => {
	const navigate = useNavigate()
	function navigatetype() {
		navigate('/type')
	}

	function navigatehome() {
		navigate('/')
	}

	return (
		<div>
			{qnarray.map((ques, i) => {
				if (ques.question != "") {
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
								<h5>incorrect_answers :</h5> <p>{ques.incorrect_answers.join(",")}</p>
							</div>

						</div>
					)
				}
			})}
			<Button onClick={navigatetype}>+New Question</Button>
			<Button onClick={navigatehome}>Go to homepage</Button>
		</div>
	)
}

export default Createdqn
