import React from 'react';

export default ({ 
    createNewTask,
    toggleAddColumn,
    addNewColumnModal,
    onChange
}) => (

    <div className='addTask'>
        <button onClick={e => toggleAddColumn(e)}>
            Add Column
        </button>
        <div className="newTasks">

            {addNewColumnModal && (
                <div className='modal'> 
                    <div className='modal-main'>
                        column testing
                        <input onChange={onChange} placeholder='New Task'></input>
                        <button onClick={e => createNewTask(e)}>Add New Task</button>
                        <button onClick={e => toggleAddColumn(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)