const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
        photo: {
          type: String,
        },
        chatName: {
          type: String,
        },
        isGroup: {
          type: Boolean,
          default: false,
        },
        users: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        ],
        latestMessage: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Message',
        },
        groupAdmin: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
      {
        timestamps: true,
      }
    );
const chatModel = mongoose.model('chat', chatSchema)
export default chatModel