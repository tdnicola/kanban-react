import React, { useState } from 'react';
import Column from './components/Column'
import NewTask from './components/NewTask'
import LoginView from './components/LoginView'

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
    
    const [loginView, setLoginView] = useState(false)
    const [addNewTaskModal, setaddNewTaskModal] = useState(false)
    const [input, setInput] = useState('')
    

    const toggleModalAddClick = (e) => {
      e.preventDefault()
      setaddNewTaskModal(!addNewTaskModal)
    }

    const toggleLogin = (e) => {
      e.preventDefault()
      setLoginView(!loginView)
    }

    //starting to drag the task
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

    //setting input state through NewTask.js to go through createNewTask below
    const onChange = (e) => {
      setInput(e.currentTarget.value);
  }

    // inputting new task, takes onChange above
    const createNewTask = (e) => {
      e.preventDefault()

      let task = {
        name: input,
        key: input,
      }
      columns[0].cards.push(task)
      toggleModalAddClick(e)
    }

    //Dropping the draggable task to a different column pushing/splicing task
    const onDrop = (e, columnName, endingColumnIndex) => {
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
      console.log(id, columnName, "endingcolumnIndex:" + endingColumnIndex, 'startingColumn:' + startingColumnIndex, "cardIndex:" + cardIndex)
    }

  return (
    <div className="App">
      {!loginView && (
              <LoginView 
              loginView={loginView}
              toggleLogin={toggleLogin}
            />
      )}

      {loginView && (
        <div className='loggedIn'>
              <NewTask 
                toggleModalAddClick={toggleModalAddClick}
                addNewTaskModal={addNewTaskModal}
                setaddNewTaskModal={setaddNewTaskModal}
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

        )}
    </div>
  );
}

export default App;
