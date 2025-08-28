import React, { useState } from 'react'
import Add from './assets/Components/Add'
import Display from './assets/Components/Display'

const App = () => {
  const [Task , setTask] = useState([])
  const [input , setInput] = useState("")

  const addTask = ()=>{
    if(input.trim() === "" ) return;
    setTask([...Task, input]); 
    setInput("");}
 
  return (
    <div>
<Add Task = {Task} input={input} setInput={setInput} addTask={addTask}/>
<Display Task = {Task} />
      
    </div>
  )
}

export default App
