const mongoose = require('mongoose')
const messageSchema = mongoose.Schema(
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      message: {
        type: String,
        trim: true,
      },
      chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
      },
    },
    {
      timestamps: true,
    }
  );

const chatModel = mongoose.model('Chat', chatSchema)
export default chatModel