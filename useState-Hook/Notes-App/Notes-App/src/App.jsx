import React, { useState } from 'react'
import Note from './assets/Component/Note'

const App = () => {

  const [notes , setNotes] = useState([])
  const [input , setInput] = useState("")

  const addNotes = ()=>{
    if(input.trim() === "" ) return;
    setNotes([...notes, input]); 
    setInput(""); 
    
  }
  return (
    <div>
      <Note 
      
     notes={notes}
        input={input}
        setInput={setInput}
        addNotes={addNotes}
      />
    </div>
  )
}

export default App
