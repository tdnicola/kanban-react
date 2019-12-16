import React, { useState } from 'react';
import Column from './Column'
import logo from './logo.svg';
import './App.css';

function App() {

  const [columns, setColumns] = useState(
      [
        {
          name: 'Have not started',
          cards: [
            { name: 'card a'}
          ]
        },
        {
          name: 'InProgress',
          cards: [
            { name: 'card b'}
          ]
        },
        {
          name: 'Completed',
          cards: [
            { name: 'card c'}
          ]
        },
      ] 
    )


    function onDragStart (e, id) {
      console.log('dragstart', id)
      e.dataTransfer.setData('id', id)
    }

    function onDragOver (e) {
      e.preventDefault()
    }

    function onDrop(e, column) {
      let id = e.dataTransfer.getData('id')
    }

  return (
    <div className="App">
      {columns.map((column, columnIndex) => (
          <Column 
            onDrop={(e) => onDrop(e, column.name)}
            column={column}
            columnIndex={columnIndex}
            key={columnIndex} 
            onDragStart={onDragStart}
            onDragOver={onDragOver}
          />
        ))
      }
    </div>
  );
}

export default App;
