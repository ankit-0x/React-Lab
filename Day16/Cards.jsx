function Cards({coin}) {
  return (
    <>
     <img src={coin.image} alt={coin.name} style={{width:"50px",height:"50px"}} />
          <h3>{coin.name}</h3>
          <p>Symbol: {coin.symbol.toUpperCase()}</p>
          <p>Price: ${coin.current_price}</p>
          <p
            style={{
              color: coin.price_change_percentage_24h >= 0 ? "green" : "red",
            }}
          >
            24h: {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
    </>
  );
}

export default Cards;
