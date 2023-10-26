import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Popup from './Popup'

const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [tasks, setTasks] = useState([])
    const [editTaskIndex, setEditTaskIndex] = useState(null)

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(storedTasks)
    }, [])


    const handleOpenPopup = () => {
        setIsPopupOpen(true)
        setEditTaskIndex(null)
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false)
        setEditTaskIndex(null)
    }

    const addTask = (newTask) => {
        const currentTime = new Date();
        newTask.createdOn = currentTime.toISOString()
        let updatedTasks
        if (editTaskIndex !== null) {
            updatedTasks = [...tasks]
            updatedTasks[editTaskIndex] = newTask
        } else {
            updatedTasks = [...tasks, newTask]
        }
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        handleClosePopup()
    }



    const handleEdit = (index) => {
        setIsPopupOpen(true)
        setEditTaskIndex(index)
    }


    const handleDelete = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    return (
        <div className='form'>
            <div className='modal'>
                <div className='modal-container'>
                    <div className='modal-container-title'>TODO LIST</div>
                    <div className='modal-add-select-button-line'>
                        <div className='modal-add-task-button' onClick={handleOpenPopup}>Add Task</div>
                        <select className='modal-select-button'>
                            <option>All</option>
                            <option>Incomplete</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className='modal-container-list'>
                        {tasks.length > 0 ? (
                            tasks.map((tasks, index) => (
                                <div className='modal-container-data' key={index}>
                                    <div className='modal-container-data-list'>
                                        <diV><input type='checkbox' className='checkbox'></input></diV>
                                        <div className='modal-container-list-title'>
                                            <div>{tasks.title}</div>
                                            <div className='time'>
                                                {tasks.createdOn && (
                                                    <div className='creation-date'>{new Date(tasks.createdOn).toLocaleString()}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='modal-container-delete-data-icon' onClick={() => handleDelete(index)}></div>
                                        <div className='modal-container-edit-data-icon' onClick={() => handleEdit(index)}></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='modal-container-list-message'>No Todos</div>
                        )}
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className='backdrop'>
                    <div>
                        <div className='popup-close-icon' onClick={handleClosePopup}></div>
                        <Popup
                            handleClosePopup={() => setIsPopupOpen(false)}
                            addTask={addTask}
                            taskToEdit={tasks[editTaskIndex]}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard


