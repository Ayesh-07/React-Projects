import React from 'react'

const App = () => {

 
    const Cart = ['Apple' , 'Pear' ,'PineApple' ,'Bags']

    if (Cart.length === 0){
      return <h1>No Items</h1>
  }else{
    return <div>
      <ul>
     {
      Cart.map((item,index)=>{
           return <li key = {index}>{item}</li>
      })
     }
      </ul>
    </div>
  }
    

}

export default App
