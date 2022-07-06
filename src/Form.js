import React, { useState } from 'react';
import './form.css';
import {  NavLink ,useNavigate} from 'react-router-dom';
const Form = ({ displayDetails }) => {
    const navigate= useNavigate()
	const [ formData, setFormData ] = useState({
		id: '',
		workingStatus: 'active',
		desc: '',
		taskStatus: 'ui',
		date: null
	});
	const [ data, setData ] = useState([]);
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let temp = [ ...data ];
		temp.push(formData);
		setData(temp);
		setFormData({
			id: '',
			workingStatus: 'active',
			desc: '',
			taskStatus: 'ui',
			date: ''
		});
	};
    const handleNavigation=(item)=>{
        navigate(`/details/${item.id}`,{state:item});
    }

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<form className="form" onSubmit={handleSubmit}>
					<div className="inputContainer">
						<label>Id</label>
						<input
							className="inputField"
							type="text"
							required
							placeholder="enter your email"
							name="id"
							value={formData.id ? formData.id : ''}
							onChange={handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Status</label>
						<select
							id="cars"
							name="workingStatus"
							onChange={handleChange}
							value={formData.workingStatus ? formData.workingStatus : ''}
						>
							<option value="active">active</option>
							<option value="inProgress">InProgress</option>
							<option value="resolved">Resolved</option>
						</select>
					</div>
					<div className="inputContainer">
						<label>Enter your description here</label>
						<textarea
							className="inputField"
							col="30"
							row="5"
							name="desc"
							required
							value={formData.desc ? formData.desc : ''}
							onChange={handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Task Type</label>
						<select
							name="taskStatus"
							onChange={handleChange}
							value={formData.taskStatus ? formData.taskStatus : ''}
						>
							<option value="ui">Ui Development</option>
							<option value="bug">Bug</option>
							<option value="comp">ComponentCreation</option>
						</select>
					</div>
					<div className="inputContainer">
						<label>Task Completion Date</label>
						<input
							className="inputField"
							type="date"
							required
							value={formData.date ? formData.date : ''}
							placeholder="enter your email"
							name="date"
							onChange={handleChange}
						/>
					</div>
					<button>submit</button>
				</form>
			</div>
			<div className="cardContainer">
				<label style={{ color: 'white' }}>search Id</label>
				<input placeholder="Enter Id" />

				{data &&
					data.map((item) => {
						return (
							<div className="card" key={item.id} onClick={()=>handleNavigation(item)}>
								<NavLink to={`/details/${item.id}`}>
									<div className="cardWrapper">
										<p>id:{item.id}</p>
										<span>Description : {item.desc}</span>
									</div>
								</NavLink>
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default Form;
