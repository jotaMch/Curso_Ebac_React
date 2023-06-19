import React from 'react'

const HelloWorld = (props) => {
    return (
        <div class="hora">
            <h3>Hello {props.name}</h3>
            <p> as 17:21 de 19/06/2023</p>
            <div class="hora">
                <h2>Hello {props.name}</h2>
                <p> as 17:21 de 19/06/2023</p>
            </div>
        </div>        
    )
}

export default HelloWorld