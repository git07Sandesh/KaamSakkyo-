const { json } = require('express');
const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Task = require('../models/taskModel');
const mongoose = require('mongoose');

//create Task
const createTask = async (req, res) => {
    const { name } = req.params
    const { description, completed, assignedTo, points } = req.body;
    const dbroom = await Room.findOne({ title: name });
    const dbroomid = dbroom._id;
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
            room: dbroomid,
            points,
        });

        await Room.findByIdAndUpdate(
            dbroomid,
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

const getTasks = async (req, res) => {
    const { name } = req.params;
    try {
        const room = await Room.findOne({ title: name }).populate('tasks', 'description'); // Assuming 'users' is a field in Room that references User documents
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        if (room.tasks && room.tasks.length > 0) {
            // Now, room.users should have user documents populated with only the 'name' field
            const taskNames = room.tasks.map(tasks => tasks.description); // Extract the name of each user
            return res.status(200).json(taskNames); // Send back an array of user names
        } else {
            // Room has no users
            return res.status(404).json({ error: 'No tasks found in this room' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createTask,
    getTasks
}