import React, { useState } from 'react';
import Column from './Column'
import './App.css';



export default ({ 
    onAddClick,
    addNew,
    setAddNew,
}) => (

    <div className='addTask'>
        <button onClick={e => onAddClick(e)}>
            Add Task
        </button>
        <div className="newTasks">

            {addNew && (
                <div className='modal'> 
                    <div 
                        className='modal-main'
                    >
                        testing
                        <button onClick={e => onAddClick(e)}>Close</button>

                    </div>
                </div>
            )}
        </div>
    </div>
)