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


    function onDragStart (e, id, cardIndex, columnIndex) {
      // console.log('dragstart', id, "card index:" + cardIndex)
      e.dataTransfer.setData('id', id)
      e.dataTransfer.setData('cardIndex', cardIndex)
      console.log("start ColumnIndex:" + columnIndex)

    }

    function onDragOver (e) {
      e.preventDefault()
    }

    function onDrop(e, column, columnIndex) {
      let id = e.dataTransfer.getData('id');
      let cardIndex = e.dataTransfer.getData('cardIndex')


    //   for (let i = 0; i < columns.length; i++) {
    //     // get the size of the inner array
    //     var innerArrayLength = columns[i].cards.length;
    //     // loop the inner array
    //     for (var j = 0; j < innerArrayLength; j++) {
    //         // console.log('[' + i + ',' + j + '] = ' + columns[i].cards[j].name);
    //         if(columns[i].cards[j].name === id) {
    //               // console.log(columns[i].cards[j])
    //               //  setColumns({
    //               //    ...columns,
    //               //    id
    //               //  })                  
    //             }
    //     }
    // }


    // const card = columns[columnIndex].cards.splice(cardIndex)
    // columns[columnIndex].cards.push(card)
    // return columns 

      //  setColumns([
      //     ...columns,
      //     id
      //  ])  


      //columnIndex is the column it's dropped on
      console.log('HELLO', id, column, "columnIndex:" + columnIndex)
    }

  return (
    <div className="App">
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
  );
}

export default App;
