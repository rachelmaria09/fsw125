import React from 'react'

export default function Bounty(props) {
    console.log(props)
    return (
        <div>
        <h4>Name: { props.firstName } {props.lastName}</h4>
        <p>Type: { props.type }</p>
        <p>Alive? { props.living + "" }</p>
        <hr />
        </div>
    )
}