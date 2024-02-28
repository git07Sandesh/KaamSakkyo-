const express = require('express');
const {
    createTask,
    getTasks
} = require('../controllers/taskController');

const router = express.Router();

//create task
router.post('/create/:name', createTask);
router.get('/:name', getTasks)

module.exports = router;
