const express = require('routes/node_modules/express')
const bountyRouter = express.Router()
const uuid = require("routes/node_modules/uuid")

const bounties = [
    { firstName: "Darth", lastName: "Vader", living: true, type: "Sith", _id: uuid.v4() },
    { firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", _id: uuid.v4() },
    { firstName: "Obi-Wan", lastName: "Kenobi", living: false, type: "Jedi", _id: uuid.v4() },
    { firstName: "Sheeve", lastName: "Palpatine", living: false, type: "Sith", _id: uuid.v4() },
    { firstName: "Princess", lastName: "Leia", living: true, type: "Jedi", _id: uuid.v4() },
]

bountyRouter.route("/")
//get all
.get((req, res) => {
    res.send(bounties)
})
//post one
.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`New bounty added to the list: ${newBounty.firstName} !`)
})
//get one
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully killed a bounty!") 
})
//update
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})
module.exports = bountyRouter