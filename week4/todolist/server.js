const express = require("express")
const app = express()
const uuid = require("uuid")

//middleware
app.use(express.json())

//data
const todos = [
    {
        name: "Grocery Shop",
        description: "apples, oranges, bananas",
        imageUrl: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        completed: false,
        _id: uuid.v4()
    },
    {
        name: "Clean House",
        description: "dust, vaccuum, mop",
        imageUrl: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        completed: true,
        _id: uuid.v4()
    },
    {
        name: "Walk Dogs",
        description: "2 mile loop",
        imageUrl: "https://images.unsplash.com/photo-1525864227164-45ecff3c7151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
        completed: true,
        _id: uuid.v4() 
    },
    {
        name: "Homework",
        description: "Week 5 assignments for FSW-125 and FSW-130",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        completed: true,
        _id: uuid.v4() 
    }
]

//routes
//get
app.get("/todos", (req, res) => {
    res.send(todos)
})

//get one
app.get("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//post
app.post("/todos", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todos.push(newTodo)
    res.send("Todo added to the list!")
})

//delete
app.delete("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Completed the todo Item!")
})

app.listen(9000, () => {
    console.log("Server works!")
})