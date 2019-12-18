import React, { useState } from 'react';
import Card from './Card'

export default ({ 
    column, 
    columnIndex,
    onDragStart,
    onDragOver,
    onDrop
 }) => (
    <div 
        className='column' 
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, column.name, columnIndex)}
    >
        <h1>{column.name}</h1>
        {column.cards.map((card, cardIndex) => (
            <Card
                card={card}
                cardIndex={cardIndex}
                columnIndex={columnIndex}
                onDragStart={onDragStart}
                key={card.name}
            />
        ))}
    </div>
)