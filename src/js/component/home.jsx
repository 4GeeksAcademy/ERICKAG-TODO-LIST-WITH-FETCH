import React, { useEffect, useState } from "react";
import { CreateTasks } from "../utils/CreateTasks";
import { List } from "../utils/List";

const Home = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const createUser = async () => {
        const request = await fetch('https://playground.4geeks.com/todo/users/erickaguilargomez', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const response = await request.json();
        setTasks(response.todos);
        console.log(response.todos);
    };

    const createTask = async () => {
        if (!input) {
            return alert("Ingresa una tarea válida");
        }

        const request = await fetch('https://playground.4geeks.com/todo/todos/erickaguilargomez', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                label: input,
                is_done: false
            })
        });

        const response = await request.json();
        setTasks([...tasks, response]);
        setInput(""); 
    };

    const deleteTodo = async (id) => {
        await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const filterTasks = tasks.filter((task) => task.id !== id);
        setTasks(filterTasks);
    };

	const deleteAll = async () => {
		const deleteTaskPromises = tasks.map(async (task) => {
			await fetch(`https://playground.4geeks.com/todo/todos/${task.id}`, {
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				},
			});
		});
	
		setTasks([]);
		console.log("All tasks deleted");
	};
	

    useEffect(() => {
        createUser();
    }, []);

    return (
        <>
            <CreateTasks input={input} handleInput={handleInput} handleMakeTasks={createTask} />
            <List tasks={tasks} handleDelete={deleteTodo} />
            <div className="w-100 d-flex">
			<button className="btn btn-danger m-auto" onClick={deleteAll}>Eliminar lista</button>
			</div>
        </>
    );
};

export default Home;
