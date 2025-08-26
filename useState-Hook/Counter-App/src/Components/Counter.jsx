import React from 'react'

const Counter = (props) => {
  return (
    <div>
        <h1>Counter : {props.counter}</h1>

        <button onClick = {props.update}>Click Me</button>
      
    </div>
  )
}

export default Counter
