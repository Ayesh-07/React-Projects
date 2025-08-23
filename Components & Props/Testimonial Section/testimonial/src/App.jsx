import React from 'react'
import Testimonial from './Testimonial.jsx'
import Hina from './assets/Hina.jpeg'
import Imama from './assets/Imama.jpg'
import Amina from './assets/Amina.jpg'


const App = () => {
  return (

    <>
<div className='body'> 
   
 <h1>Testimonials</h1><br />

    <div className='container'>
      
      <Testimonial  
      
      name='Hina'
      image = {Hina}
      role = 'Graphics Designer'
      
      feedback = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod similique nihil accusantium.Ipsam nobis, atque autem quibusdam sediusto consectetur possimus esse quis,repellat doloremque. Voluptatem odio dolorum vel porro.'/>


      <Testimonial  
      
      name='Imama'
      image = {Imama}
      role = 'UX/UI Designer'

      feedback = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod similique nihil accusantium.Ipsam nobis, atque autem quibusdam sediusto consectetur possimus esse quis,repellat doloremque. Voluptatem odio dolorum vel porro.'/>
      
      
      <Testimonial  
      
      name='Amina'
      role = 'Fasion Designer'

      image = {Amina}
      feedback = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod similique nihil accusantium.Ipsam nobis, atque autem quibusdam sediusto consectetur possimus esse quis,repellat doloremque. Voluptatem odio dolorum vel porro.'/>
      
      
      
      
      
      </div>
      </div>
    
    </>
    
  )
}

export default App

      
    