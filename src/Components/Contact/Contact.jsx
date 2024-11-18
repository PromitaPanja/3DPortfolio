import React from 'react'
import './Contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "53e47e43-b12e-4cb9-b498-80a6f5f5f3ae");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };





  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src="src\assets\theme_pattern.svg" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>I am available to take new projects.</p>
                <div className="contact-details">
                    <div className="conatct-detail">
                        <img src="src\assets\mail_icon.svg" alt="" /><p>minizpivots@gmail.com</p>
                    </div>
                    <div className="conatct-detail">
                        <img src="src\assets\call_icon.svg" alt="" /><p>+91-7733959054</p>
                    </div>
                    <div className="conatct-detail">
                        <img src="src\assets\location_icon.svg" alt="" /><p>INDIA</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">YOUR NAME</label>
                <input type="text" placeholder='ENter your name' name='name'/>
                <label htmlFor="">YOUR EMAIL</label>
                <input type="text" placeholder='ENter your email' name='email'/>
                <label htmlFor="">write your message here</label>
                <textarea name="message" id="" rows='8' placeholder='Enter oyur message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact