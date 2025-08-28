import React from 'react'
import Fahrenheit from './assets/Components/Fahrenheit'
import Kelvin from './assets/Components/Kelvin'
import { useState } from 'react'

const App = () => {
const [Celsius , setCelsius]=useState(25)

// const update = (e)=>{
//   setCelsius(e.target.value)
// }


const Fahrenheit = ()=>{
  (Celsius*59)+32
}

const Kelvin = ()=>{
  Celsius+273.15
}

  return (
    <div>

    <h1>Ayesha {setCelsius}</h1>
      <Fahrenheit
      
      />
       <Kelvin
       
       />
     
    </div>
  )
}

export default App
