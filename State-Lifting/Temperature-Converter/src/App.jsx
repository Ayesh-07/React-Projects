import React from 'react'
import Fahrenheit from './assets/Components/Fahrenheit'
import Kelvin from './assets/Components/Kelvin'
import { useState } from 'react'

const App = () => {
const [Celsius, setCelsius]=useState(0)




  return (
    <div>
      <h1>Temperature Converter</h1>

      <input type="number" value = {Celsius} onChange={e => setCelsius(e.target.value)} />

    
      <Fahrenheit Fahrenheit = {(Celsius*5/9)+32} />
       <Kelvin  Kelvin = { Celsius+273.15}/>
     
    </div>
  )
}

export default App
