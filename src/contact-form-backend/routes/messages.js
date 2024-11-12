const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find(); // Fetch all messages from the database
    res.json(messages); // Send the data back as JSON
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages', message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

module.exports = router;
