const express = require ('express')
const logger = require ('morgan')
const index = require ('./router/index')
const todo = require ('./router/todo')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/', index)
app.use('/api/todo', todo)

app.listen(3000, ()=>{
    console.log('Server Started on port 3000!')
})