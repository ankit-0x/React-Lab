import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./Slicer";

function FoodCard({ data }) {
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();
  function handleCart() {
    if (inCart) {
      dispatch(removeItems());
      setInCart(false);
    } else {
      dispatch(addItems());
      setInCart(true);
    }
  }

  return (
    <>
      <img className="food-img" src={data?.img} alt={data?.food} />
      <h3 className="food-name">{data?.food}</h3>
      <p className="food-value">₹{data?.value}</p>
      <p className="food-rating">Rating: {data?.rating}</p>
      <p className="food-category">{data?.category}</p>
      <button className={`cart-btn ${inCart ? "remove" : "add"}`} onClick={handleCart}>
        {inCart ? "Remove" : "Add"}
      </button>
    </>
  );
}

export default FoodCard;
