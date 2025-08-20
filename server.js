require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_ADDRESS)
    .then(() => {
        app.listen(3000, () => {
            console.log("MONGODB CONNECTED.")
            console.log("Server started on port 3000.")
        })
    })
