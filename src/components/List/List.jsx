import React, { useState } from 'react'
import './List.css'

const List = (props) => {



  console.log(props.todo)
  return (
    <div className='list-container'>
      {props.todo.length === 0 && <p>No No data found..</p>}
        {props.todo.map((todo, index)=> <p  className='tasklist'> {todo}</p>)}
    </div>
  )
}

export default List