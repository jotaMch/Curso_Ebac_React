import React from 'react'
import Frase from './Frase'

const HelloWorld = (props) => {
    return (
        <div>
            <Frase />
            <Frase />
            <h1>Hello {props.name}</h1>
            <h2>Hello World jota</h2>
        </div>
    )
}

export default HelloWorld