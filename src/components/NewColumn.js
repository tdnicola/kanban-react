import React from 'react';

export default ({ 
    createNewColumn,
    toggleAddColumn,
    addNewColumnModal,
    onChange
}) => (

    <div className='addTask'>
        <button className='btn addColumnButton' onClick={e => toggleAddColumn(e)}>
            Add Column
        </button>
        <div className="newTasks">

            {addNewColumnModal && (
                <div className='modal'> 
                    <div className='modal-main'>
                        Add New Column
                        <input onChange={onChange} placeholder='New Column'></input>
                        <br></br>
                        <button onClick={e => createNewColumn(e)}>Add New Column</button>
                        <br></br>
                        <button onClick={e => toggleAddColumn(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)