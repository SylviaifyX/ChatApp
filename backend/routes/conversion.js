const express = require("express");
const router = express.Router();
const Conversation = require("../modal/Conversation");

// Create a new conversation
router.post("/conversations", async (req, res) => {
  const { participants } = req.body;

  try {
    // Check if a conversation already exists
    const existingConversation = await Conversation.findOne({
      participants: { $all: participants },
    });

    if (existingConversation) {
      return res.status(200).json(existingConversation);
    }

    // Create a new conversation
    const newConversation = new Conversation({ participants });
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;