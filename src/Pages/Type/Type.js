import React from 'react'
import "./Type.css";
import { useNavigate } from 'react-router-dom'
import { blue } from '@mui/material/colors';
const Type = ({ postData, setPostData }) => {
	const navigate = useNavigate()
	return (
		<div className='first'>
			<div className='second'>
				<input
					type="radio"
					value="multiple"
					id="type"
					name="type"
					tyle={{marginLeft: 50, marginTop: 10 }}
					onChange={(e) => {
						setPostData({ ...postData, type: e.target.value })
						console.log(postData)
						navigate('/createquiz')
					}} />Multiple choice

				<input
					type="radio"
					value="descriptive"
					id="type"
					name="type"
					tyle={{marginLeft: 100, marginTop: 10 }}
					onChange={(e) => {
						setPostData({ ...postData, type: e.target.value })
						console.log(postData)
						navigate('/createquiz')
					}} />Descriptive
			</div>
		</div>
	)
}

export default Type
