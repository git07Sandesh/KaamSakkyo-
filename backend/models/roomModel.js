const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Room schema with an array of Task subdocuments and a list of users
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
