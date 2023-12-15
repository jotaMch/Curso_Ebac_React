import React from "react";

export default function DollarLabel({ value }){
    return(
        <div className="label">
            <p>Dólar</p>
            <p>
                {value.toLocalString("en-US", {
                    style : "currency",
                    currency : "USD"
                })}
            </p>
        </div>
    )
}