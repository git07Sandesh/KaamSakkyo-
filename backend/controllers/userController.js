const { json } = require('express');
const User = require('../models/userModel');
const Room = require('../models/roomModel');
const mongoose = require('mongoose');

//create User
const createUser = async (req, res) => {
    const { name1 } = req.params
    const { name, email } = req.body;
    const room = await Room.findOne({ title: name1 });
    const roomId = room._id;
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    if (email) {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            // If user exists, return an error
            return res.status(400).json({ error: 'Email already exists' });
        }
    }
    try {
        const user = await User.create({
            name,
            email,
            rooms: [roomId] // Add the room ID to the user's rooms array
        });

        await Room.findByIdAndUpdate(
            id,
            { $push: { users: user._id } }
        );
        res.status(200).json(user);
    }
    catch (error) {
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
        const users = await User.find({ '_id': { $in: room.users } });
        return res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

};


module.exports = {
    createUser,
    getUsers
}