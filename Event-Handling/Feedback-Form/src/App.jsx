import React from 'react'
import FeedbackForm from './assets/Components/FeedbackForm'
import { useState } from 'react'
const App = () => {




  const [input, setInput] = useState("");

  const [feedback, setFeedback] = useState("Hello");
  const [show, setShow] = useState("");


  function change(e) {
    setInput(e.target.value)
  }

  function feedbackChange(e) {
    setFeedback(e.target.value)
  }




  function submit() {

    setShow(`Hey ${input} for Feedback is : ${feedback}`)
    console.log(show)

  }


  return (
    <div>
      <h1>Give Your Feedback</h1>
      <label>Name</label><br />
      <input type="text" placeholder='Enter your Name:' onChange={change} /><br /><br />
      <label>Feedback</label><br />
      <input type="text" placeholder='Enter your Feedback:' onChange={feedbackChange} /><br /><br />




      <FeedbackForm submit={submit} value={show} />
    </div>
  )
}

export default App
