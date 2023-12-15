import React from "react";

export default function Label({ parsedValue, title }){
    return(
        <div className="label">
            <p>{title}</p>
            <p>
                {parsedValue}
            </p>
        </div>
    )
}