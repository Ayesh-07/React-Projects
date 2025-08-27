import React from 'react'

const Note = (props) => {
  return (
    <div>

        <h1>My Notes</h1>
        <input type="text"

        value ={props.input}
        
        onChange={(e) => props.setInput(e.target.value)}
        />

        <button onClick={props.addNotes}>Add Notes</button>

        <h2>Here is your list :</h2>
       <ul>
        {props.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  )
}

export default Note
