const { json } = require('express');
const Room = require('../models/roomModel');
const mongoose = require('mongoose');
//get all rooms
const getRooms = async (req, res) => {
    const rooms = await Room.find({}).sort({ createdAt: -1 }).
        res.status(200).json(rooms);
}

//get one room
const getRoom = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404), json({ error: 'No such room' })
    }
    const room = await Room.find.findById(id);
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room)
}
//create room
const createRoom = async (req, res) => {
    const { title, tasks, users } = req.body;
    // add to db
    try {
        const room = await Room.create({
            title, tasks, users
        })
        res.status(200).json(room)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete room
const deleteRoom = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.equals(id)) {
        return res.status(404).json({ error: 'No such room' })
    }

    const room = await Room.findOneAndDelete({ _id: id })
    if (!room) {
        return res.status(400).json({ error: 'No such room' })
    }

    res.status(200).json(room)
}


//update room
const updateRoom = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.equals(id)) {
        return res.status(404).json({ error: 'No such room' })
    }
    const room = await Room.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!room) {
        return res.status(400).json({ error: 'No such room' })
    }
    res.status(200).json(room)
}

module.exports = {
    createRoom,
    getRooms,
    getRoom,
    deleteRoom,
    updateRoom
}