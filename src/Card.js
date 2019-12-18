import React, { useState } from 'react';

export default ({
    card,
    cardIndex,
    onDragStart,
    columnIndex,
}) => (
    <div className='card' 
        draggable
        onDragStart={(e) => onDragStart(e, card.name, cardIndex, columnIndex)}
    >
        <span className="title">{card.name}</span>

    </div>
)

