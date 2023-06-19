import React from 'react'

function Frase(props) {
    return (
        <div>
            <h1>{props.name} World</h1>
            <h2>{props.name} World</h2>
            <button>{props.name} World</button>
            <h3>{props.name} World</h3>
            <span>{props.name} World</span><br></br>
            <strong>{props.name} World</strong><br></br>
            <em>{props.name} World</em>
        </div>
    )
}

export default Frase