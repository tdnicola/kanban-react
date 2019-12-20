import React, { useState, } from 'react';
import Column from './Column'
import './App.css';



export default ({ 
    toggleModalAddClick,
    addNew,
    setAddNew,
    createNewTask
}) => (

    <div className='addTask'>
        <button onClick={e => toggleModalAddClick(e)}>
            Add Task
        </button>
        <div className="newTasks">

            {addNew && (
                <div className='modal'> 
                    <div className='modal-main'>
                        testing
                        <input value={console.log(this)} placeholder='New Task'></input>
                        <button onClick={e => createNewTask(e)}>Add New Task</button>
                        <button onClick={e => toggleModalAddClick(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)