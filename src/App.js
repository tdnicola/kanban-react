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
          name: 'inProgress',
          cards: [
            { name: 'card b'}
          ]
        },
        {
          name: 'completed',
          cards: [
            { name: 'card c'}
          ]
        },
      ] 
    )

  return (
    <div className="App">
      {
        columns.map((column, columnIndex) => (
          <Column column={column}
          columnIndex={columnIndex}
          key={columnIndex} 
        />
      ))
      }
    </div>
  );
}

export default App;
