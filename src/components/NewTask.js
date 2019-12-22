import React from 'react';

export default ({ 
    toggleModalAddClick,
    addNewTaskModal,
    createNewTask,
    onChange
}) => (

    <div className='addTask'>
        <button onClick={e => toggleModalAddClick(e)}>
            Add Task
        </button>
        <div className="newTasks">

            {addNewTaskModal && (
                <div className='modal'> 
                    <div className='modal-main'>
                        testing
                        <input onChange={onChange} placeholder='New Task'></input>
                        <button onClick={e => createNewTask(e)}>Add New Task</button>
                        <button onClick={e => toggleModalAddClick(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)