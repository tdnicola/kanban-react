import React from 'react';

export default ({ 
    toggleModalAddTaskClick,
    addNewTaskModal,
    createNewTask,
    onChange,
    columnIndex,
    key,
    column
}) => (

    <div className='addTask'>
        <button className='btn addTaskButton' onClick={e => toggleModalAddTaskClick(e)}>
            Add Task
        </button>
        <div className="newTasks">

            {addNewTaskModal && (
                <div className='modal'> 
                    <div className='modal-main'>
                        testing
                        <input onChange={onChange} placeholder='New Task'></input>
                        <button onClick={e => createNewTask(e, column.name)}>Add New Task</button>
                        <button onClick={e => toggleModalAddTaskClick(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)