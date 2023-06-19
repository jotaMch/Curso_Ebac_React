import React from 'react'

function Frase(props) {
    return (
        <div>
            <div className="hora">
                <h5>{props.name} World</h5>
                <p> as 17:13 de 19/06/2023</p>
            </div>
            <div className="hora">
                <h2>{props.name} World</h2>
                <p> as 17:13 de 19/06/2023</p>                                          
            </div>
            <div className="hora">
                <button>{props.name} World</button>
                <p> as 17:07 de 19/06/2023</p>
            </div>
            <div className="hora">
                <li>{props.name} World</li>
                <p> as 17:14 de 19/06/2023</p>
            </div>
        </div>
    )
}

export default Frase