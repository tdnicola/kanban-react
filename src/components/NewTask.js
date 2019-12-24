import React from 'react';

export default ({ 
    createNewTask,
    onChange,
    columnIndex,
    input
}) => (

    <div className='addTask'>
        <input className={columnIndex} onChange={onChange} value={input} placeholder='New Task'></input>
        <button className='addTaskButton btn'onClick={e => createNewTask(e, columnIndex)}>></button>
    </div>
)