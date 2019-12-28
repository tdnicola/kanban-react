import React from 'react';
import Card from './Card'

export default ({ 
    column, 
    columnIndex,
    onDragStart,
    onDragOver,
    onDrop,
    deleteColumn,
    createNewTask,
    onChange,
    input,
    deleteTask,
    resetFormData,
 }) => (
    <div 
        className='column' 
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, column.name, columnIndex)}
    >
        <h2>
            {column.name}
            <button className='btn deleteButton'onClick={e => deleteColumn(e, columnIndex)}>X</button>

        </h2>
        {column.cards.map((card, cardIndex) => (
            <Card
                card={card}
                cardIndex={cardIndex}
                columnIndex={columnIndex}
                onDragStart={onDragStart}
                key={card.name}
                deleteTask={deleteTask}
            />
        ))}
        
    </div>
)