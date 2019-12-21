import React, { useState, useRef } from 'react';
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
    const [input, setInput] = useState('')



    const toggleModalAddClick = (e) => {
      e.preventDefault()
      setAddNew(!addNew)
    }

    const onDragStart = (e, id, cardIndex, columnIndex) => {
      // console.log('dragstart', id, "card index:" + cardIndex)
      e.dataTransfer.setData('id', id)
      e.dataTransfer.setData('cardIndex', cardIndex)
      e.dataTransfer.setData('startingColumnIndex', columnIndex)
      console.log("start ColumnIndex:" + columnIndex)

    }

    const onDragOver = (e) => {
      e.preventDefault()
    }

    const onChange = (e) => {
      setInput(e.currentTarget.value);
  }
    const createNewTask = (e) => {
      e.preventDefault()

      let task = {
        name: input,
        key: input,
      }
      columns[0].cards.push(task)
      toggleModalAddClick(e)
    }

    const onDrop = (e, column, endingColumnIndex) => {
      let id = e.dataTransfer.getData('id');
      let cardIndex = e.dataTransfer.getData('cardIndex')
      let startingColumnIndex = e.dataTransfer.getData('startingColumnIndex')

      let newCard = columns[startingColumnIndex].cards
      // console.log(newCard[cardIndex])

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
      // console.log(id, column, "endingcolumnIndex:" + endingColumnIndex, 'startingColumn:' + startingColumnIndex, "cardIndex:" + cardIndex)
    }

  return (
    <div className="App">
      <NewTask 
        toggleModalAddClick={toggleModalAddClick}
        addNew={addNew}
        setAddNew={setAddNew}
        createNewTask={createNewTask}
        onChange={onChange}
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
