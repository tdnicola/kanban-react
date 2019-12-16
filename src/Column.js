import React, { useState } from 'react';
import Card from './Card'

export default ({ 
    column, 
    columnIndex,
    onDragStart,
    onDragOver
 }) => (
    <div 
        className='column' 
        onDragOver={(e) => onDragOver(e)}
    >
        <h1>{column.name}</h1>
        {column.cards.map((card, cardIndex) => (
            <Card
                card={card}
                cardIndex={cardIndex}
                canMoveLeft={columnIndex !== 0}
                canMoveRight={columnIndex !== 2}
                onDragStart={onDragStart}
                key={card.name}
            />
        ))}
    </div>
)