import React from 'react'
import { useState } from 'react';

const App = () => {


const [score, setScore ] =useState(0);

   function Scorefunc (){
    setScore(score + 1)
   }

   function Resetfunc (){ 
    setScore(0)
   }

  return (
    <div>

      <h1>Button Click Game</h1>
      <p>Your Score is : {score}</p>
      <button onClick={Scorefunc}>Score</button>
      <button onClick={Resetfunc}>Reset</button>
      
    </div>
  )
}

export default App
