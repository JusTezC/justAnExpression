const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const todoRouter = require('./router/Todo/todoRouter')
const cors = require('cors')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use('/api/todo', todoRouter)

module.exports = app