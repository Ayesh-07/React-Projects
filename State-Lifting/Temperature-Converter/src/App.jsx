import React, { useState } from 'react'
import Kelvin from './assets/Components/Kelvin'
import Fahrenheit from './assets/Components/Fahrenheit'

const App = () => {

  const [Celsius , setCelsius ] = useState(23);

  return (
    <div>
      <h1>Temperature Converter</h1>

      <input type="number" value={Celsius} onChange={(e) =>{setCelsius(e.target.value)}}  />

      <Fahrenheit  Fahrenheit={Celsius*9/5+32}/>
      <Kelvin  Kelvin = {Celsius+273.15}/>

    
    </div>
  )
}

export default App
