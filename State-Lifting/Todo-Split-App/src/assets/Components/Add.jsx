import React from 'react'

const Add = (props) => {
  return (
    <div>
        <input type="text" value = {props.input} 
        
        onChange={(e) => props.setInput(e.target.value)}/>
        <button onClick={props.addTask}>Add Tasks</button>
      
    </div>
  )
}

export default Add
