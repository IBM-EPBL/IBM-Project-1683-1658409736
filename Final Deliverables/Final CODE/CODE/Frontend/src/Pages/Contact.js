import React from 'react'
import './../css/contact.css'

function Contact() {
  var submitHandler = ()=>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    if((name != null && email!=null) && subject!=null){
      if(email.includes('@')){
        alert('message sent');
        return;
      }
    }
    alert('The fields should not be empty')
  }

  return (
    <div className='card'>
      <h1 className='head'>Contact Us</h1>
      <div className='contact'>
        <div className='form'>
        <form>  
          <label for="fname">Name</label>
          <input type="text" id="name" name="firstname" placeholder="Name.." required />

          <label for="lname">Email</label>
          <input type="text" id="email" name="lastname" placeholder="Email.." required />

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." required ></textarea>

          <button className='buttonss' onClick={submitHandler}  value="Submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact