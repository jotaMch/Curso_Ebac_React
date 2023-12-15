import React from "react";

export default function Currency({value, parseTo, render}){
    const parsedValue = parseTo === "BRL" ? (
        value * 5
    ) : value / 5

    return render (
        parsedValue.toLocaleString(parseTo === "BRL" ? "pt-BR": "en-US", {
            style: "currency",
            currency: parseTo
        })
    );
}