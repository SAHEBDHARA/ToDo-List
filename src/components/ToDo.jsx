import React, { useState } from 'react'
import Form from './Form/Form'
import List from './List/List'
import './ToDo.css'

const ToDo = () => {

  const [enteredValue, setEnteredValue] = useState([])
  
  const handleChildData = (data) => {
    // Handle the data received from the child component here
    console.log(data)
    setEnteredValue((prevTodoList) => [...prevTodoList, data])
  }         
  return (
    <div className='todo-container'>
    <Form onEnteredItems={handleChildData}/>
    <List todo={enteredValue}/>
    </div>
  )
}

export default ToDo