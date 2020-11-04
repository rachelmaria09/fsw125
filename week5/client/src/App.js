import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './bounties' 
import AddBountyForm from './addBountyForm'

export default function App() {
    const [bounties, setBounties] = useState([])
    
    function getBounties() {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getBounties()
    }, [])
    return (
        <div>
            <AddBountyForm 
                addBounty={addBounty}
            />
            { bounties.map(bounty => <Bounty {...bounty} key={bounty.firstName} />) }
        </div>
    )
}