import React from 'react'
import ProfileCard from './ProfileCard'
import Amina from './assets/Amina.jpg'
import saba from './assets/saba.jpeg'
import sana from './assets/Sana.png'
import Imama from './assets/Imama.jpg'
import Hina from './assets/Hina.jpeg'

const App = () => {
  return (
    <>
    
    
     <div class='main'>
     <ProfileCard  name='Hina' age='24' bio ='Im Frontend Engineer' image= {Amina} />
     <ProfileCard  name='Sana' age='25' bio ='Im Backend Engineer'  image= {saba}  />
     <ProfileCard  name='Saba' age='20' bio ='Im Graphics Designer' image= {sana}  />
     <ProfileCard  name='Amina' age='44' bio ='Im Stack Engineer'  image= {Imama}/>
     <ProfileCard  name='Imama' age='14' bio ='Im Mern Developer' image= {Hina}  /></div>
      
    </>
  )
}

export default App
