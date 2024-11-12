// src/components/MessageList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch messages when the component mounts
    axios
      .get('http://localhost:5000/api/messages') // Adjust this URL for your deployed API
      .then((response) => {
        setMessages(response.data); // Set messages to the state
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError('Error fetching messages');
        setLoading(false); // Handle error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* <h2>Contact Messages</h2> */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {messages.map((message) => (
            <li key={message._id}>
            <div style={{ color: 'black' }}>
            <strong>Name:</strong> {message.name} <br />
           </div>
      <div style={{ color: 'black' }}>
        <strong>Email:</strong> {message.email} <br />
      </div>
      <div style={{ color: 'black' }}>
        <strong>Message:</strong> {message.message} <br />
      </div>
      <div style={{ color: 'black' }}>
        <strong>Date:</strong> {new Date(message.date).toLocaleString()} <br />
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default MessageList;
