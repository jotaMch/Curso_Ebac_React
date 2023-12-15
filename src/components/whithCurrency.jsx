export default function withCurrency(Component){
  return ({value, parseTo, ...otherProps}) => {
      const parsedValue = parseTo === "BRL" ? value * 5 : value / 5
      return (
      <Component
      parsedValue={
          {...otherProps}
          parsedValue.toLocaleString(parseTo === "BRL" ? "pt-BR": "en-US" ,
          {
              style: "currency",
              currency: parseTo
          }
          )}
      />
      )
  }
}