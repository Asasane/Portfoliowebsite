import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages", {
        name,
        email,
        message,
      });
      setAlert(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container1">
      <h2>Contact Me</h2>
      {alert && <div className="alert">Your message was sent successfully</div>}
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name...."
            required
          />
        </div>
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email....."
            required
          />
        </div>
        <div className="inputBox">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
        </div>
        <div className="inputBox">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
