import React, { useState } from 'react';
import Column from './Column'
import NewTask from './NewTask'
import './App.css';

function App() {

  const [columns, setColumns] = useState(
      [
        {
          name: 'Have not started',
          cards: [
            { name: 'card a'},
            { name: 'card d'},
            { name: 'card e'},
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
    const [addNew, setAddNew] = useState(false)


    function onAddClick(e) {
      e.preventDefault()
      setAddNew(!addNew)
    }

    function onDragStart (e, id, cardIndex, columnIndex) {
      // console.log('dragstart', id, "card index:" + cardIndex)
      e.dataTransfer.setData('id', id)
      e.dataTransfer.setData('cardIndex', cardIndex)
      e.dataTransfer.setData('startingColumnIndex', columnIndex)
      console.log("start ColumnIndex:" + columnIndex)

    }

    function onDragOver (e) {
      e.preventDefault()
    }

    function onDrop(e, column, endingColumnIndex) {
      let id = e.dataTransfer.getData('id');
      let cardIndex = e.dataTransfer.getData('cardIndex')
      let startingColumnIndex = e.dataTransfer.getData('startingColumnIndex')

      let newCard = columns[startingColumnIndex].cards
      console.log(newCard[cardIndex])

      let task = {
        name: id,
        key: id,
        cardIndex: cardIndex
      }

      newCard.splice(cardIndex, 1)
      columns[endingColumnIndex].cards.push(task)

      setColumns([
        ...columns,
      ])  

      //columnIndex is the column it's dropped on
      console.log(id, column, "endingcolumnIndex:" + endingColumnIndex, 'startingColumn:' + startingColumnIndex, "cardIndex:" + cardIndex)
    }

  return (
    <div className="App">
      <NewTask 
        onAddClick={onAddClick}
        addNew={addNew}
        setAddNew={setAddNew}
      />
      <div className='columnGrid'>
        {columns.map((column, columnIndex) => (
            <Column 
              onDrop={onDrop}
              column={column}
              columnIndex={columnIndex}
              key={columnIndex} 
              onDragStart={onDragStart}
              onDragOver={onDragOver}
            />
          ))
        }
        </div>
    </div>
  );
}

export default App;
