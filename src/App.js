import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Details from './Details';

import { Routes, Route } from 'react-router-dom';

function App() {
	const [item,setItem]=useState('')
	const displayDetails = (item) => {
		console.log(item)
		setItem(item)
	};
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Form displayDetails={displayDetails} />} />
				<Route exact path="/details/:id" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
