const express = require('express');
const {
    createRoom,
    getRoom,
    getRooms,
    deleteRoom,
    updateRoom
} = require('../controllers/roomController');

const router = express.Router();

// GET all rooms
router.get('/', getRooms)
// GET single room
router.get('/:id', getRoom)
//Create a new room
router.post('/', createRoom)
//delete room
router.delete('/', deleteRoom)
//update room
router.patch('/:id', updateRoom)

module.exports = router;