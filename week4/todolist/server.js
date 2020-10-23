const express = require("express")
const app = express()

//middleware
app.use(express.json())

//data
const todos = [
    {
        name: "Grocery Shop",
        description: "apples, oranges, bananas",
        imageUrl: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        completed: false
    },
    {
        name: "Clean House",
        description: "dust, vaccuum, mop",
        imageUrl: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        completed: true 
    },
    {
        name: "Walk Dogs",
        description: "2 mile loop",
        imageUrl: "https://images.unsplash.com/photo-1525864227164-45ecff3c7151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
        completed: true 
    },
    {
        name: "Homework",
        description: "Week 5 assignments for FSW-125 and FSW-130",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        completed: true 
    }
]

//routes
//get
app.get("/todos", (req, res) => {
    res.send(todos)
})

//post
app.post("/todos", (req, res) => {
    const newTodo = req.body
    todos.push(newTodo)
    console.log(req.body)
    res.send("Todo added to the list!")
})

app.listen(9000, () => {
    console.log("Server works!")
})