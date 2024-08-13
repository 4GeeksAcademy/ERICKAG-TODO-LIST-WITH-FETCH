import React from 'react'

export const CreateTasks = ({ input, handleInput, handleMakeTasks }) => {
    return (
        <div className="w-50 m-auto d-flex justify-content-evenly align-items-center" style={{ height: '10vh' }}>
            <input type="text" className="form-control form-control-lg me-2" value={input} onInput={handleInput} placeholder="Enter your text" />
            <button className="btn btn-primary btn-md text-center" onClick={handleMakeTasks}>
                Crear tarea
            </button>
        </div>


    )
}
