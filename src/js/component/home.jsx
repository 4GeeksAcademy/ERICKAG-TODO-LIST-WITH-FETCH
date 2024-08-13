import React, { useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [input, setInput] = useState("")
	const [tasks, setTasks] = useState([])

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const handleMakeTasks = () => {
		if (input) {
			setTasks([...tasks, input])
			setInput("")
		} else {
			alert("Añade una tarea valida")
		}

	}

	const handleDelete = (index) => {
		const filterTasks = tasks.filter((_, idx) => tasks[idx] !== tasks[index])
		setTasks(filterTasks)
	}


	return (
		<>
			<div className="w-50 m-auto d-flex justify-content-evenly align-items-center" style={{ height: `10vh` }}>
				<input type="text" value={input} onInput={handleInput} />
				<button className="btn btn-primary" onClick={handleMakeTasks}>Crear tarea</button>
			</div>

			<ul className="list-group w-50 mx-auto mt-4" style={{ height: '60vh', overflowY: 'auto' }}>
				{tasks.length > 0 ? tasks.map((task, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
					<span>{task}</span>
					<button onClick={() => { handleDelete(index) }} className="btn btn-danger">
					  <i className="fa fa-trash" style={{ color: 'black' }}></i>
					</button>
				  </li>

				)) : (
					<li className="list-group-item text-center">
						Lista de tareas vacía
					</li>
				)}
			</ul>



		</>
	);
};

export default Home;
