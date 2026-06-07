const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fromName: String,
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: String,
  sentAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
