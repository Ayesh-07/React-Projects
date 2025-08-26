import React, { useState } from 'react'
import Counter from './Components/Counter'

const App = () => {
  const [counter , setCounter]=useState(0)
  const newValue = ()=>{setCounter(counter+1)}
  return (
    <div>

      <Counter counter = {counter} update = {newValue}/>
    </div>
  )
}

export default App
