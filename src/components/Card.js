import React from 'react';

export default ({
    card,
    cardIndex,
    onDragStart,
    columnIndex,
    deleteTask,
}) => (
    <div className='card' 
        draggable
        onDragStart={(e) => onDragStart(e, card.name, cardIndex, columnIndex)}
    >
        <span className="title">{card.name}</span>
        <span><button onClick={e => deleteTask(e, columnIndex, cardIndex)} className='btn deleteTaskButton'>X</button></span>

    </div>
)

