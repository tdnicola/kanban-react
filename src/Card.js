import React, { useState } from 'react';

export default ({
    card,
    onDragStart,
}) => (
    <div className='card' 
        draggable
        onDragStart={(e) => onDragStart(e, card.name)}
    >
        <span className="title">{card.name}</span>

    </div>
)

