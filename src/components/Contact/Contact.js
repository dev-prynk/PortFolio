import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Construct the mailto link
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:priyanksuthar21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mail client with the constructed link
    window.location.href = mailtoLink;
  
    // Optionally, you can also reset the form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Optionally alert the user or display a success message
    alert('Your message has been sent!');
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Let’s make your project come to life. Drop me a message, and I’ll get back to you!</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group-horizontal">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows="4"
          />
        </div>

        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
}
 