const { json } = require('express');
const User = require('../models/userModel');
const mongoose = require('mongoose');
//get all rooms
const getRooms = async (req, res) => {
    const rooms = await Room.find({}).sort({ createdAt: -1 }).
        res.status(200).json(rooms);
}

// //get one room
// const getRoom = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404), json({ error: 'No such room' })
//     }
//     const room = await Room.find.findById(id);
// //     if (!room) {
// //         return res.status(404).json({ error: 'Room not found' });
// //     }
// //     res.status(200).json(room)
// // }
// //create room
// const createRoom = async (req, res) => {
//     const { title, tasks, users } = req.body;
//     // add to db
//     try {
//         const room = await Room.create({
//             title, tasks, users
//         })
//         res.status(200).json(room)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// //delete room
// const deleteRoom = async (req, res) => {
//     const { id } = req.params
//     if (!mongoose.Types.ObjectId.equals(id)) {
//         return res.status(404).json({ error: 'No such room' })
//     }

//     const room = await Room.findOneAndDelete({ _id: id })
//     if (!room) {
//         return res.status(400).json({ error: 'No such room' })
//     }

//     res.status(200).json(room)
// }


//create User
const createUser = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.equals(id)) {
        return res.status(404).json({ error: 'Room not found to create user in' })
    }
    const { name, email, rooms } = req.body;
    try {
        const user = await User.create({
            name, email, rooms
        })
        res.status(200).json(user)
    }
    catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    createUser
}