const express = require('express')
const dogRouter = express.Router()
const uuid = require('uuid')

const dogs = [
    { dogBreed: "Chihuahua", energyLevel: "Medium", size: "Small", _id: uuid.v4() },
    { dogBreed: "Weimaraner", energyLevel: "High", size: "Large", _id: uuid.v4() },
    { dogBreed: "German Shepherd", energyLevel: "High", size: "Large",  _id: uuid.v4() },
    { dogBreed: "Bernese Mountain Dog", energyLevel: "Low", size: "Large",  _id: uuid.v4() },
    { dogBreed: "Corgi", energyLevel: "Medium", size: "Large", _id: uuid.v4() }
]

//get all
dogRouter.get("/", (req, res) => {
    res.send(dogs)
})

//get one
dogRouter.get("/:dogId", (req, res) => {
    const dogId = req.params.dogId
    const foundDog = dogs.find(dog => dog._id === dogId)
    res.send(foundDog)

})

//get by energyLevel
dogRouter.get("/search/energyLevel", (req, res) => {
    const energyLevel = req.query.energyLevel
    const filteredDogs = dogs.filter(dog => dog.energyLevel === energyLevel)
    res.send(filteredDogs)
})

module.exports = dogRouter