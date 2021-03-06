import React, { useState } from 'react';
import Column from './components/Column';
import LoginView from './components/LoginView';
import NewColumn from './components/NewColumn';
import NewTask from './components/NewTask';

import './App.css';

function App() {

  const [columns, setColumns] = useState(
      [
        {
          name: 'ToDo',
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
    const [registrationView, setRegistrationView] = useState(false)
    const [addNewTaskModal, setaddNewTaskModal] = useState(false)
    const [addNewColumnModal, setaddNewColumnModal] = useState(false)

    const [input, setInput] = useState('')
    

    const toggleModalAddTaskClick = (e) => {
      e.preventDefault()
      setaddNewTaskModal(!addNewTaskModal)
    }

    const toggleLogin = (e) => {
      e.preventDefault()
      setLoginView(!loginView)
    }


    const toggleRegistrationView = (e) => {
      e.preventDefault();
      setRegistrationView(!registrationView)
    }

    const toggleAddColumn = (e) => {
      e.preventDefault()
      setaddNewColumnModal(!addNewColumnModal)
    }

    const resetFormData =  () => {
      document.getElementById("newTaskInput").reset();
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

      toggleModalAddTaskClick(e)
      setInput('')
      console.log(input)
    }

    const deleteTask =(e, columnIndex, cardIndex) => {
      e.preventDefault()

      columns[columnIndex].cards.splice(cardIndex,1)

      setColumns([
        ...columns,
      ]) 
    }

    const createNewColumn = (e) => {
      e.preventDefault()

      let newColumn = {
        name: input,
        cards: []
      }
      columns.push(newColumn)
      toggleAddColumn(e)
        setInput('')
    }

    const deleteColumn =(e, columnIndex) => {
      e.preventDefault()
      // let startingColumnIndex = e.dataTransfer.getData('startingColumnIndex')
      columns.splice(columnIndex, 1)
      // console.log(e, columnIndex)  

      setColumns([
        ...columns,
      ]) 
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
    }

  return (
    <div className="App">
      {!loginView && (
              <LoginView 
              toggleLogin={toggleLogin}
              registrationView={registrationView}
              toggleRegistrationView={toggleRegistrationView}
            />
      )}

      {loginView && (
        <div className='loggedIn'>

              <NewTask 
                createNewTask={createNewTask}
                onChange={onChange}
                input={input}
                resetFormData={resetFormData}
              />
              <NewColumn
                toggleAddColumn={toggleAddColumn}
                addNewColumnModal={addNewColumnModal}
                createNewColumn={createNewColumn}
                onChange={onChange}
              />
              <div className='columnGrid'>
                {columns.map((column, columnIndex) => (
                    <Column 
                      onDrop={onDrop}
                      column={column}
                      columnIndex={columnIndex}
                      onDragStart={onDragStart}
                      onDragOver={onDragOver}
                      toggleModalAddTaskClick={toggleModalAddTaskClick}
                      deleteColumn={deleteColumn}
                      createNewTask={createNewTask}
                      onChange={onChange}
                      input={input}
                      deleteTask={deleteTask}
                      resetFormData={resetFormData}
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
