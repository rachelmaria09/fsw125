const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require('./bountyRouter'))

// app.use('/bounties', (req, res, next) => {
//     console.log('Bounties middleware was executed!')
//     next()
// })

// app.use('/bounties', (req, res, next) => {
//     req.body = {name: "Rachel"}
//     next()
// })

// app.get('/bounties', (req, res, next) => {
//     console.log('Get request received!')
//     res.send(req.body)
// })

app.listen(9000, () => {
    console.log("Server is working!")
})