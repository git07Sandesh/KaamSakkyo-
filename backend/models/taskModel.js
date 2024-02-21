const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define the Task schema with a reference to the User schema
const taskSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: false,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: false, // This can be false if you want tasks to not always be assigned
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room', // Reference to the Room model
        required: false,
    },
    points: {
        type: Number,
        required: false,
    }
    // Add other task-specific fields here
}, { timestamps: true });

// Create models

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;