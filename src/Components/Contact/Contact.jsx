import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c63d46bd-a503-4a57-b7d7-3e2adbd1b193");

    const object = object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
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
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm a frontend developer from Nigeria with 10 years of experience in multiple Components like microsoft, telsa and Apple</p>
          <div className="contact-details">

            <div className="contact-detai">
              <img src={mail_icon} alt="" />
              <p>yoletech@gmail.com</p>
            </div>

            <div className="contact-detai">
              <img src={call_icon} alt="" />
              <p>+2347032767758</p>
            </div>

            <div className="contact-detai">
              <img src={location_icon} alt="" />
              <p>Location</p>
            </div>

          </div>
        </div>

        <form onSubmit={onSubmit} action="" className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='6' placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact