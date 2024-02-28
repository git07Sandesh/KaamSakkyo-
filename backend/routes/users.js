const express = require('express');
const {
    createUser,
    getUsers

} = require('../controllers/userController');

const router = express.Router();

//create user
router.post('/create/:name1', createUser);

//get user from one room
router.get('/:name', getUsers);

module.exports = router;
