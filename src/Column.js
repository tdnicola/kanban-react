import React, { useState } from 'react';
import Card from './Card'

export default ({column}) => (
    <div className='column'>
        <h1>{column.name}</h1>
        {column.cards.map((card, cardIndex) => (
            <Card
                card={card}
                cardIndex={cardIndex}
            />
        ))}
    </div>
)