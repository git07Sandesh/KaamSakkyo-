const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema (simplified for demonstration)
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,

    },
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }]
    // Include other user-specific fields here
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;