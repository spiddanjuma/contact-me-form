import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fix: Correct method name

    if (!email || !name || !message) {
      setError('Must not be empty');
      return;
    }

    try {
      const serviceID = 'service_15i2qxm';
      const templateID = 'template_9fyz7sd';
      const publicKey = 'Aax4A5wujGU2wzL5W';

      await emailjs.send(serviceID, templateID, {
        from_name: name,
        reply_to: email,
        message: message
      }, publicKey);

      setEmail('');
      setError('');
      setMessage('');
      setName('');

    } catch (error) {
      console.error('Error sending mail', error);
      setError('Error, please try again');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="container p-4 row g-3 mx-auto bg-info" style={{ width: '18rem', marginTop: '8%' }}>
        <h1>Contact Us</h1>
        <div className="col-12">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-12">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-12">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message us...' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        {error && <p>{error}</p>}

        <button type="submit" className="btn col-6 btn-primary">Send</button>
      </form>
    </>
  )
}

export default Contact;
