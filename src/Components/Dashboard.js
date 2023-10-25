import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Popup from './Popup'

const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(storedTasks)
    }, [])


    const handleOpenPopup = () => {
        setIsPopupOpen(true)
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false)
    }

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask]
        setTasks(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
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
                                        <div className='modal-container-list-title'>{tasks.title}</div>
                                        <div className='modal-container-list-status'>{tasks.status}</div>
                                        <div className='modal-container-delete-data-icon' onClick={() => handleDelete(index)}></div>
                                        <div className='modal-container-edit-data-icon'></div>
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
                        <Popup handleClosePopup={() => setIsPopupOpen(false)} addTask={addTask} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard


