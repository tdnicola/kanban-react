import React from 'react';

export default ({ 
    createNewColumn,
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
                        <button onClick={e => createNewColumn(e)}>Add New Column</button>
                        <button onClick={e => toggleAddColumn(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)