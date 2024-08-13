import React, { useState } from "react";
import { Items } from "../utils/Items";
import { CreateTasks } from "../utils/CreateTasks";
import { List } from "../utils/List";

//include images into your bundle
//create your first component
const Home = () => {
	const [input, setInput] = useState("")
	const [tasks, setTasks] = useState([])

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const handleMakeTasks = () => {
		if (input && !tasks.includes(input)) {
			setTasks([...tasks, input])
			setInput("")
		} else {
			alert("Añade una tarea valida o no repetida")
		}

	}

	const handleDelete = (index) => {
		const filterTasks = tasks.filter((_, idx) => idx !== index);
		setTasks(filterTasks);
	}
	

	return (
		<>
			<CreateTasks input={input}handleInput={handleInput} handleMakeTasks={handleMakeTasks} ></CreateTasks>
			<List tasks={tasks} handleDelete={handleDelete} ></List>
		</>
	);
};

export default Home;
