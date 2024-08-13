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

			<ul className="w-50 mx-auto d-flex flex-column align-items-center list-group" style={{ height: '60vh' }}>
				{tasks.length>0 ? tasks.map((task, index) => (
						<div><li key={index} className="list-group-item">{task}</li>
							<button onClick={() => { handleDelete(index) }}>Eliminar tarea</button>
						</div>)) : <li className="list-group-item">Tarea vacía</li>}
			</ul>


		</>
	);
};

export default Home;
