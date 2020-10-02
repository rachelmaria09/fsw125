const express = require("express")
const app = express()

//endpoint 1
const users = [
    { name: "Drew", age: 35 },
    { name: "Hank", age: 10 },
    { name: "Waylon", age: 8 }
]

app.get("/users", (req, res) => {
    res.send(users)
})

//endpoint 2
const locations = [
    { city: "Annapolis", state: "MD" },
    { city: "Greenville", state: "SC" },
    { city: "Middleburg", state: "VA" }
]

app.get("/locations", (req, res) => {
    res.send(locations)
})

//endpoint 3
const jobs = [
    { title: "Product Director", company: "Accesso Showare" },
    { title: "Front End Developer", company: "xMatters" },
    { title: "Back End Developer", company: "HubSpot" }
]

app.get("/jobs", (req, res) => {
    res.send(jobs)
})

app.listen(9000, () => {
    console.log("The server works!")
})