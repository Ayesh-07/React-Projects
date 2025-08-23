import React from 'react'
import Button from './Button.jsx'

const App = () => {
  return (
    <div>
      <Button
      
      label = 'Click Me' 
       style={{color: 'white' , padding:'10px', width:'400px', height:'100px',
       backgroundColor :'green', margin:'30px' , fontSize : '40px'}} 
      onClick = {()=>{alert('I am Ayesha')}}
      
      />


    </div>
  )
}

export default App


