import React from 'react'

const ProfileCard = (props) => {
  return (
    <>


     <div className="container">
       
 <h2>I am {props.name}</h2>
      <p>I am  {props.age} years old.</p>
      <p>I am  {props.bio}.</p><br />
      <img src={props.image} alt="" width='200px' />
</div>


    
     
    
    </>
  )
}

export default ProfileCard
