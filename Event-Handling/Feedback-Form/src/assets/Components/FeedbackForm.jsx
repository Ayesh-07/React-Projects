import React from 'react'

const FeedbackForm = (props) => {
    return (
        <div>

            <button onClick={props.submit}>Submit</button> <br /><br />

            <p>Message Here :)</p>

            <p>{props.value}</p>



        </div>
    )
}

export default FeedbackForm
