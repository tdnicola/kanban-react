import React from 'react';

export default ({ 
    createNewTask,
    onChange,
    input,
}) => (

    <div className='addTask'>
        <input className='addNewTask' onChange={onChange} value={input} placeholder='New Task'></input>
        <button className='addTaskButton btn'onClick={e => createNewTask(e)}>></button>

    </div>
)