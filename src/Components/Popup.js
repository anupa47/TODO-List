import React, { useEffect, useState } from 'react'

const Popup = ({ handleClosePopup, addTask, taskToEdit }) => {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Completed')

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title)
            setStatus(taskToEdit.status)
        }
    }, [taskToEdit])

    const handleSubmit = () => {
        const newTask = { title, status }
        addTask(newTask)
        handleClosePopup()
    }

    return (
        <div className='popup-form'>
            <div className='popup-header'>{taskToEdit ? 'EDIT TODO' : 'Add TODO'}</div>
            <div>
                <label>Title</label><br />
                <input
                    type='text'
                    className='popup-input-box'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Status</label><br />
                <select
                    className='popup-input-box'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Completed</option>
                    <option>Incompleted</option>
                </select>
            </div>
            <div className='popup-buttons'>
                <div className='modal-add-task-button' onClick={handleSubmit}>{taskToEdit ? 'Update' : 'Add Task'}</div>
                <div className='popup-close-button' onClick={handleClosePopup}>Cancel</div>
            </div>
        </div >
    )
}

export default Popup


