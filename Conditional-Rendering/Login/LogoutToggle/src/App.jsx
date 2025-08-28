import React from 'react'

const App = () => {
  const user = 'Ayesha'
 const Islogged = true;

 if (Islogged===true){
  return <h1>welcome {user}</h1>
 }else{
  return <h1>Please {user} Login First.</h1>
 }

}

export default App
