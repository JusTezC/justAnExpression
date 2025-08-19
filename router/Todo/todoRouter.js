const { updateTodoByID, deleteTodoByID, createNewTodo, getAllTodos } = require('./controller/todoController')
const express = require('express')
const router = require('express').Router()

router.get('/get-all-todos', getAllTodos)
router.post('/create-todo', createNewTodo)
router.put('/update-todo/:id', updateTodoByID)
router.delete('/delete-todo/:id', deleteTodoByID)

module.exports = router