import React from 'react';

export default ({ 
    createNewTask,
    onChange,
    columnIndex,
    input
}) => (

    <div className='addTask'>
        <input className={columnIndex} onChange={onChange} value={input} placeholder='New Task'></input>
        <button onClick={e => createNewTask(e, columnIndex)}>Add New Task</button>
    </div>
)