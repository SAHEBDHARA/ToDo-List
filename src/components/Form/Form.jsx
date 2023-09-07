import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = (props) => {

  const [enteredInput, setEnteredInput] = useState('')
  const [isValid, setIsValid ] = useState(true)

  const todoHandeler =(e) =>{
    e.preventDefault()
    setEnteredInput(e.target.value)
  }
  const handleClick =(e) => {
    e.preventDefault()
    if(enteredInput.length === 0){
      setIsValid(false)
    }else{
      setIsValid(true)
    props.onEnteredItems(enteredInput);

    }

    setEnteredInput('');
   
  }

  return  (
    <div className={`input-Container ${!isValid ? 'invalid' : ''}`}>
        <label className='inputLabel' htmlFor="">Enter ToDo: </label>
        <input className='inputSection' value={enteredInput} onChange={todoHandeler} type="text" />
        <button className='Add-button' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Form