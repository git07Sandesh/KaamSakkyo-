const { json } = require('express');
const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Task = require('../models/taskModel');
const mongoose = require('mongoose');

//create User
const createTask = async (req, res) => {
    const { id } = req.params
    const { description, completed, assignedTo, points } = req.body;
    const dbroom = await Room.findById(id);
    if (!dbroom) {
        return res.status(404).json({ error: 'Room not found' });
    }
    const dbuser = await User.findById(assignedTo);
    if (!dbuser) {
        return res.status(404).json({ error: 'User not found to assign task to' });
    }

    try {
        const task = await Task.create({
            description,
            completed,
            assignedTo,
            room: id,
            points,
        });

        await Room.findByIdAndUpdate(
            id,
            { $push: { tasks: task._id } }
        );

        await User.findByIdAndUpdate(
            assignedTo,
            { $push: { tasks: task._id } }

        );
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createTask
}