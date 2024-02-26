const { json } = require('express');
const User = require('../models/userModel');
const Room = require('../models/roomModel');
const mongoose = require('mongoose');

//create User
const createUser = async (req, res) => {
    const { name1 } = req.params;
    const { name, email } = req.body;

    try {
        const room = await Room.findOne({ title: name1 });
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        const roomId = room._id; // Move this inside the check after ensuring room is not null

        if (email) {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                // If user exists, return an error
                return res.status(400).json({ error: 'Email already exists' });
            }
        }

        const user = await User.create({
            name,
            email,
            rooms: [roomId] // Add the room ID to the user's rooms array
        });

        await Room.findByIdAndUpdate(
            roomId, // This should be roomId, not _id which is not defined in this context
            { $push: { users: user._id } },
            { new: true, useFindAndModify: false } // Optional: these options ensure updated document is returned and use the newer update method
        );

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    const { name } = req.params;
    try {
        const room = await Room.findOne({ title: name })
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        if (room.users && room.users.length > 0) {
            return res.status(200).json(room.users);
        } else {
            // Room has no users
            return res.status(404).json({ error: 'No users found in this room' });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

};


module.exports = {
    createUser,
    getUsers
}