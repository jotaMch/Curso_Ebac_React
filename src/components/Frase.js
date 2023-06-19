import React from 'react'

function Frase(props) {
    return (
        <div>
            <div class="hora">
                <h5>{props.name} World</h5>
                <p> as 17:13 de 19/06/2023</p>
            </div>
            <div class="hora">
                <h2>{props.name} World</h2>
                <p> as 17:13 de 19/06/2023</p>                                          
            </div>
            <div class="hora">
                <button>{props.name} World</button>
                <p> as 17:07 de 19/06/2023</p>
            </div>
            <div class="hora">
                <li>{props.name} World</li>
                <p> as 17:14 de 19/06/2023</p>
            </div>
        </div>
    )
}

export default Frase