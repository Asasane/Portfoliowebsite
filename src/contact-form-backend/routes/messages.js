const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get('/', async (req, res) => {
  try {
    // Fetch the last two messages based on 'createdAt' field
    const messages = await Message.find()
                                  .sort({ createdAt: 2 })  // Sort by createdAt field in descending order
                                  .limit(2);                // Limit the result to 2 messages
    
    res.json(messages); // Send the last 2 messages back as JSON
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
