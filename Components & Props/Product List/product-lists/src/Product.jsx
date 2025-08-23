import React from 'react'

const Product = (props) => {
  return (
    <div>
       
          <div className='main'>
            <h1>{props.name}</h1><br />
            <img src={props.image} width='200px'/><br /><br />
            <p> Price : {props.price}</p>
            


         <div className="stars">
        <span className={`fa fa-star ${props.rating >= 1 ? "checked" : ""}`}></span>
        <span className={`fa fa-star ${props.rating >= 2 ? "checked" : ""}`}></span>
        <span className={`fa fa-star ${props.rating >= 3 ? "checked" : ""}`}></span>
        <span className={`fa fa-star ${props.rating >= 4 ? "checked" : ""}`}></span>
        <span className={`fa fa-star ${props.rating >= 5 ? "checked" : ""}`}></span>
      </div>
    </div>



          </div>
    
    
      
    
  )
}

export default Product
