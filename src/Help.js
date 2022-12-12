import React from 'react'

function Help() {
  return (
    <div>
        <div> 
            <h1 className="need-help"> Do you need help?</h1>
            <p className="send-question">Send us your question and we will get back to you as soon as possible.</p>
        </div>
    <div class="email m-5">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="question-box m-5">
    <label for="exampleFormControlTextarea1" class="form-label">Questions?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <a href='/' className='btn-ma-offer ms-5'> Send </a>
    </div>
  )
}

export default Help
