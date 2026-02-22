function Card(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.item}
        height="200px"
        width="200px"
        loading="lazy"
        className="card-img"
      />
      <div  className="card-details" style={{ textAlign: "center" }}>
        <h2>{props.item}</h2>
        <h1>{props.offer}</h1>
        <p>Price: ₹{props.price}</p>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

export default Card;