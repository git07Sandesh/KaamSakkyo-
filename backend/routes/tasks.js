const express = require('express');
const {
    createTask
} = require('../controllers/taskController');

const router = express.Router();

//create user
router.post('/create/:id', createTask);

module.exports = router;
