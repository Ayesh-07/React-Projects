import React from 'react'

const Testimonial = (props) => {
    return (
        <div className='cards'>
            <div className='main'>

                <img src={props.image} width='50px' />
                <div className='bio'>
                  <p> {props.name}</p>
                <h6>{props.role}</h6>
                </div>
               

            </div><br /><br />

            <div className='content'>
                <p>{props.feedback}</p>
            </div>

        </div>
    )
}

export default Testimonial
