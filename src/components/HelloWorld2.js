import React from "react";

const HelloWorld2 = (props) => {
    return (
        <div>
            <div className="hora">
                <span>{props.name} World</span>
                <p> as 17:18 de 19/06/2023</p>
            </div>
            <div className="hora">
                <strong>{props.name} World</strong>
                <p> as 17:18 de 19/06/2023</p>
            </div>
            <div className="hora">
                <em>{props.name} World</em>
                <p> as 17:18 de 19/06/2023</p>
            </div>

        </div>
    )
}

export default HelloWorld2
