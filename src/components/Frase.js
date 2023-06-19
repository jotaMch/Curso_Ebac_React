import React from 'react'

class Frase extends React.Component {
    render() {
    return (
        <div>
            <div className="hora">
                <h5>{this.props.name} World</h5>
                <p> as 17:13 de 19/06/2023</p>
            </div>
            <div className="hora">
                <h2>{this.props.name} World</h2>
                <p> as 17:13 de 19/06/2023</p>                                          
            </div>
            <div className="hora">
                <button>{this.props.name} World</button>
                <p> as 17:07 de 19/06/2023</p>
            </div>
            <div className="hora">
                <li>{this.props.name} World</li>
                <p> as 17:14 de 19/06/2023</p>
            </div>
        </div>
    )
}
}


export default Frase