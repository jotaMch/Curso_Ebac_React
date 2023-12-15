import React from "react";
import { withCurrency } from './Currency'; 

export default function RealLabel({ value }){
    return(
        <div className="label">
            <p>Real</p>
            <p>
                {value.toLocalString("pt-BR", {
                    style : "currency",
                    currency : "BRL"
                })}
            </p>
        </div>
    )
}

export default withCurrency(RealLabel);