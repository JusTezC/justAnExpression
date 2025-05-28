const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4

const todos = [
    {
        id: "haf24jd",
        todo: "do laundry",
        done: "false"
    },
    {
        id: "jp2nkl2",
        todo: "wash dishes",
        done: "true"
    }
]
//GET-ALL-TODOS
router.get('/get-all-todos', (req, res) => {
    res.json(todos)
})

//GET-TODO-BY-ID
router.get('/get-todo-by-id/:id', (req, res) => {
    const id = req.params.id
    const foundTodo = todos.find(item => item.id === id === req.params.id)
    if (foundTodo) {
        return res.json({ message: 'Found Todo', payload: foundTodo })
    } else {
        return res.json({ message: 'The Todo ID you are looking for does not exist, please check the ID' })
    }
})

//GET-TODOS-BY-DONE
router.get('/get-todos-by-done/:done', (req, res) => {
    const isDone = req.params.done
    const newDoneArray = []
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].done === isDone) {
            newDoneArray.push(todos[i])
        }
    
        res.json({message: 'Found Todos', payload: newDoneArray})
    }
    res.json(newDoneArray)
})

//CREATE-NEW-TODO
router.post('/create-new-todo', (req, res) => {
    if(todos.find(item => item.todo.toLowerCase  === req.body.todo.toLowerCase)){
        res.json({message: 'Todo already exist.'})
    }else{
    const newTodo = {
        todo: req.body.todos,
        done: 'false',
        id: uuidv4()
    }
    todos.push(newTodo)
    return res.json(todos)
    res.json(todos)
}
})

router.put('/update-todo/:id', (req, res)=>{
    const id = req.params.id
    const todo = req.body.todo

    const foundTodo = todos.find(item => item.id === req.params.id) //FOUND THE OBJECT
    foundTodo.todo = todo // CHANGES IN THE ARRAY
    res.json(todos) // DISPLAY THE UPDATED ARRAY
})

router.delete('/delete-todo', (req, res)=>{
    const id = req.body.id
    const foundIndex = todos.findIndex(item => item.id === id)
    todos.splice(foundIndex, 1)
    res.json({message: 'Todo Deleted', payload: todos})
})

module.exports = router

