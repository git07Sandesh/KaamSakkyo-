const express = require('express')
require('dotenv').config()
const Roomroutes = require('./routes/rooms')
const Userroutes = require('./routes/users')
const Taskroutes = require('./routes/tasks')

const mongoose = require('mongoose')
//express app
const app = express()


//middleware
app.use(express.json())



//routes
app.use('/api/tasks', Roomroutes)
app.use('/api/user', Userroutes)
app.use('/api/rtasks', Taskroutes)

//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port')
        })

    })
    .catch((error) => { console.log(error) })


