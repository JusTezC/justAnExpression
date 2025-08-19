const Todo = require('../model/Todo')

const getAllTodos = async( req, res)=>{
try {
    const todos = await Todo.find({})
    res.json({message: 'Todos found.', payload:todos})
} catch (error) {
    res.status(500).json({message: 'Error while fetching todos.', error: error.message})
}
}

const createNewTodo = async( req, res)=>{
    try {
      const newTodo = new Todo({
        text: req.body.text
      })
      await newTodo.save()
        res.json({message: 'Todo Created.', payload: newTodo})  
    } catch (error) {
        res.status(500).json({message: 'Error while creating todo.', error: error.message})
    }
}

const updateTodoByID = async( req, res)=>{
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message: 'Todo updated', payload: updatedTodo})
    } catch (error) {
        res.status(500).json({message: 'Error while updating todo.', error: error.message})
    }
}

const deleteTodoByID = async( req, res)=>{
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
        res.json({message: 'Todo Deleted.', payload: deletedTodo})
    } catch (error) {
        res.status(500).json({message: 'Error while deleting todo.', error: error.message})
    }
}

module.exports = {
    getAllTodos,
    createNewTodo,
    updateTodoByID,
    deleteTodoByID
}