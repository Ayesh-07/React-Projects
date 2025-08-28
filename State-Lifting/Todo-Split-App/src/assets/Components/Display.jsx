import React from 'react'

const Display = (props) => {
  return (
    <div>
        <h2>Tasks:</h2>
        <ul>
            {props.Task.map((Task, index) => (
          <li key={index}>{Task}</li>
        ))}
        </ul>
      
    </div>
  )
}

export default Display
