
export default function withCurrency(Component){
    return ({value, parseTo}) => {
        const parsedValue = parseTo === "BRL" ? value * 5 : value / 5
        return (
        <Component
        parsedValue={
            parsedValue.toLocaleString(parseTo === "BRL" ? "pt-BR": "en-US", 
            {
                style: "currency",
                currency: parseTo
            }
            )}
        />
        )
    }
}