const router = require('express').Router()
const Todo= require("../model/todo");


router.get("/", async(req,res) => {
    const allTodo =await Todo.find()
    res.render("../frontend/views/index", {todo:allTodo})
});



module.exports = router;