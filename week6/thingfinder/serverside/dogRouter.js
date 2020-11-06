const express = require('express')
const dogRouter = express.Router()
const uuid = require('uuid.v4')

const dogs = [
    { dogBreed: "Chihuahua", energyLevel: "Medium", size: "Small", _id: uuid.v4() },
    { dogBreed: "Weimaraner", energyLevel: "High", size: "Large", _id: uuid.v4() },
    { dogBreed: "German Shepherd", energyLevel: "High", size: "Large",  _id: uuid.v4() },
    { dogBreed: "Bernese Mountain Dog", energyLevel: "Low", size: "Large",  _id: uuid.v4() },
    { dogBreed: "Corgi", energyLevel: "Medium", size: "Large", _id: uuid.v4() }
]

dogRouter.route("/")
//get all
.get((req, res) => {
    res.send(dogs)
})